# Exporte les données du site depuis data/acteurs.csv (et 06_sources.md si présent).
# Écrit : site/data/acteurs.json, site/data/analyse.json, site/assets/data.js
# Le fichier data.js reprend les deux JSON en variables globales : c'est le canal de
# chargement effectif du site, car fetch() sur des fichiers locaux est bloqué par les
# navigateurs en protocole file:// (CORS). Documenté dans site/README.md.
# Relancer après toute mise à jour du CSV : python3 scripts/gen_site_data.py
import collections
import json
import os
import re
from normalisation import (charger_acteurs, segment, verticales_normalisees,
                           hebergement_normalise, specialisation, prix_public,
                           ORDRE_AGENTICITE, RACINE)

rows = charger_acteurs()
N = len(rows)
NIVEAU = {'chatbot': 1, 'RAG': 2, 'workflow automatisé': 3,
          'agents autonomes multi-étapes': 4, 'infrastructure': 0}


def effectif_num(txt):
    """Estimation numérique de l'effectif pour la taille des bulles ; None si inconnu."""
    t = txt.replace("'", '').replace('[EST]', '').strip()
    m = re.search(r'(\d+)\s*-\s*(\d+)', t)
    if m:
        return (int(m.group(1)) + int(m.group(2))) / 2
    m = re.search(r'(\d[\d\s]*)', t)
    if m:
        v = float(m.group(1).replace(' ', ''))
        if 'plusieurs mill' in t:
            v = 2000
        if 'plusieurs cent' in t:
            v = 300
        return v
    if 'plusieurs mill' in t:
        return 2000
    if 'plusieurs cent' in t:
        return 300
    return None


acteurs = []
for r in rows:
    a = dict(r)
    a['segment'] = segment(r)
    a['verticales_norm'] = verticales_normalisees(r)
    a['hebergement_norm'] = hebergement_normalise(r)
    a['specialisation'] = specialisation(r)
    a['agenticite_niveau'] = NIVEAU[r['degre_agenticite']]
    a['effectif_num'] = effectif_num(r['effectif_estime'])
    a['prix_public'] = prix_public(r)
    acteurs.append(a)

# Agrégats
cantons = collections.Counter(r['canton'] for r in rows)
segments = collections.Counter(a['segment'] for a in acteurs)
cibles = collections.Counter(r['cible'] for r in rows)
maturite = {k: sum(1 for r in rows if r['degre_agenticite'] == k) for k in ORDRE_AGENTICITE}
statuts = collections.Counter(r['statut'] for r in rows)
heberg = collections.Counter(a['hebergement_norm'] for a in acteurs)

vert_seg = collections.defaultdict(lambda: collections.Counter())
vert_mat = collections.defaultdict(lambda: collections.Counter())
vert_tot = collections.Counter()
for a in acteurs:
    for v in a['verticales_norm']:
        if v == 'Autres':
            continue
        vert_tot[v] += 1
        vert_seg[v][a['segment']] += 1
        vert_mat[v][a['degre_agenticite']] += 1
verticales = [v for v, _ in vert_tot.most_common()]

annees = collections.Counter(int(r['annee_creation']) for r in rows if r['annee_creation'] != 'nd')
nb_annee_nd = sum(1 for r in rows if r['annee_creation'] == 'nd')

