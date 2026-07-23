# Normalisation partagée entre les tableaux (Phase 3) et l'export du site (Phase 7).
# Source de vérité : data/acteurs.csv (schéma contractuel de 20 colonnes).
import csv
import os

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSV_ACTEURS = os.path.join(RACINE, 'data', 'acteurs.csv')

# Segments d'offre : produit / service-intégration / conseil.
# Les filiales sont ventilées à la main car le statut ne suffit pas.
FILIALES_PRODUIT = {'Wonderful AI', 'Lakera', 'Invariant Labs'}
FILIALES_CONSEIL = {'Accenture Suisse', 'IBM Consulting Suisse', 'Capgemini Suisse',
                    'adesso Schweiz AG', 'Effixis SA (Artefact Suisse)'}

ORDRE_AGENTICITE = ['chatbot', 'RAG', 'workflow automatisé',
                    'agents autonomes multi-étapes', 'infrastructure']

# Verticales normalisées : règles par mots-clés appliquées aux tokens libres du CSV.
REGLES_VERTICALES = [
    ('Banque et finance', ['banque', 'finance', 'fortune', 'asset', 'néobanque', 'trading',
                           'matières premières', 'prévoyance', 'investissement', 'pilier 3a',
                           'compliance', 'audit']),
    ('Assurance', ['assurance']),
    ('Santé et pharma', ['santé', 'pharma', 'médic', 'medtech', 'clinique', 'dentaire',
                         'vétérinaire', 'sciences de la vie', 'chimie']),
    ('Juridique', ['juridique', 'droit', 'avocat']),
    ('Fiduciaire et comptabilité', ['fiduciaire', 'comptab', 'paie', 'fiscal', 'experts-comptables']),
    ('Industrie et énergie', ['industrie', 'manufactur', 'machines', 'robotique', 'énergie',
                              'utilities', 'iot', 'smart building', 'high-tech', 'ingénierie',
                              'horlogerie', 'défense']),
    ('Retail et e-commerce', ['retail', 'e-commerce', 'commerce', 'luxe', 'ventes']),
    ('Secteur public', ['secteur public', 'administration', 'gouvernement', 'parlement',
                        'communaut', 'ong', 'associations', 'musées', 'culture']),
    ('Hôtellerie et tourisme', ['hospitality', 'hôtel', 'restaurant', 'tourisme', 'voyage']),
    ('Construction et artisanat', ['construction', 'bâtiment', 'artisan', 'garage',
                                   'second oeuvre', 'nettoyage', 'immobilier de vacances']),
    ('Immobilier', ['immobilier']),
    ('IT et développement', ['développement logiciel', 'logiciel', 'itsm', 'it ', 'support it',
                             'jeux vidéo', 'applications mobiles', 'cybersécurité', 'sécurité des agents',
                             'gouvernance', 'évaluation de l', 'risques ia', 'modèles de raisonnement',
                             'ia frugale', 'reconnaissance vocale', 'transcription', 'traduction',
                             'service client', 'digitalisation']),
    ('RH et éducation', ['rh', 'éducation', 'hautes écoles', 'formation']),
    ('Télécoms et médias', ['télécom', 'médias', 'mobilité']),
    ('Grand public', ['grand public', 'particuliers', 'contribuables', 'finances personnelles',
                      'finance personnelle', 'indépendants', 'créatifs', 'prosumer', 'raison individuelle']),
]
GENERALISTE = ['multisectoriel', 'généraliste', 'tous secteurs', 'transverse', 'pme', 'tpe',
               'grandes entreprises', 'grandes organisations', 'services de proximité', 'services']


def charger_acteurs():
    with open(CSV_ACTEURS, encoding='utf-8') as f:
        return list(csv.DictReader(f))


def segment(row):
    s = row['statut']
    if s in ('startup', 'editeur'):
        return 'produit'
    if s == 'conseil':
        return 'conseil'
    if s == 'filiale':
        if row['nom'] in FILIALES_PRODUIT:
            return 'produit'
        return 'service'
    return 'service'  # agence, ESN


def verticales_normalisees(row):
    """Retourne la liste triée des verticales normalisées d'un acteur."""
    tokens = [t.strip().lower() for t in row['verticales'].split(';') if t.strip()]
    res = set()
    for t in tokens:
        for nom, cles in REGLES_VERTICALES:
            if any(c in t for c in cles):
                res.add(nom)
                break
        else:
            if any(g in t for g in GENERALISTE):
                res.add('Généraliste / PME tous secteurs')
            else:
                res.add('Autres')
    return sorted(res)


def hebergement_normalise(row):
    h = row['hebergement_donnees'].lower()
    if h.startswith('au choix') or 'selon le cloud' in h:
        return 'Au choix du client'
    if h.startswith('suisse ou ue'):
        return 'Suisse ou UE'
    if h.startswith('suisse'):
        return 'Suisse'
    if h.startswith('ue'):
        return 'UE'
    if h.startswith('us'):
        return 'US'
    return 'Non précisé'


def specialisation(row):
    """Spécialiste (1 verticale), focalisé (2-3), multi (4+), généraliste."""
    v = verticales_normalisees(row)
    if 'Généraliste / PME tous secteurs' in v and len(v) <= 2:
        return 'généraliste'
    n = len([x for x in v if x not in ('Généraliste / PME tous secteurs', 'Autres')])
    if n <= 1:
        return 'spécialiste'
    if n <= 3:
        return 'focalisé'
    return 'multi-verticales'


def prix_public(row):
    p = row['fourchette_prix']
    return bool(p) and 'non disponible' not in p.lower() and p != 'nd'
