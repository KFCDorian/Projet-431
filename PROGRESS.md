# PROGRESS - Étude maturité digitale Genève
Dernière mise à jour : 23 juillet 2026

## Fait
- Archivage de l'étude précédente (fiduciaires) dans `archive_fiduciaires/`, intacte
- Phase 0 : cadrage validé par défauts, `00_cadrage.md`
- Phase 1 : `01_plan_recherche.md` (5 questions de recherche, 5 hypothèses falsifiables,
  grille de maturité 0 à 6 avec critères vérifiables, procédure de vérification en 7 étapes,
  plan d'échantillonnage ~300 fiches)

## En cours
- Phase 2 : recherche documentaire (`/recherche/` : 01, 02, 04, 06, 07, 08 livrés)
- Phase 3 - A (setup) : fait le 23.07.2026. Token Apify validé (plan FREE, jamais exposé),
  dépendances Python installées, arborescence `/scraping/`, `/scraping/raw/`,
  `/scraping/logs/`, `/data/` créée, acteurs vérifiés via API, tarifs relevés le jour même
- Phase 3 - B (plan de requêtes) : `scraping/plan_requetes.md` rédigé, en attente de
  validation (méthode, périmètre, termes, budget, schéma CSV)

## Bloqué
- Phase 3 - C (run pilote) : BLOQUÉ en attente d'une décision du commanditaire, le cadrage
  validé (`00_cadrage.md` G) interdit le scraping de Google Maps alors que la mission
  Phase 3 le demande. Trois options chiffrées dans `scraping/plan_requetes.md`, section 0.
  Aucun run payant lancé.

## Coût cumulé
- Apify : 0,00 USD (aucun run lancé)
