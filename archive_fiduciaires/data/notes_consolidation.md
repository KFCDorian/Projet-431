# Notes de consolidation - base acteurs.csv

Date : 2026-07-23
Sources consolidées : recherche/01_cartographie_alemanique.md, 02_cartographie_romandie_tessin.md, 03_ecosysteme_academique.md, 04_conseil_integrateurs.md, 05_offres_b2c.md. Le fichier 06_financement_signaux.md a été utilisé uniquement pour enrichir la colonne financement (et l'effectif d'Unique). Les fichiers 07 et 08 n'ont pas été utilisés.

Résultat : 84 lignes de données (une par acteur), 20 champs par ligne, aucun doublon de nom.

## 1. Doublons fusionnés (14 acteurs présents dans plusieurs fichiers)

| Acteur | Fichiers sources | Traitement |
|---|---|---|
| Unique AI AG | 01 (fiche 1), 03 (fiche 2.1), 06 (financement, effectif) | Fusion : offre détaillée du 01, financement précis du 03/06 (30 M USD Series A, total 53 M), clients cumulés, effectif PitchBook (~165) du 06 |
| DeepJudge AG | 01 (fiche 3), 03 (fiche 2.2), 06 | Fusion : offre du 01, financement sourcé du 03/06 (41,2 M USD Series A), clients cumulés des deux fiches |
| Squirro AG | 01 (fiche 4), 03 (section 2.16 contexte), 06 | Fusion : fiche 01 comme base, croissance ~60 % et acquisition Synaptica du 03/06, total levé ~29 M USD (Tracxn) du 06 |
| AlpineAI AG (SwissGPT) | 01 (fiche 5), 03 (fiche 2.11), 04 (fiche 20), 06 | Fusion des trois fiches ; financement précisé par le 06 (seed avril 2026, Swiss KMU Partners) |
| nunu.ai | 01 (fiche 11), 03 (fiche 2.9) | Fusion : total levé 8 M USD (pre-seed 2 M + seed 6 M) du 03, offre du 01 |
| LogicStar AI | 01 (fiche 12), 03 (fiche 2.7) | Fusion : année 2024 et détails investisseurs du 03, clients du 01 |
| ti&m AG | 01 (fiche 15), 04 (fiche 12) | Fusion : produits détaillés des deux fiches ; réserve du 04 sur l'absence de références de production intégrée |
| Sidora AG | 01 (fiche 19), 04 (fiche 21) | Fusion : stack et prix du 01, langues complétées par le 04 (DE; FR; EN), présence Berne ajoutée |
| Visium SA | 02 (fiche 3.1), 03 (fiche 2.14), 04 (fiche 17) | Fusion : verticales et clients du 02, effectif ~100 du 03, détails Visium Labs (multi-agents life sciences) du 04 |
| Unit8 SA | 02 (fiche 3.4), 04 (fiche 16), 01 (annexe) | Fusion : partenariat OpenAI et 250+ projets du 04, clients du 02 |
| Effixis SA (Artefact Suisse) | 02 (fiche 3.5), 04 (fiche 18) | Fusion : verticales (luxe, banque, santé) du 04, reste du 02 |
| ELCA Informatique SA | 02 (fiche 3.3), 04 (fiche 10) | Fusion : Agentic Engineering Unit et souveraineté Azure Local des deux fiches, langues FR/DE/EN du 04 |
| Swisscom SA | 04 (fiche 13, offre B2B), 05 (fiche 2.2 myAI, B2C) | Fusion en une ligne : cible B2B+B2C, description couvrant Swiss AI Platform, GenAI Studio, Swiss AI Assistant et myAI ; degré retenu : agents autonomes multi-étapes (plateforme interne MCP/A2A démontrée, fait sourcé AWS) |
| Giotto.ai | 03 (fiche 2.10), 05 (fiche 2.3) | Fusion en une ligne : cible B2B+B2C (lancement cloud grand public juillet 2026), degré retenu : infrastructure (moteur de raisonnement comme brique agentique) |

Kigent et Lakera apparaissent aussi en annexe d'autres fichiers (04 et 01 respectivement) ; la fiche complète a fait foi dans chaque cas.

## 2. Contradictions entre sources et arbitrages