# Levées de fonds documentées (source : recherche/06_financement_signaux.md, montants
# publiés dans la presse ; USD sauf mention ; liste curée à la main car le champ CSV
# est en texte libre). Fiabilité indiquée par levée.
LEVEES = [
    {"annee": 2024, "societe": "EthonAI", "montant": 16.5, "devise": "USD", "tour": "Series A", "fiabilite": "élevée"},
    {"annee": 2024, "societe": "Lakera", "montant": 20, "devise": "USD", "tour": "Series A", "fiabilite": "élevée"},
    {"annee": 2024, "societe": "Calvin Risk", "montant": 4, "devise": "USD", "tour": "Seed", "fiabilite": "élevée"},
    {"annee": 2025, "societe": "Unique", "montant": 30, "devise": "USD", "tour": "Series A", "fiabilite": "élevée"},
    {"annee": 2025, "societe": "LogicStar AI", "montant": 3, "devise": "USD", "tour": "Pre-seed", "fiabilite": "élevée"},
    {"annee": 2025, "societe": "nunu.ai", "montant": 6, "devise": "USD", "tour": "Seed", "fiabilite": "élevée"},
    {"annee": 2025, "societe": "DeepJudge", "montant": 41.2, "devise": "USD", "tour": "Series A", "fiabilite": "élevée"},
    {"annee": 2025, "societe": "Omnilex", "montant": 4.5, "devise": "USD", "tour": "Seed", "fiabilite": "élevée"},
    {"annee": 2025, "societe": "Wonderful AI (siège européen Zurich)", "montant": 100, "devise": "USD", "tour": "Series A", "fiabilite": "moyenne"},
    {"annee": 2026, "societe": "Rivia", "montant": 15, "devise": "USD", "tour": "Series A", "fiabilite": "élevée"},
    {"annee": 2026, "societe": "General Intuition (équipe genevoise, société d'origine US)", "montant": 133.7, "devise": "USD", "tour": "Seed", "fiabilite": "moyenne"},
    {"annee": 2026, "societe": "AlpineAI", "montant": None, "devise": "CHF", "tour": "Seed (montant non divulgué)", "fiabilite": "élevée"},
]
levees_annee = collections.defaultdict(float)
for l in LEVEES:
    if l['montant']:
        levees_annee[l['annee']] += l['montant']
financement_cumule = round(sum(l['montant'] for l in LEVEES if l['montant']), 1)

# Grille des angles stratégiques (source : 04_angle_strategique.md, notes [EST])
CRITERES = ["Taille du besoin", "Concurrence (5 = faible)", "Difficulté technique (5 = faible)",
            "Cycle de vente (5 = court)", "Capital (5 = faible)", "Défendabilité",
            "Délai 1er revenu (5 = court)"]
ANGLES = [
    {"id": "A", "nom": "Fiduciaires et cabinets comptables", "scores": [4, 4, 3, 4, 4, 4, 4], "retenu": True},
    {"id": "B", "nom": "Secteur public romand", "scores": [4, 4, 2, 1, 3, 3, 1], "retenu": False},
    {"id": "C", "nom": "PME généraliste trilingue", "scores": [5, 1, 2, 3, 2, 1, 3], "retenu": False},
    {"id": "D", "nom": "Souveraineté professions à secret", "scores": [4, 3, 2, 2, 2, 4, 2], "retenu": False},
    {"id": "E", "nom": "Construction et artisanat", "scores": [4, 4, 4, 4, 4, 3, 4], "retenu": False},
    {"id": "F", "nom": "B2C / prosumer payant", "scores": [2, 3, 3, 5, 2, 2, 3], "retenu": False},
    {"id": "G", "nom": "Hôtellerie et tourisme", "scores": [3, 4, 4, 4, 4, 2, 4], "retenu": False},
]
for a_ in ANGLES:
    a_['total'] = sum(a_['scores'])

# TAM / SAM / SOM (source : 03_analyse_marche.md, calcul bottom-up, hypothèses explicites)
TAM_SAM_SOM = [
    {"niveau": "TAM", "libelle": "Marché suisse total à horizon 2028",
     "bas": 700, "haut": 1000, "unite": "M CHF/an", "statut": "estimation",
     "hypothese": "Bottom-up par étage de clientèle (OFS/STATENT) : pénétration 5 à 60 % selon la taille, paniers de 2 400 à 300 000 CHF/an"},
    {"niveau": "SAM", "libelle": "PME romandes + fiduciaires (entrant romand)",
     "bas": 40, "haut": 80, "unite": "M CHF/an", "statut": "estimation",
     "hypothese": "Restriction aux étages PME de Suisse romande (~25 % du tissu) plus la verticale fiduciaire nationale"},
    {"niveau": "SOM", "libelle": "Captable à 24 mois (petite équipe)",
     "bas": 0.15, "haut": 0.6, "unite": "M CHF/an", "statut": "hypothèse",
     "hypothese": "0,3 à 1 % du SAM : 10 à 25 clients à 6 000-25 000 CHF de projet plus run mensuel (prix publics observés)"},
]

# Sources : parse de 06_sources.md si le fichier existe déjà
sources = []
chemin_sources = os.path.join(RACINE, '06_sources.md')
if os.path.exists(chemin_sources):
    with open(chemin_sources, encoding='utf-8') as f:
        for ligne in f:
            c = [x.strip() for x in ligne.strip().strip('|').split('|')]
            if len(c) >= 4 and c[1].startswith('http'):
                sources.append({"titre": c[0], "url": c[1], "date": c[2],
                                "fiabilite": c[3], "usage": c[4] if len(c) > 4 else ''})

