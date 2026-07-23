# 07 - Limites méthodologiques
Date : 23 juillet 2026.

## 1. Limites de la collecte
- Sources exclusivement publiques et en ligne : sites des entreprises, presse, registres, études. Aucun entretien mené : les intentions d'achat, les prix réels pratiqués et la satisfaction client sont donc déduits, pas observés.
- Accès automatisé limité : Zefix et LinkedIn n'ont pas pu être exploités systématiquement ; certains sites ont bloqué la collecte (pwc.ch, artificialy.com, iaswiss.com, fedlex.admin.ch en accès direct) ; plusieurs articles de presse étaient sous paywall (Le Temps, NZZ). Les informations concernées reposent sur des sources secondaires, signalées dans les fiches.
- Effet de visibilité : la méthode par recherche web sur-représente les acteurs qui communiquent (SEO, communiqués) et sous-représente les acteurs discrets mais actifs, notamment alémaniques de petite taille et tessinois.
- Recensement non exhaustif : 84 acteurs documentés, environ 70 repérés non fichés (`data/acteurs_annexe.md`) ; le vrai total du marché est supérieur, surtout dans la longue traîne des agences.

## 2. Limites des données
- Données déclaratives : degré d'agenticité, stack, clients références et hébergement proviennent des sites des acteurs eux-mêmes. La grille stricte appliquée (doute = niveau inférieur) réduit mais n'élimine pas le biais marketing.
- Champs lacunaires : année de création inconnue pour 45 acteurs sur 84, effectifs publiés pour une minorité, prix publics pour 22 acteurs seulement, hébergement sans localisation précisée pour 46 (dont 38 sans aucune mention). Les analyses fondées sur ces champs (chronologie, comparatif prix) sont donc partielles, ce qui est signalé en place.
- 4 acteurs sans canton confirmé, 3 fiches en confiance faible conservées et marquées plutôt que supprimées.
- Contradictions entre sources documentées dans `data/notes_consolidation.md` (financement DeepJudge, sièges Unit8 et AlpineAI, effectif Unique) ; les taux d'adoption IA varient du simple au sextuple selon la définition et l'année (KOF ~10 % contre UBS ~60 %), les deux valeurs sont conservées.

## 3. Limites de l'analyse
- TAM/SAM/SOM : calcul bottom-up sans étude de marché de référence ; les taux de pénétration et paniers moyens sont des hypothèses assumées, marquées [HYP] ; l'erreur possible est d'un facteur 2 dans chaque sens.
- Grille de notation des angles : notes expertes sur échelle 1-5, pondération uniforme ; une pondération différente (par exemple privilégier la défendabilité) pourrait faire remonter l'angle D (souveraineté pour professions à secret).
- Segmentation des verticales : normalisation par mots-clés depuis des libellés libres ; des rattachements discutables sont possibles à la marge (script auditables : `scripts/normalisation.py`).
- Périmètre temporel : marché en évolution rapide ; péremption estimée à 6-12 mois pour les données concurrentielles, plus courte pour le réglementaire (avant-projet suisse fin 2026, jalons AI Act 2026-2028) et le financement.

## 4. Ce qu'il faudrait vérifier en entretien
1. Auprès de 8 à 10 fiduciaires romandes : tâches réellement chronophages, budget disponible, équipement logiciel, perception des plateformes existantes (protocole détaillé en `04_angle_strategique.md`, 4.7).
2. Auprès de 3 à 5 agences concurrentes : taux de conversion, prix réels signés (vs affichés), taux d'attrition du run mensuel.
3. Auprès des éditeurs métier (Abacus, WinBIZ, Crésus, Dr. Tax) : ouverture des API, programmes partenaires, feuille de route agents.
4. Auprès de DPO ou juristes : validation de l'architecture de conformité nLPD proposée (art. 21, sous-traitance des LLM).
5. Auprès de clients finaux d'acteurs établis (Unique, aiaibot, agences PME) : écart entre promesse et valeur livrée, pour calibrer le discours de preuve.