1. DeepJudge, financement : le fichier 01 mentionnait une Series A de 21,4 M USD en 2025 marquée [hypothèse à vérifier] ; les fichiers 03 et 06 sourcent 41,2 M USD (novembre 2025, Felicis, Coatue, valorisation 300 M USD). Retenu : 41,2 M USD (sources multiples : Forbes, startupticker, Venturelab).
2. AlpineAI, siège : Zurich en estimation dans le 01, "fondée à Davos (GR), active depuis Zurich" dans les 03 et 04. Retenu : canton ZH (siège opérationnel actuel), avec la mention de la fondation à Davos conservée dans la description.
3. Unit8, siège : le fichier 02 estimait le siège à Zurich (ordre des bureaux listés) ; le fichier 04 le source à Lausanne (unit8.com/about) et l'annexe du 01 dit également Lausanne. Retenu : VD, Lausanne.
4. nunu.ai, date du seed : mars 2025 dans le 01, avril 2025 dans le 03. Retenu : "seed 6 M USD en 2025" sans mois, avec le total de 8 M USD du fichier 03.
5. Unique, effectif : "environ 100+" en hypothèse dans le 01 contre ~165 selon PitchBook dans le 06. Retenu : [EST] 165 (source la plus récente et la plus précise, précision non garantie par PitchBook).
6. Visium, effectif : "40+ ingénieurs" (02) contre "environ 100 personnes en Europe" (03). Retenu : [EST] 100 avec mention des 40+ ingénieurs.
7. Kigent, localisation : un résultat de recherche mentionnait Zoug, l'adresse du site indique Dübendorf (ZH). Arbitrage déjà fait dans le fichier 01 (l'adresse du site fait foi) et repris tel quel.
8. ti&m, degré d'agenticité : niveau élevé revendiqué par l'éditeur (01) contre "références de production non publiées" (04). Retenu : workflow automatisé, conformément à la règle du niveau maximal démontré de façon crédible (le niveau autonome revendiqué reste mentionné dans la description).
9. Squirro, financement : tour de 4 M USD en 2022 (01) et total ~29 M USD selon Tracxn (06). Non contradictoire, les deux informations sont combinées dans la colonne financement.
10. Lakera, montant d'acquisition : ~300 M USD rapporté par la presse israélienne (Calcalist), non confirmé officiellement par Check Point (03 et 06 concordants). Conservé avec la réserve explicite dans la colonne financement.
11. Totaux VC suisses 2025 (contexte, hors CSV) : le fichier 06 signale une divergence SVCR (CHF 2,95 mds) contre EY (CHF 3,3 mds) due aux périmètres ; sans impact sur le CSV.

## 3. Choix de normalisation notables

- Degré d'agenticité : application stricte de la règle "niveau maximal démontré, en cas de doute niveau inférieur". Les niveaux "moyen à élevé" ou "revendiqué niveau 4" sans preuve de production ont été classés "workflow automatisé" (ex. ti&m, Squirro, Unit8, Big Four, aiaibot, NETNODE). "agents autonomes multi-étapes" est réservé aux acteurs où l'autonomie multi-étapes est documentée (Unique, Typewise, DeepJudge, Enterprise Bot, nunu.ai, LogicStar, BSI, Wonderful AI, Visium, Sonar, Swisscom). Les briques de sécurité, d'évaluation, de modèles ou de parole (Invariant Labs, Lakera, LatticeFlow, Calvin Risk, Giotto.ai, inait, Recapp) sont classées "infrastructure".
- Statut : les Big Four (Deloitte, PwC, EY, KPMG) sont classés "conseil" (sociétés suisses membres d'un réseau) ; Accenture, IBM, Capgemini, adesso, Wonderful AI, Effixis/Artefact, Invariant Labs (Snyk) et Lakera (Check Point) sont classés "filiale" (filiales suisses de groupes étrangers ou sociétés rachetées par des groupes étrangers). Evoya AI et Apptiva, à double casquette produit + services, sont classés "editeur" (le produit structure l'offre).
- Années de création reprises telles quelles même lorsqu'elles étaient des estimations raisonnées des fiches (Sonar 2008, Zühlke 1968, BSI 1996, ti&m 2005, Enterprise Bot 2017, Spitch 2014, Parashift 2018, nunu.ai 2023, LogicStar 2024) ; les années trop vagues ("milieu des années 2010" pour Selma, "avant 2015" pour Apptiva, "vers les années 1970" pour ELCA) sont notées "nd".
- Swisscom et Giotto.ai portent la cible B2B+B2C suite aux fusions décrites ci-dessus.
- Le champ financement contient "nd" pour les sociétés établies sans donnée (mention "société établie" entre parenthèses le cas échéant) ; aucun acteur n'était documenté comme explicitement autofinancé, hormis aiaibot noté "rentable, break-even atteint".

