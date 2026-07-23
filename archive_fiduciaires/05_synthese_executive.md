# 05 - Synthèse exécutive
Date : 23 juillet 2026. Étude complète : `00` à `07` et site interactif dans `/site/`.

## Conclusions et recommandation (à lire en premier)

**Recommandation : lancer un studio d'agents IA dédié aux fiduciaires suisses**, en commençant par la Suisse romande, avec un test de validation de 30 jours pour moins de 2 000 CHF avant tout engagement (protocole en `04_angle_strategique.md`, section 4.7). Cet angle a obtenu 27/35 à la grille de notation, à égalité avec les agents pour la construction (plan B documenté), grâce à un besoin récurrent et solvable, une concurrence uniquement généraliste, un canal de prescription structuré (plus de 4 200 membres FIDUCIAIRE|SUISSE en 12 sections cantonales) et une défendabilité fondée sur les spécificités suisses : secret professionnel, 26 régimes fiscaux, exigence d'hébergement local.

**Le marché est réel mais asymétrique.** 84 acteurs documentés (et environ 70 autres repérés) se répartissent en trois couches : des éditeurs verticaux financés à Zurich (Unique, DeepJudge : Series A de 30 à 42 M USD), des intégrateurs établis qui pivotent (Swisscom, ti&m, ELCA, Big Four), et une longue traîne d'agences PME nées après 2023, quasi toutes sur la même pile n8n + LLM. Zurich concentre 44 % des acteurs ; 12 cantons n'en ont aucun ; le B2C suisse est marginal (6 acteurs, tous freemium, aucun agent autonome).

**Le discours dépasse la réalité livrée.** En appliquant une grille stricte (niveau maximal démontré, pas le marketing), 65 % du marché livre du workflow automatisé et seuls 11 acteurs démontrent des agents autonomes multi-étapes. Le retrait du rapport agentique de KPMG Suisse pour hallucinations (juin 2026) a durci le scepticisme des acheteurs : la preuve mesurable devient l'argument de vente décisif.

**La demande est en avance sur l'offre dans le bas du marché.** L'adoption consciente de l'IA en PME est passée de 22 % à 34 % en un an (AXA/Sotomo), 43 % de la population utilise la GenAI (OFS), et le secteur public s'engage (appel d'offres fédéral de 57 M CHF ouvert aux PME). Mais les douleurs restent entières : ROI insaisissable, données non prêtes, absence de gouvernance dans 67 % des PME utilisatrices, exigence de multilinguisme et de souveraineté mal servie : 46 acteurs sur 84 ne documentent même pas où leurs données sont hébergées.

**Taille de marché (calcul bottom-up, hypothèses explicites en `03_analyse_marche.md`) :** TAM suisse d'environ 700 M à 1 md CHF/an à horizon 2028 ; SAM de 40 à 80 M CHF/an pour un entrant romand ciblant PME et fiduciaires ; SOM réaliste de 150 000 à 600 000 CHF de revenu annuel à 24 mois, cohérent avec les prix publics observés (projets de 6 000 à 25 000 CHF, run de 200 à 1 500 CHF/mois).

**Fenêtre temporelle : 12 à 24 mois.** La consolidation est entamée (5 acquisitions en 18 mois, dont Lakera par Check Point pour environ 300 M USD), Microsoft Copilot et Salesforce Agentforce vont industrialiser les cas simples, et la réglementation se précise (article 50 de l'AI Act applicable dès août 2026, avant-projet de loi suisse attendu d'ici fin 2026). Les positions de niche défendables se prennent maintenant.

## Ce qui étaye ces conclusions
- Base de 84 acteurs consolidée et dédupliquée (`data/acteurs.csv`, 20 champs contractuels, niveaux de confiance : 51 élevés, 30 moyens, 3 faibles).
- 8 recherches thématiques sourcées (`recherche/01` à `08`), 277 sources uniques référencées (`06_sources.md`), datées du 23.07.2026.
- Tableaux comparatifs générés mécaniquement depuis le CSV (`02_tableaux_comparatifs.md`), y compris la heatmap verticales x maturité qui révèle les zones blanches.
- Grille de notation multicritère de 7 angles candidats (`04_angle_strategique.md`).

## Ce qui reste à vérifier avant d'engager des moyens
Les trois points du test de 30 jours : budget réel des fiduciaires, couverture éventuelle du besoin par les plateformes comptables existantes (Accounto, éditeurs métier), accessibilité des API des logiciels dominants. Limites méthodologiques complètes en `07_limites.md` : données déclaratives des sites web, effectifs et prix rarement publics, périmètre "agentique" à géométrie variable selon les sources.