zones_blanches = [
    {"zone": "B2C et prosumer agentique", "constat": "6 acteurs B2C seulement, aucun au-delà du workflow, freemium dominant", "source": "acteurs.csv + recherche/05"},
    {"zone": "Fiduciaire et comptabilité en produit", "constat": "10 acteurs, tous agences ou conseil en workflow, aucun éditeur dédié", "source": "acteurs.csv"},
    {"zone": "Secteur public à haute autonomie", "constat": "24 acteurs mais un seul agent autonome (Swisscom) ; demande réelle : AO fédéral 57 M CHF", "source": "acteurs.csv + recherche/08"},
    {"zone": "Cantons sans acteur", "constat": "12 cantons sur 26 sans aucun acteur recensé, dont Bâle-Ville, Fribourg, le Jura et les Grisons", "source": "acteurs.csv"},
    {"zone": "Multilinguisme FR/DE/IT natif", "constat": "Agences romandes en FR, alémaniques en DE ; très rares offres nativement trilingues", "source": "recherche/01 et 02"},
    {"zone": "Hébergement souverain prouvé", "constat": "38 acteurs sur 84 ne précisent pas leur hébergement malgré l'argument marketing", "source": "acteurs.csv"},
]

analyse = {
    "date_etude": "2026-07-23",
    "kpis": {
        "nb_acteurs": N,
        "nb_cantons": len([c for c in cantons if c != 'nd']),
        "part_b2b_pct": round(100 * cibles['B2B'] / N),
        "nb_b2c": cibles['B2C'] + cibles['B2B+B2C'],
        "financement_cumule_musd": financement_cumule,
        "nb_agents_autonomes": maturite['agents autonomes multi-étapes'],
        "nb_prix_publics": sum(1 for a in acteurs if a['prix_public']),
        "annee_creation_connue": N - nb_annee_nd,
    },
    "cantons": [{"canton": c, "n": n} for c, n in cantons.most_common()],
    "segments": dict(segments),
    "cibles": dict(cibles),
    "maturite": maturite,
    "statuts": dict(statuts),
    "hebergement": dict(heberg),
    "verticales": verticales,
    "verticale_segment": {v: dict(vert_seg[v]) for v in verticales},
    "verticale_maturite": {v: {k: vert_mat[v].get(k, 0) for k in ORDRE_AGENTICITE} for v in verticales},
    "creations_par_annee": {str(a): n for a, n in sorted(annees.items()) if a >= 2012},
    "creations_nd": nb_annee_nd,
    "levees": LEVEES,
    "levees_par_annee": {str(a): round(m, 1) for a, m in sorted(levees_annee.items())},
    "criteres_angles": CRITERES,
    "angles": ANGLES,
    "tam_sam_som": TAM_SAM_SOM,
    "zones_blanches": zones_blanches,
    "sources": sources,
}

os.makedirs(os.path.join(RACINE, 'site', 'data'), exist_ok=True)
os.makedirs(os.path.join(RACINE, 'site', 'assets'), exist_ok=True)
with open(os.path.join(RACINE, 'site', 'data', 'acteurs.json'), 'w', encoding='utf-8') as f:
    json.dump(acteurs, f, ensure_ascii=False, indent=1)
with open(os.path.join(RACINE, 'site', 'data', 'analyse.json'), 'w', encoding='utf-8') as f:
    json.dump(analyse, f, ensure_ascii=False, indent=1)
with open(os.path.join(RACINE, 'site', 'assets', 'data.js'), 'w', encoding='utf-8') as f:
    f.write("// Généré par scripts/gen_site_data.py depuis data/acteurs.csv : NE PAS ÉDITER À LA MAIN.\n"
            "// Données inline car fetch() est bloqué en protocole file:// (voir site/README.md).\n")
    f.write("window.ACTEURS = " + json.dumps(acteurs, ensure_ascii=False) + ";\n")
    f.write("window.ANALYSE = " + json.dumps(analyse, ensure_ascii=False) + ";\n")

print(f"OK : {N} acteurs exportés, {len(sources)} sources"
      + (" (06_sources.md absent : relancer après sa création)" if not sources else "")
      + f", financement cumulé documenté {financement_cumule} M USD")