## 4. Entrées incertaines conservées (niveau de confiance faible : 3)

1. ASIMBA LABS (Berne) : site partiellement chargé lors de la consultation, offre peu documentée. Conservée car fiche complète du fichier 01, avec beaucoup de champs "nd".
2. IA Swiss (Neuchâtel) : site inaccessible (erreur 403), données issues uniquement d'extraits de moteurs de recherche. Conservée car fiche complète du fichier 02.
3. Adnovum (Zurich) : intégrateur établi mais offre agentique publique non démontrée (aucune page dédiée repérée, risque de faux négatif signalé par la fiche 04). Conservée au titre d'intégrateur de confiance, degré prudent "RAG".

Autres réserves signalées dans le CSV via le niveau "moyen" (30 entrées), notamment : nunu.ai (entité juridique américaine, ancrage zurichois à confirmer), Wonderful AI (fiche fondée sur la presse, site non consulté), Artificialy (site inaccessible, sources institutionnelles), Cervo.AI (entité juridique non vérifiée), Inno-Mation et Magic Heidi (siège non confirmé, canton "nd"), the aigency et apexAI (ville et canton non confirmés), PwC (page suisse consultée via extraits, 403), KPMG (rapport agentique retiré pour hallucinations en juin 2026, réserve forte sur ses chiffres).

## 5. Acteurs exclus du CSV et pourquoi

1. Helvetia (chatbot Clara, fichier 05 fiche 2.11) : assistant intégré non commercialisé ; Helvetia est un assureur utilisateur d'IA, pas un fournisseur d'offre IA, et aucun statut de la nomenclature (startup/editeur/agence/ESN/conseil/filiale) ne s'applique. L'information est conservée dans acteurs_annexe.md.
2. Tous les acteurs mentionnés uniquement dans les annexes des fichiers de recherche (sections "acteurs repérés mais non documentés") : reportés dans acteurs_annexe.md, conformément à la consigne (environ 70 noms). Cas particuliers documentés dans les annexes : RWAI Schweiz AG (cessation d'activité annoncée), Coteries (pivot hors IA), Hyperion AI (incohérences d'identité), Ziya GmbH et Bell Integration (pas de présence suisse démontrée).
3. Apertus (EPFL/ETH/CSCS) : modèle LLM ouvert, pas une entreprise commerciale ; traité en annexe comme brique d'écosystème.
4. Acteurs du fichier 06 sans fiche dans les fichiers 01 à 05 (Neural Concept, General Intuition, Rivia, Yokoy) : le fichier 06 servait à enrichir le financement, pas à créer des lignes ; ces acteurs sont listés dans acteurs_annexe.md.

## 6. Anomalies et limites

- Volume final de 84 lignes, légèrement au-dessus de la fourchette attendue (55 à 75) : toutes les fiches complètes des 5 fichiers ont été reprises comme demandé (26 + 26 + 9 nouvelles du fichier 03 + 15 nouvelles du fichier 04 + 8 nouvelles du fichier 05), moins l'exclusion Helvetia/Clara et après 14 fusions de doublons.
- 4 acteurs ont un canton "nd" (the aigency, apexAI, Magic Heidi, Inno-Mation) : siège non confirmé dans les sources ; aucune invention.
- Les chiffres promotionnels des éditeurs (taux d'automatisation 95 %, 80 %, nombres de clients déclarés) sont repris avec la mention "déclaratif" ou "annoncé" dans les champs concernés.
- Les effectifs et années de création restent largement indisponibles (limite déjà signalée par les fiches : registres du commerce non consultés).
