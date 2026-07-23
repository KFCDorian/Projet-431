# 00 - Cadrage de l'étude de marché
Date de validation : 23 juillet 2026
Statut : validé par le commanditaire (options par défaut acceptées en bloc)

## Objet
Étude de marché sur les entreprises suisses proposant des services d'IA agentique (agents IA, automatisation agentique, copilotes métier, intégration MCP, orchestration multi-agents) à des particuliers (B2C) et/ou à des entreprises (B2B).

## Cadrage retenu

| Dimension | Décision |
|---|---|
| Objectif de l'étude | Créer une offre / lancer une activité dans l'IA agentique en Suisse |
| Lectorat | Le commanditaire et d'éventuels associés ; ton professionnel et direct, pas de format "pitch investisseur" |
| Périmètre géographique | Toute la Suisse, marquage par canton pour filtrage |
| Langues des sources | FR + DE + EN, IT en appoint pour le Tessin ; livrables en français |
| Définition "IA agentique" | Large avec gradation : tout acteur vendant de l'IA agentique ou s'en approchant (chatbots avancés, RAG, automatisation IA, copilotes, agents autonomes), avec colonne "degré d'agenticité" permettant un filtrage strict a posteriori |
| Exclusions | Recherche académique sans offre commerciale, acteurs sans présence juridique ou opérationnelle en Suisse, offres de hardware, freelances non immatriculés |
| Types d'acteurs | Startups produit, éditeurs SaaS, agences/ESN/intégrateurs, cabinets de conseil (y compris Big Four pour leur offre suisse), filiales suisses de groupes étrangers, freelances structurés (Sàrl, studios) ; statut marqué dans le CSV, filiales signalées comme telles |
| Taille des entreprises | Toutes tailles, du seed aux grands comptes, la taille étant une colonne de filtre |
| Nombre d'acteurs visé | Environ 50 acteurs bien documentés, plus une liste annexe d'acteurs identifiés mais non fichés |
| Verticales | Toutes couvertes dans le mapping ; analyse approfondie sur banque/assurance, pharma/life sciences et services professionnels aux PME |
| Profondeur financière | Prix publics quand disponibles, levées de fonds, effectifs estimés ; mention "non disponible publiquement" attendue fréquemment pour les prix |
| Formats des livrables | Markdown (dossiers), CSV (base acteurs), JSON (site) ; pas de PDF ni XLSX |
| Format du site | Page unique avec ancres et navigation sticky ; données inline dans app.js pour éviter les blocages CORS du protocole file:// |
| Niveau de sourcing | Chiffres clés et faits critiques sourcés ; le reste avec niveau de confiance indiqué (élevé/moyen/faible) |
| Temps de recherche | Session unique, environ 2 à 4 heures de travail agentique, points d'étape après chaque phase |
| Idée préconçue | Aucune ; la Phase 5 part uniquement des zones blanches détectées |

## Limites connues dès le cadrage
- Zefix et LinkedIn limitent l'accès automatisé : les effectifs et données de registre seront des estimations croisées, documentées dans `07_limites.md`.
- Les prix des agences et cabinets suisses sont rarement publics.
- Toute information est datée du jour de consultation ; le marché évolue vite, péremption estimée à 6-12 mois pour les données concurrentielles.

## Règles de travail (rappel contractuel)
- Aucun chiffre inventé ; "non disponible publiquement" avec conséquence explicitée.
- Distinction systématique : fait sourcé / estimation raisonnée / hypothèse.
- Contradictions entre sources signalées, jamais tranchées silencieusement.
- Informations critiques croisées avec au moins deux sources indépendantes.
- Rédaction en français professionnel, sans tiret cadratin.
