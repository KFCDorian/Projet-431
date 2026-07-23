# 01 - Plan de recherche et grille de maturité digitale
Date : 23 juillet 2026
Statut : validé pour exécution des Phases 2 et 3
Fenêtre de validité des données à collecter : les vérifications en ligne se périment vite ;
toute fiche datée de plus de 6 mois devra être revérifiée avant usage commercial.

## 1. Questions de recherche

QR1. Quelle part des établissements de restauration, hôtellerie et commerce indépendant
de Genève et Carouge n'a pas de site internet propre, et comment cette part se répartit-elle
sur la grille de maturité 0 à 6 ?

QR2. Parmi les établissements sans site, quelle part est en réalité dépendante d'une ou
plusieurs plateformes tierces (Google Business Profile, Instagram, TheFork, Booking.com,
Uber Eats), et que coûte économiquement cette dépendance (commissions, perte de la relation
client) ?

QR3. Quelles sont les causes réelles et hiérarchisées du non-équipement (coût, temps, âge,
langue, compétence, méfiance, non-besoin), et lesquelles sont adressables par une offre ?

QR4. Quelle est la taille du gisement commercialement adressable (établissements à faible
maturité ET à potentiel), en distinguant les non-équipés par choix rationnel des non-équipés
par frein ?

QR5. Qui sert déjà ce marché à Genève (agences, freelances, solutions verticales), à quels
prix, et où sont les zones blanches de l'offre ?

## 2. Hypothèses de départ (à confirmer ou infirmer, jamais présumées vraies)

H1. 30 à 50 % des établissements indépendants des zones étudiées n'ont pas de site propre
fonctionnel (niveaux 0 à 3). Source d'inspiration : études suisses sur la digitalisation
des TPE, à vérifier en Phase 2 (agent 8).

H2. Le niveau 3 (dépendance plateforme sans site) est plus fréquent en restauration,
le niveau 4 (site vitrine obsolète) plus fréquent en hôtellerie indépendante et en commerce.

H3. Le chatbot / agent IA (niveau 6) est quasi absent hors chaînes et grands hôtels :
moins de 5 % de l'univers.

H4. La note Google n'est pas corrélée négativement à la maturité digitale : de très bons
établissements sont très mal équipés, ce qui constitue précisément le gisement prioritaire.

H5. Une part non négligeable (10 à 25 %) des non-équipés n'a objectivement pas besoin
de site (flux, captif, complet), et doit être exclue du gisement.

Chaque hypothèse sera marquée en Phase 5 : confirmée / infirmée / indécidable avec les
données publiques.

## 3. Critères d'inclusion et d'exclusion

### Inclusion
- Établissement avec local physique ouvert au public, situé en ville de Genève
  (quartiers : Cité - Vieille-Ville, Pâquis, Eaux-Vives, Plainpalais, Servette,
  Champel, Acacias - Bâtie, Saint-Jean - Charmilles) ou à Carouge.
