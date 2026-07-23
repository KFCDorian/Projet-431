# Plan de requêtes - Phase 3, collecte de l'univers d'établissements
Date : 23 juillet 2026
Statut : EN ATTENTE DE VALIDATION, aucun run payant lancé

## 0. Point bloquant préalable : contradiction avec le cadrage validé

Le cadrage validé interdit explicitement la méthode demandée :
- `00_cadrage.md`, section G : "pas de scraping de Google Maps ni des plateformes dont
  les CGU l'interdisent ; API officielles seulement le cas échéant"
- `01_plan_recherche.md`, section 6 : "Consultation manuelle uniquement. Pas de scraping
  de Google Maps ni des plateformes (CGU)."

La mission Phase 3 demande un scraping de Google Maps via Apify. Conformément à la règle
d'arrêt du cadrage, aucun run ne sera lancé avant une décision explicite du commanditaire
parmi les trois options ci-dessous. Si l'option 1 ou 2 est retenue, `00_cadrage.md` devra
être amendé pour tracer la décision.

### Option 1 - Apify (scraping Google Maps)
- Contrevient aux CGU de Google, même via un prestataire commercial. Risque : juridique
  faible en pratique pour un volume unique de cette taille, mais réel et à assumer par
  écrit ; risque opérationnel de blocage du run, supporté par Apify.
- Coût estimé : 20 à 40 USD (option A ci-dessous) ou 50 à 100 USD (option B).
- Données : complètes (site, téléphone, note, avis, horaires, liens de réservation),
  conservation libre.

### Option 2 - Google Places API officielle (New)
- Conforme aux CGU et au cadrage. Tarifs vérifiés le 23.07.2026 sur
  developers.google.com/maps/billing-and-pricing/pricing :
  - Text Search Enterprise (inclut website, téléphone, horaires, note) : 35 USD / 1 000
    requêtes, 1 000 requêtes gratuites par mois.
  - Une requête Text Search retourne 20 résultats, 3 pages maximum, soit 60 résultats
    par recherche : le maillage fin terme x zone est de toute façon nécessaire.
  - Volume estimé : 800 à 1 600 requêtes, soit 0 à environ 25 USD grâce au quota gratuit.
- Contrainte majeure : les CGU Google limitent la conservation des données à 30 jours,
  sauf le placeId (stockable indéfiniment). Pour une étude s'étalant sur plusieurs mois,
  il faudrait re-requêter, ou assumer un dépassement contractuel là aussi.
- Nécessite un compte Google Cloud avec facturation activée.

### Option 3 - Statu quo du cadrage (consultation manuelle)
- Recensement manuel via local.ch, Genève Tourisme, associations, déjà entamé en Phase 2
  (`/recherche/01`, `02`, `04` : environ 84+ établissements recensés).
- Zéro risque, zéro coût direct, mais couverture partielle et coût en temps élevé pour
  approcher l'exhaustivité par quartier.

Recommandation : option 2 si la conformité prime (elle s'aligne sur le cadrage et coûte
moins cher), option 1 si la complétude des champs et la conservation libre priment, en
amendant le cadrage. La suite de ce document est rédigée pour l'option 1 (demande de la
mission) ; la matrice de requêtes reste valable telle quelle pour l'option 2.

## 1. Choix de l'acteur Apify (vérifié via l'API le 23.07.2026)

| Critère | compass/crawler-google-places | compass/google-maps-extractor |
|---|---|---|
| Existence vérifiée | oui, id nwua9Gu5YrADL7ZDj | oui, id 2Mdma1N6Fd0y3QEjR |
| Prix par place (plan FREE, notre cas) | 0,004 USD | 0,005 USD |
| Taux de succès | 90,3 % | 97,1 % |
| Note utilisateurs | 4,72 (1 658 avis) | 4,85 (219 avis) |
| customGeolocation (polygones) | oui | oui |
| Détails fiche (liens réservation, étoiles hôtel) | oui, add-on +0,002 USD/place | limité |

Recommandation : `compass/crawler-google-places`. Contre-intuitivement, l'acteur complet
est MOINS cher que l'extracteur léger sur le plan FREE (0,004 contre 0,005 USD par place),
et lui seul fournit `tableReservationLinks` et les champs hôteliers, signaux directs du
niveau 3 de la grille de maturité. Les avis ne seront pas collectés (`maxReviews: 0`),
donc le surcoût "avis" de l'acteur complet ne s'applique pas.

