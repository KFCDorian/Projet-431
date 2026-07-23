# Génère 02_tableaux_comparatifs.md depuis data/acteurs.csv.
# Relancer après toute mise à jour du CSV : python3 scripts/gen_tableaux.py
import collections
import os
from normalisation import (charger_acteurs, segment, verticales_normalisees,
                           hebergement_normalise, specialisation, prix_public,
                           ORDRE_AGENTICITE, RACINE)

rows = charger_acteurs()
N = len(rows)

NOMS_CANTONS = {'ZH': 'Zurich', 'VD': 'Vaud', 'GE': 'Genève', 'TI': 'Tessin', 'VS': 'Valais',
                'BE': 'Berne', 'AG': 'Argovie', 'LU': 'Lucerne', 'SG': 'Saint-Gall',
                'NE': 'Neuchâtel', 'BL': 'Bâle-Campagne', 'TG': 'Thurgovie', 'ZG': 'Zoug',
                'nd': 'non déterminé'}
SEG_LABEL = {'produit': 'Produit (startups et éditeurs)',
             'service': 'Service et intégration (agences, ESN, filiales de groupes)',
             'conseil': 'Conseil'}


def tableau(entetes, lignes, scope_row=False):
    out = ['| ' + ' | '.join(entetes) + ' |',
           '|' + '|'.join(['---'] * len(entetes)) + '|']
    for l in lignes:
        out.append('| ' + ' | '.join(str(x) for x in l) + ' |')
    return '\n'.join(out)


# 1. Tableau maître
maitre = []
for r in sorted(rows, key=lambda x: (x['canton'], x['nom'])):
    vert = '; '.join(v for v in verticales_normalisees(r) if v != 'Autres')[:70]
    maitre.append([r['nom'], r['canton'], r['ville'], r['statut'], r['cible'],
                   r['degre_agenticite'], vert, r['niveau_confiance']])
t_maitre = tableau(['Nom', 'Canton', 'Ville', 'Statut', 'Cible', 'Degré d\'agenticité',
                    'Verticales (normalisées)', 'Confiance'], maitre)

# 2. Comparatif par segment
segs = collections.Counter(segment(r) for r in rows)
lignes_seg = []
for s in ['produit', 'service', 'conseil']:
    sous = [r for r in rows if segment(r) == s]
    ag = collections.Counter(r['degre_agenticite'] for r in sous)
    top_ag = ', '.join(f"{k} ({v})" for k, v in ag.most_common(3))
    mr = collections.Counter()
    for r in sous:
        for m in r['modele_revenus'].split(';'):
            m = m.strip()
            if m and m != 'nd':
                mr[m] += 1
    top_mr = ', '.join(f"{k} ({v})" for k, v in mr.most_common(3))
    prix = sum(1 for r in sous if prix_public(r))
    lignes_seg.append([SEG_LABEL[s], len(sous), f"{100*len(sous)//N} %", top_ag, top_mr,
                       f"{prix}/{len(sous)}"])
t_segments = tableau(['Segment', 'Acteurs', 'Part', 'Degrés d\'agenticité dominants',
                      'Modèles de revenus dominants', 'Prix publics'], lignes_seg)

# 3. B2B vs B2C
lignes_cible = []
for c in ['B2B', 'B2C', 'B2B+B2C']:
    sous = [r for r in rows if r['cible'] == c]
    noms = ', '.join(r['nom'] for r in sous) if len(sous) <= 8 else \
        ', '.join(r['nom'] for r in sous[:6]) + f" et {len(sous)-6} autres"
    ag_max = collections.Counter(r['degre_agenticite'] for r in sous).most_common(1)
    lignes_cible.append([c, len(sous), f"{100*len(sous)//N} %",
                         ag_max[0][0] if ag_max else 'aucun', noms])
t_cibles = tableau(['Cible', 'Acteurs', 'Part', 'Agenticité dominante', 'Acteurs concernés'],
                   lignes_cible)

# 4. Prix
lignes_prix = []
for r in sorted(rows, key=lambda x: (segment(x), x['nom'])):
    if prix_public(r):
        lignes_prix.append([r['nom'], r['statut'], r['cible'], r['fourchette_prix']])