- Segments : restauration (restaurants, bars, cafés, tea-rooms), hébergement (hôtels
  toutes catégories, pensions, chambres d'hôtes, résidences hôtelières), commerce de
  détail indépendant et services de proximité avec vitrine (boulangeries et métiers de
  bouche, coiffeurs, instituts, opticiens, librairies, fleuristes, caves, épiceries
  spécialisées, boutiques).
- Établissement actif au moment de la vérification (indices : fiche Google non marquée
  "définitivement fermé", avis récents, inscription RC active).

### Exclusion
- Chaînes et franchises (3 points de vente ou plus sous même enseigne, ou appartenance
  déclarée à un réseau de franchise). Cas limite : 2 points de vente du même indépendant
  local = inclus, marqué en commentaire.
- Food trucks et commerces sans local fixe.
- Garages et commerce automobile.
- Établissements fermés définitivement : conservés dans le CSV avec mention "fermé" en
  commentaire, exclus des statistiques.
- Restauration collective, traiteurs événementiels sans vitrine, dark kitchens.

### Traitement des cas limites
- Doublons (même établissement, deux orthographes) : signalés, fusionnés, jamais supprimés
  silencieusement.
- Établissement en travaux ou en remise : inclus si réouverture annoncée, commentaire.
- Franchise "souple" (enseigne partagée mais exploitation locale, ex. certaines boulangeries) :
  inclus si la présence digitale est manifestement gérée localement, commentaire obligatoire.

## 4. Grille de maturité digitale (structure de toute l'étude)

| Niveau | Intitulé | Critères objectifs et vérifiables |
|---|---|---|
| 0 | Aucune trace en ligne | Aucune fiche Google Business Profile, aucun réseau social, aucun site, aucune inscription annuaire (local.ch). L'existence physique est attestée autrement (RC, presse, observation). |
| 1 | Fiche Google seule, à l'abandon | Fiche GBP existante mais : non revendiquée ("Revendiquer cet établissement" visible), OU horaires absents/faux signalés, OU aucune photo du propriétaire, OU aucune réponse aux avis depuis plus de 12 mois. Pas de site, pas de réseau social actif. |
| 2 | Réseaux sociaux sans site | Compte Instagram ou Facebook actif (publication de moins de 6 mois) utilisé comme vitrine principale. Pas de site propre. La fiche GBP peut être revendiquée. |
| 3 | Dépendance plateforme sans site propre | La réservation ou la commande passe exclusivement par un tiers : TheFork, Booking.com, Expedia, Uber Eats, Smood, Treatwell, etc. Le lien "site web" de la fiche GBP pointe vers la plateforme ou est absent. Aucun domaine propre. |
| 4 | Site vitrine défaillant ou statique | Domaine propre existant MAIS au moins un défaut majeur : inaccessible ou erreur SSL, non responsive (test mobile), dernière mise à jour visible de plus de 24 mois (menus, horaires, actualités datés), OU aucun module de réservation/commande (ni propre ni tiers intégré). |
| 5 | Site avec réservation en ligne fonctionnelle | Domaine propre, responsive, contenu à jour, réservation ou commande en ligne fonctionnelle (module propre ou widget intégré : Zenchef, SevenRooms, Mews, bookingkit, e-shop). Testée jusqu'à l'écran de confirmation sans valider. |
| 6 | Réservation + automatisation ou agent conversationnel | Niveau 5 + au moins un dispositif d'automatisation de la relation client : chatbot ou agent IA sur le site, réponse automatisée WhatsApp Business/Messenger, FAQ dynamique, relance automatique visible. |

### Règles de classement
- Le niveau attribué est le plus HAUT niveau dont TOUS les critères sont remplis.
- Un site propre inaccessible le jour du test = niveau 4, retest sous 7 jours avant
  fiche définitive ; si toujours inaccessible, niveau 4 confirmé, commentaire daté.
- Un établissement niveau 5 ou 6 sur la réservation mais avec fiche GBP à l'abandon reste
  au niveau de son site : la fiche GBP est tracée séparément dans `presence_google`.
- Cas indécidable après la procédure complète : niveau estimé + `niveau_confiance = faible`
  + commentaire, jamais de case vide silencieuse.

## 5. Procédure de vérification (ordre imposé, par établissement)

1. Recherche Google : "nom + Genève" puis "nom + quartier". Relever la fiche GBP
   (revendiquée ?, note, nb avis, lien site, horaires).
2. Si aucun site trouvé, tester les variantes avant de conclure : nom sans accents,
   nom + .ch, nom du gérant s'il est public (Zefix), recherche du nom dans Instagram
   et Facebook, lien en bio des réseaux.
3. Si un site existe : tester accessibilité (https), responsive (viewport mobile),
   chercher la date la plus récente visible (menu daté, actualité, copyright, mentions),
   chercher un module de réservation/commande et le dérouler jusqu'à confirmation
   sans valider.
4. Chercher la présence plateforme : TheFork, Booking.com, Uber Eats/Smood (restauration),
   Treatwell (coiffure/instituts), et noter lesquelles.
5. Chercher chatbot/agent : bulle de chat sur le site, WhatsApp Business avec message
   automatique, Messenger avec réponse instantanée.
6. Renseigner la fiche CSV, attribuer le niveau, dater, attribuer la confiance :
   - élevé : site et fiche GBP consultés directement, réservation testée ;
   - moyen : consultation directe partielle (ex. plateforme non vérifiée) ;
   - faible : classement par faisceau d'indices sans consultation directe complète.
7. Toute recherche infructueuse est notée comme "non trouvé le [date] après procédure
   complète", jamais comme "n'existe pas".

## 6. Sources autorisées et méthode de collecte
- Recensement de l'univers : local.ch, annuaires professionnels, Genève Tourisme,
  listes d'associations (GastroGenève, associations de commerçants), presse locale,
  registre du commerce (Zefix), observation des rues commerçantes via sources publiques.
- Consultation manuelle uniquement. Pas de scraping de Google Maps ni des plateformes
  (CGU). Les volumes agrégés viennent d'OCSTAT/STATENT, pas de comptages automatisés.
- Chaque fiche porte `url_source` et `date_verification`.

## 7. Plan d'échantillonnage
- Cible : ~300 établissements, répartis approximativement ainsi (ajustable selon densité
  réelle constatée) : restauration ~150, hébergement ~45 (quasi-exhaustivité de l'univers
  hôtelier indépendant Genève + Carouge), commerce indépendant ~105.
- Par zone : couverture de tous les quartiers listés en 3.1, avec exhaustivité visée sur
  au moins 2 quartiers contrastés (ex. Pâquis et Carouge) pour ancrer l'extrapolation.
- L'extrapolation au canton utilisera les effectifs STATENT par code NOGA (56 restauration,
  55 hébergement, 47 commerce de détail) avec intervalle d'incertitude explicite.

## 8. Livrables des phases suivantes
Conformes au brief : `/recherche/01..08_*.md` (Phase 2), `/data/etablissements.csv` +
`/data/qualite_donnees.md` (Phase 3), puis fichiers 02 à 08 numérotés et `/site/`.