Tarification vérifiée le 23.07.2026 (modèle pay-per-event, palier FREE) :
- place scrapée : 0,004 USD
- add-on détail de fiche (`scrapePlaceDetailPage`) : +0,002 USD par place
- add-on filtre appliqué (ex. `skipClosedPlaces`) : +0,001 USD par place et par filtre
- démarrage d'acteur : 0,00005 USD par run
Le plan Apify FREE inclut 5 USD de crédit mensuel : suffisant pour le pilote, insuffisant
pour le run complet (recharger des crédits ou passer au plan Starter, palier BRONZE à
0,003 USD/place).

## 2. Paramètres de run retenus (écarts au brief justifiés)

```json
{
  "searchStringsArray": ["<un groupe de termes par lot>"],
  "customGeolocation": { "<polygone de la zone, voir section 4>" },
  "language": "fr",
  "countryCode": "ch",
  "maxCrawledPlacesPerSearch": null,
  "skipClosedPlaces": false,
  "scrapePlaceDetailPage": true,
  "maxReviews": 0,
  "scrapeReviewsPersonalData": false,
  "maxImages": 0,
  "maxQuestions": 0,
  "scrapeContacts": false,
  "maximumLeadsEnrichmentRecords": 0
}
```

Écarts par rapport aux paramètres suggérés dans le brief :
- `skipClosedPlaces: false` au lieu de `true` : le filtre est payant (+0,001 USD/place)
  et la Phase E exige de conserver les fiches `permanentlyClosed` dans un fichier séparé,
  pas de les perdre. Le tri se fera localement, gratuitement, sans perte d'information.
- `scrapePlaceDetailPage: true` : +50 % de coût, mais fournit `tableReservationLinks`
  (signal direct du niveau 3), les horaires complets et les champs hôteliers. Sans lui,
  la détection de la dépendance plateforme reposerait uniquement sur l'audit Phase F.
- pas de `categoryFilterWords` : filtre payant et source de faux négatifs reconnue par
  la documentation de l'acteur (beaucoup d'établissements sont mal catégorisés).
