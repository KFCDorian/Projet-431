# PROGRESS
Dernière mise à jour : 23 juillet 2026

## Fait
- Phase 0 : cadrage validé (options par défaut), `00_cadrage.md`
- Phase 1 : `01_plan_recherche.md` ; 8 livrables de recherche dans `/recherche/` (01 à 08)
- Phase 2 : `data/acteurs.csv` (84 acteurs, 20 colonnes contractuelles, 14 doublons fusionnés),
  `data/notes_consolidation.md`, `data/acteurs_annexe.md` (~70 acteurs non fichés)
- Phase 3 : `02_tableaux_comparatifs.md`, généré par `scripts/gen_tableaux.py` (totaux = CSV)
- Phase 4 : `03_analyse_marche.md` (TAM 700 M-1 md CHF/an, SAM 40-80 M, SOM 0,15-0,6 M ;
  Porter, chaîne de valeur, tendances 12-24 mois)
- Phase 5 : `04_angle_strategique.md` (7 angles notés ; retenu : studio d'agents IA pour
  fiduciaires suisses, 27/35 ; plan B : construction ; test d'invalidation en 30 jours)
- Phase 6 : `05_synthese_executive.md`, `06_sources.md` (277 sources uniques), `07_limites.md`
- Phase 7 : site statique complet dans `/site/` (index.html + assets + data + README) ;
  14 graphiques SVG sans dépendance externe, TAM/SAM/SOM inclus (demande utilisateur),
  annuaire filtrable avec export CSV, mode sombre/clair, vues tableau d'accessibilité
- Validations : palette testée (validate_palette.js, light et dark), totaux site = CSV,
  HTML équilibré, aucun appel réseau, 277 liens de sources rendus, aucune URL malformée,
  rendu vérifié en capture headless (clair et sombre), chiffre hébergement unifié à 46

## En cours
- Rien : l'étude est livrée

## Bloqué
- Rien

## Pour aller plus loin (non demandé, non fait)
- Test terrain de 30 jours de l'angle fiduciaire (protocole en `04_angle_strategique.md` 4.7)
- Vérifications Zefix des années de création marquées "nd"
- Entretiens listés dans `07_limites.md`

## Régénération après mise à jour du CSV
python3 scripts/gen_tableaux.py && python3 scripts/gen_site_data.py
