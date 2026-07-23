# 01 - Plan de recherche
Date : 23 juillet 2026

## Questions de recherche

### Offre
1. Qui sont les acteurs suisses proposant des services ou produits d'IA agentique, et où sont-ils implantés ?
2. Quel est le degré réel d'agenticité de leurs offres (chatbot, RAG, workflow automatisé, agents autonomes multi-étapes) par rapport à leur discours marketing ?
3. Quels modèles de revenus et niveaux de prix pratiquent-ils ?
4. Quelles verticales sont couvertes, lesquelles sont délaissées ?
5. Quelle est la répartition B2B / B2C / mixte, et le B2C existe-t-il vraiment en Suisse ?

### Demande
6. Quelles douleurs concrètes les entreprises suisses (surtout PME) cherchent-elles à résoudre avec des agents IA ?
7. Quels signaux de demande sont observables : appels d'offres, offres d'emploi, études sectorielles, témoignages ?
8. Quel est le niveau d'adoption réel, au-delà des projets pilotes ?

### Environnement
9. Quelles contraintes réglementaires (nLPD, AI Act européen par effet extraterritorial, FINMA, souveraineté des données) structurent le marché ?
10. Quels flux de financement (levées, programmes Innosuisse, corporate ventures) irriguent l'écosystème ?

### Synthèse
11. Où sont les zones blanches exploitables : croisements segment x verticale x canton x niveau d'agenticité peu ou pas couverts ?
12. Quel angle un nouvel entrant avec peu de capital peut-il défendre ?

## Hypothèses de départ (à confirmer ou infirmer)
- H1 : le marché suisse est dominé par le service (agences, conseil) plutôt que par le produit ; les éditeurs purs sont rares.
- H2 : le B2C agentique suisse est quasi inexistant ; les offres grand public sont des produits internationaux, pas suisses.
- H3 : la souveraineté des données (hébergement suisse, nLPD) est un argument commercial différenciant et une barrière pour les acteurs étrangers.
- H4 : les PME suisses non technologiques sont sous-servies, les grands acteurs visant banques, pharma et grands comptes.
- H5 : le multilinguisme suisse (FR/DE/IT) est une contrainte sous-estimée par les produits internationaux et une opportunité locale.
- H6 : la majorité des offres "agentiques" sont en réalité du RAG ou des chatbots ; les vrais agents multi-étapes en production sont rares.

## Sources à couvrir
- Sites des entreprises (source primaire pour l'offre)
- Zefix (registre du commerce, vérification d'existence juridique)
- Startupticker.ch, Swiss Startup Radar, digitalswitzerland, Swisscom Startup
- Crunchbase / CB Insights (financements)
- LinkedIn (effectifs, recrutements, partenariats)
- Presse suisse : NZZ, Le Temps, Bilan, PME Magazine, ICTjournal, Handelszeitung, Inside IT
- Programmes cantonaux et fédéraux : Innosuisse, Fongit, Innovaud, Genilem, Venturelab
- Écosystème académique : EPFL, ETH Zurich, IDIAP, CSEM, Swiss AI Initiative
- Textes réglementaires : PFPDT (nLPD), FINMA, AI Act (UE)

## Critères d'inclusion
- Entité juridique suisse ou présence opérationnelle suisse documentée (bureau, équipe, clients suisses servis localement)
- Offre commerciale active mentionnant agents IA, automatisation IA, copilotes, orchestration, MCP, ou technologies assimilées
- Tous statuts : startup, éditeur SaaS, agence/ESN, cabinet de conseil, filiale de groupe étranger, studio/Sàrl structurée

## Critères d'exclusion
- Recherche académique sans offre commerciale
- Pur hardware
- Freelances non immatriculés
- Acteurs dont la seule présence suisse est une boîte aux lettres sans activité documentée
- Offres abandonnées ou entreprises radiées

## Dispositif : 8 sous-agents en parallèle
| # | Agent | Périmètre | Livrable |
|---|---|---|---|
| 1 | Cartographie Suisse alémanique | Zurich, Zoug, Bâle, Berne, Saint-Gall | recherche/01_cartographie_alemanique.md |
| 2 | Cartographie Romandie + Tessin | Genève, Lausanne, Vaud, Neuchâtel, Fribourg, Valais, Lugano | recherche/02_cartographie_romandie_tessin.md |
| 3 | Écosystème académique et deeptech | Spin-offs EPFL, ETH, IDIAP, Swiss AI Initiative, CSEM | recherche/03_ecosysteme_academique.md |
| 4 | Conseil et intégrateurs | Big Four, ESN, agences digitales avec offre agentique | recherche/04_conseil_integrateurs.md |
| 5 | Offres B2C et grand public | Assistants personnels, agents pour indépendants, self-serve | recherche/05_offres_b2c.md |
| 6 | Financement et signaux marché | Levées, valorisations, effectifs, recrutements, partenariats | recherche/06_financement_signaux.md |
| 7 | Cadre réglementaire | nLPD, souveraineté, hébergement suisse, AI Act, FINMA | recherche/07_cadre_reglementaire.md |
| 8 | Demande et douleurs clients | Appels d'offres, offres d'emploi, études, adoption PME | recherche/08_demande_douleurs.md |

Chaque agent produit un livrable brut daté, avec URL et date de consultation pour chaque source, et un niveau de confiance par information.

## Schéma contractuel de la base acteurs (Phase 2)
nom, canton, ville, annee_creation, effectif_estime, statut, cible, verticales, description_offre, degre_agenticite, stack_technique, modele_revenus, fourchette_prix, financement, clients_references, langues, hebergement_donnees, url, date_consultation, niveau_confiance