- `scrapeContacts` et enrichissements leads/emails : désactivés, conformément à la
  Phase I (aucune extraction d'emails, aucune donnée de personne physique).
- `maxReviews: 0` et `scrapeReviewsPersonalData: false` : aucune donnée d'auteur d'avis
  (nLPD). La note moyenne et le nombre d'avis sont fournis sans scraper les avis.

## 3. Termes de recherche (à valider)

Alignés sur le cadrage (section D et critères 3.1), écarts signalés :

Restauration (9 termes) :
restaurant, café, bar, brasserie, pizzeria, sushi, kebab, salon de thé, pub
- "food truck" retiré : segment explicitement EXCLU par le cadrage (univers instable).
- "boulangerie" déplacée dans le segment commerce (métiers de bouche, cadrage D).

Hébergement (5 termes) :
hôtel, auberge, chambre d'hôtes, résidence hôtelière, hostel

Commerce de détail indépendant (13 termes, dérivés du cadrage 3.1) :
boulangerie, pâtisserie, boucherie, fromagerie, chocolatier, épicerie fine, cave à vin,
coiffeur, institut de beauté, opticien, librairie, fleuriste, boutique de vêtements

Total : 27 termes. Les chaînes et franchises remonteront dans les résultats et seront
écartées en Phase E (fichier séparé), le filtrage à la source étant impossible.

## 4. Zones et maillage géographique

### Écart de périmètre à trancher
Le brief liste 19 zones dont 8 communes suburbaines (Lancy, Vernier, Meyrin,
Grand-Saconnex, Versoix, Chêne-Bourg, Thônex, Onex). Le cadrage validé (section C)
limite l'étude à Ville de Genève + Carouge, avec extrapolation cantonale via
OCSTAT/STATENT. Recommandation : s'en tenir au cadrage (coût réduit d'environ moitié,
cohérence avec le plan d'échantillonnage) ; les communes suburbaines restent possibles
en extension ultérieure. À valider.

### Maillage retenu (option A, recommandée) : polygones communaux + rattachement a posteriori
1. Deux polygones `customGeolocation` : Ville de Genève (limites communales) et Carouge.
   Sources des géométries : SITG / opendata Ville de Genève (limites officielles).
2. L'acteur découpe lui-même les grandes zones en sous-zones internes ; le plafonnement
   Google par recherche est ainsi contourné sans multiplier les runs.
3. Le rattachement au quartier (Cité - Vieille-Ville, Pâquis, Eaux-Vives, Plainpalais,
   Servette, Champel, Acacias - Bâtie, Saint-Jean - Charmilles, Jonction, Grottes,
   Carouge) se fait en Phase E par point-dans-polygone sur les coordonnées retournées,
   avec les polygones officiels de quartiers du SITG. Précision supérieure au découpage
   par requête, et chaque place n'est facturée qu'une fois par terme.

Avantage décisif sur la matrice fine : une place n'apparaît qu'une fois par terme de
recherche au lieu d'une fois par couple terme x quartier, ce qui divise le coût par 2 à 3.

### Option B (matrice fine du brief) : 27 termes x 10 zones = 270 runs
Conservée en secours si le pilote montre que l'acteur plafonne malgré le découpage
interne. Cercles de 600 à 900 m de rayon centrés sur chaque quartier, recouvrement
assumé, déduplication sur placeId en Phase E. Coût 2 à 3 fois supérieur (recouvrements
facturés).

### Lots d'exécution (option A)
| Lot | Termes | Zone | Fichier brut |
|---|---|---|---|
| R1 | restaurant, café, bar | Ville de Genève | restauration1_geneve_{date}.json |
| R2 | brasserie, pizzeria, sushi, kebab, salon de thé, pub | Ville de Genève | restauration2_geneve_{date}.json |
| H1 | hôtel, auberge, chambre d'hôtes, résidence hôtelière, hostel | Ville de Genève | hebergement_geneve_{date}.json |
| C1 | boulangerie, pâtisserie, boucherie, fromagerie, chocolatier, épicerie fine, cave à vin | Ville de Genève | bouche_geneve_{date}.json |
| C2 | coiffeur, institut de beauté, opticien, librairie, fleuriste, boutique de vêtements | Ville de Genève | commerce_geneve_{date}.json |
| R1c à C2c | mêmes groupes | Carouge | {groupe}_carouge_{date}.json |
Soit 10 runs au total, journalisés dans `/scraping/logs/runs.csv`.

## 5. Estimation de coût AVANT exécution (à faire valider)

Hypothèses de volume (ordres de grandeur, à recaler après le pilote) :
- Ville de Genève : environ 1 300 à 1 800 établissements de restauration, 130 à 160
  hébergements, 800 à 1 200 commerces ciblés ; Carouge : 10 à 15 % en plus.
- Facturation par place ET par terme : un même restaurant remontant sur "restaurant"
  et "brasserie" est facturé deux fois. Recouvrement inter-termes estimé à 30 à 50 %.

| Scénario | Places facturées | Base 0,004 | Détails +0,002 | Total estimé |
|---|---|---|---|---|
| Option A, basse | ~3 500 | 14,00 USD | 7,00 USD | ~21 USD |
| Option A, haute | ~6 000 | 24,00 USD | 12,00 USD | ~36 USD |
| Option B (matrice fine) | ~9 000 à 16 000 | 36 à 64 USD | 18 à 32 USD | ~54 à 96 USD |

Pilote (Phase C) : 1 terme ("restaurant"), 1 quartier (Pâquis, cercle d'environ 700 m),
plafond 50 places : 50 x 0,006 = 0,30 USD. Couvert par le crédit gratuit.

Budget à fixer par le commanditaire avant le run complet ; le script s'arrêtera
automatiquement si le coût cumulé journalisé dépasse ce plafond.

## 6. Schéma contractuel de sortie : à confirmer

Le brief renvoie au "schéma contractuel de /data/etablissements.csv défini dans le
cadrage", mais aucune liste de colonnes figée n'existe dans le dépôt. Proposition à
valider (ou correction à fournir si le brief original la contient) :

nom, segment, categorie, adresse, npa, commune, quartier, lat, lng, telephone,
website_declare, site_statut, site_responsive, derniere_maj_visible,
reservation_en_ligne, chatbot_present, plateformes_utilisees, note_google, nb_avis,
etoiles_hotel, statut_ouverture, chaine_franchise, niveau_maturite, niveau_confiance,
commentaire, placeId, url_google, date_extraction, date_verification

## 7. Points soumis à validation avant tout run payant

1. Choix de la méthode : option 1 (Apify, amender le cadrage), option 2 (Places API,
   conforme), option 3 (manuel). Rien ne sera lancé avant cette décision.
2. Périmètre : Ville de Genève + Carouge seuls (cadrage), ou extension aux 8 communes
   suburbaines du brief.
3. Liste des 27 termes de recherche, dont retrait de "food truck" et rattachement de
   "boulangerie" au commerce.
4. Maillage option A (polygones communaux + rattachement SITG) plutôt que matrice fine.
5. Budget plafond pour le run complet (estimation : 21 à 36 USD en option A, palier FREE).
6. Schéma de colonnes de `/data/etablissements.csv` (section 6).
7. Accord pour le run pilote à ~0,30 USD (Phase C) une fois les points 1 à 6 tranchés.