t_prix = tableau(['Acteur', 'Statut', 'Cible', 'Prix publics'], lignes_prix)
nb_prix = len(lignes_prix)

mr_global = collections.Counter()
for r in rows:
    for m in r['modele_revenus'].split(';'):
        m = m.strip()
        if m and m != 'nd':
            mr_global[m] += 1
t_modeles = tableau(['Modèle de revenus', 'Acteurs le pratiquant (cumul, un acteur peut en avoir plusieurs)'],
                    [[k, v] for k, v in mr_global.most_common()])

# 5. Verticales
compte_vert = collections.Counter()
seg_vert = collections.defaultdict(collections.Counter)
for r in rows:
    for v in verticales_normalisees(r):
        compte_vert[v] += 1
        seg_vert[v][segment(r)] += 1
lignes_vert = []
for v, c in compte_vert.most_common():
    if v == 'Autres':
        continue
    sv = seg_vert[v]
    lignes_vert.append([v, c, f"{100*c//N} %", sv.get('produit', 0), sv.get('service', 0),
                        sv.get('conseil', 0)])
t_verticales = tableau(['Verticale', 'Acteurs', 'Taux de couverture (sur 84)', 'Produit',
                        'Service', 'Conseil'], lignes_vert)

# 6. Maturité
ag_global = collections.Counter(r['degre_agenticite'] for r in rows)
lignes_mat = [[a, ag_global.get(a, 0), f"{100*ag_global.get(a, 0)//N} %"] for a in ORDRE_AGENTICITE]
t_maturite = tableau(['Degré d\'agenticité (niveau maximal démontré)', 'Acteurs', 'Part'], lignes_mat)

croise = collections.defaultdict(collections.Counter)
for r in rows:
    croise[r['statut']][r['degre_agenticite']] += 1
lignes_croise = []
for s in ['startup', 'editeur', 'agence', 'ESN', 'conseil', 'filiale']:
    lignes_croise.append([s] + [croise[s].get(a, 0) for a in ORDRE_AGENTICITE])
t_croise = tableau(['Statut'] + ORDRE_AGENTICITE, lignes_croise)

# 7. Matrice de positionnement (autonomie x spécialisation)
NIV_AUTO = {'chatbot': 'autonomie faible', 'RAG': 'autonomie faible',
            'workflow automatisé': 'autonomie moyenne',
            'agents autonomes multi-étapes': 'autonomie élevée',
            'infrastructure': 'infrastructure (hors matrice)'}
matrice = collections.defaultdict(list)
for r in rows:
    matrice[(NIV_AUTO[r['degre_agenticite']], specialisation(r))].append(r['nom'])
lignes_matrice = []
for auto in ['autonomie faible', 'autonomie moyenne', 'autonomie élevée', 'infrastructure (hors matrice)']:
    for spec in ['spécialiste', 'focalisé', 'multi-verticales', 'généraliste']:
        noms = matrice.get((auto, spec), [])
        if noms:
            lignes_matrice.append([auto, spec, len(noms), ', '.join(sorted(noms))])
t_matrice = tableau(['Autonomie de l\'offre', 'Spécialisation', 'Acteurs', 'Noms'], lignes_matrice)

# 8. Zones blanches
cantons = collections.Counter(r['canton'] for r in rows)
lignes_cantons = [[NOMS_CANTONS.get(c, c) + f" ({c})", n] for c, n in cantons.most_common()]
t_cantons = tableau(['Canton', 'Acteurs'], lignes_cantons)

heat = collections.defaultdict(collections.Counter)
verts_tries = [v for v, _ in compte_vert.most_common() if v != 'Autres']
for r in rows:
    for v in verticales_normalisees(r):
        heat[v][r['degre_agenticite']] += 1
lignes_heat = []
for v in verts_tries:
    lignes_heat.append([v] + [heat[v].get(a, 0) or 'VIDE' for a in ORDRE_AGENTICITE])
t_heatmap = tableau(['Verticale \\ Maturité'] + ORDRE_AGENTICITE, lignes_heat)

# 9. Chronologie
annees = collections.Counter(r['annee_creation'] for r in rows if r['annee_creation'] != 'nd')
nd_annees = sum(1 for r in rows if r['annee_creation'] == 'nd')
lignes_ans = [[a, n] for a, n in sorted(annees.items()) if int(a) >= 2012]
t_annees = tableau(['Année de création', 'Acteurs (parmi les 39 années connues)'], lignes_ans)

# Hébergement
heb = collections.Counter(hebergement_normalise(r) for r in rows)
t_heberg = tableau(['Hébergement des données (normalisé)', 'Acteurs'],
                   [[k, v] for k, v in heb.most_common()])

DOC = f"""# 02 - Tableaux comparatifs
Date : 23 juillet 2026. Source unique : `data/acteurs.csv` ({N} acteurs). Ce document est
généré par `scripts/gen_tableaux.py` : les totaux correspondent mécaniquement au CSV.
Rappel méthodologique : le degré d'agenticité retenu est le niveau maximal démontré de façon
crédible, pas le discours marketing ; en cas de doute, le niveau inférieur a été retenu.

## 1. Tableau maître des {N} acteurs

{t_maitre}

Lecture : la base compte {N} acteurs après déduplication (14 doublons fusionnés, voir
`data/notes_consolidation.md`). Environ 70 acteurs supplémentaires repérés mais non documentés
figurent dans `data/acteurs_annexe.md`.

## 2. Comparatif par segment : produit, service, conseil

{t_segments}

Lecture : le marché suisse est un marché de SERVICE avant d'être un marché de produit, ce qui
confirme l'hypothèse H1 du plan de recherche. Les filiales sont ventilées selon leur activité
réelle : Wonderful AI, Lakera et Invariant Labs en produit ; Accenture, IBM, Capgemini, adesso
et Effixis/Artefact en service. La transparence tarifaire est concentrée dans le service aux
PME : les éditeurs produit et les grands cabinets ne publient presque jamais leurs prix.

## 3. Comparatif B2B, B2C et mixte

{t_cibles}

Lecture : le B2C suisse est marginal ({100*len([r for r in rows if r['cible'] == 'B2C'])//N} % des acteurs)
et plafonne au niveau chatbot/RAG/workflow ; aucun agent personnel autonome grand public suisse
n'existe à ce jour, ce qui confirme l'hypothèse H2. Les deux acteurs mixtes (Swisscom, Giotto.ai)
sont soit un géant établi, soit une startup en cours de lancement grand public.

## 4. Comparatif prix et modèles de revenus

Seuls {nb_prix} acteurs sur {N} publient des prix, presque tous des agences PME ou des offres B2C.

{t_prix}

{t_modeles}

Lecture : trois étages de prix se dessinent. (1) L'entrée de gamme PME : audit ou diagnostic de
390 à 4 500 CHF, premier agent ou workflow de 1 500 à 30 000 CHF en forfait projet, puis un
"run" de 200 à 1 500 CHF par mois. (2) Le SaaS : de 29 à 699 CHF par mois (Evoya) ou à l'usage
(Typewise, environ 1 USD par résolution). (3) Le grand compte : non publié, en régie ou licence
d'entreprise (Unique, Squirro, grands cabinets), les TJM suisses ne sont pas publics. Le B2C est
freemium ou gratuit, signe d'une disposition à payer non démontrée.

## 5. Comparatif par verticale sectorielle

{t_verticales}

Lecture : banque/finance, santé/pharma et industrie sont les verticales les plus disputées,
servies à la fois par des produits spécialisés et par tous les grands intégrateurs. À l'inverse,
la construction/artisanat, la fiduciaire/comptabilité et l'immobilier ne sont couverts que par de
petites agences en workflow, sans éditeur produit dédié. Un même acteur compte dans plusieurs
verticales ; les pourcentages ne s'additionnent pas.

## 6. Comparatif du niveau de maturité technique

{t_maturite}

{t_croise}

Lecture : 65 % du marché livre du "workflow automatisé" (orchestrations n8n/Copilot, RAG outillé
avec actions), souvent vendu comme agentique. Les vrais agents autonomes multi-étapes démontrés
sont le fait de 11 acteurs, presque tous des produits zurichois financés (Unique, DeepJudge,
Typewise, LogicStar, nunu.ai, Enterprise Bot, Wonderful AI, BSI, Sonar) plus Swisscom et Visium.
Cela confirme l'hypothèse H6 : le discours agentique dépasse largement la réalité livrée.

## 7. Matrice de positionnement : autonomie x spécialisation

{t_matrice}

Lecture : la case la plus encombrée est "autonomie moyenne x généraliste ou multi-verticales",
celle des agences PME au positionnement interchangeable. Les cases défendables sont en haut à
droite : autonomie élevée et spécialisation sectorielle (DeepJudge en juridique, Unique en
finance, nunu.ai en jeux vidéo). La couche infrastructure (7 acteurs) est traitée à part : elle
vend aux autres acteurs, pas aux clients finaux.

## 8. Zones blanches

### 8a. Couverture géographique

{t_cantons}

Lecture : 12 cantons sur 26 n'ont AUCUN acteur recensé, dont Bâle-Ville (capitale pharma !),
Fribourg, le Jura, Soleure, les Grisons et Schaffhouse. Zoug, pourtant place économique majeure,
n'héberge qu'un éditeur historique (eTax). Fribourg n'est servi que par des acteurs multi-cantons.
Zurich concentre 44 % des acteurs.

### 8b. Heatmap verticales x maturité (les cases VIDE sont les zones blanches)

{t_heatmap}

Lecture : les cases vides en colonne "agents autonomes multi-étapes" sont les vraies zones
blanches produit : fiduciaire/comptabilité (10 acteurs, tous en workflow), immobilier,
construction/artisanat, RH/éducation et l'offre généraliste PME n'ont aucun acteur suisse au
niveau d'autonomie maximal. Le secteur public et le grand public n'en comptent qu'un seul,
Swisscom, qui n'est pas un acteur dédié. Les nombreuses cases vides en colonne chatbot sont au
contraire un signe de maturité : plus personne ne vend du chatbot nu dans ces verticales.

### 8c. Segments structurellement peu couverts (synthèse qualitative)

| Zone blanche | Constat chiffré | Source du constat |
|---|---|---|
| B2C et prosumer agentique | 6 acteurs B2C, aucun au-delà du workflow ; freemium dominant | CSV + recherche/05 |
| Fiduciaire/comptabilité en produit | 10 acteurs, tous agences/conseil en workflow, aucun éditeur dédié | CSV |
| Secteur public à haute autonomie | 24 acteurs mais un seul agent autonome (Swisscom) ; demande réelle (AO fédéral 57 M CHF) | CSV + recherche/08 |
| Cantons hors ZH/VD | 12 cantons sans acteur ; Bâle-Ville et Zoug quasi vides | CSV |
| Multilinguisme FR/DE/IT natif | Agences romandes en FR, alémaniques en DE ; rares offres tri-lingues | recherche/01, 02 |
| Hébergement souverain vérifiable | {heb.get('Non précisé', 0)} acteurs sur {N} ne précisent pas l'hébergement malgré l'argument marketing | CSV |

## 9. Chronologie des créations (données partielles)

{t_annees}

Avertissement : l'année de création n'est publique que pour {N - nd_annees} acteurs sur {N}
({nd_annees} "nd", surtout des petites agences récentes). La vague 2021-2025 est donc
sous-estimée dans ce tableau ; les fiches de recherche indiquent que la majorité des agences PME
sont nées après 2023.

## 10. Hébergement des données (argument souveraineté)

{t_heberg}

Lecture : l'hébergement suisse est l'argument marketing le plus répandu du marché, mais
{heb.get('Non précisé', 0)} acteurs sur {N} ne précisent pas publiquement où tournent leurs
données. L'écart entre le discours souveraineté et la documentation réelle est une zone de
différenciation pour un entrant qui prouverait son hébergement (certifications, DPA public).
"""

with open(os.path.join(RACINE, '02_tableaux_comparatifs.md'), 'w', encoding='utf-8') as f:
    f.write(DOC)
print(f"OK : 02_tableaux_comparatifs.md généré ({N} acteurs, {nb_prix} prix publics, "
      f"{len(verts_tries)} verticales normalisées)")
