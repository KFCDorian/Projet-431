# 00 - Cadrage validé
Date de validation : 23 juillet 2026
Mode de validation : options par défaut acceptées en bloc par le commanditaire ("ok go")

## Objet de l'étude
Étude du retard de maturité digitale des commerces, restaurants et hôtels genevois, à savoir
les établissements sans site internet, sans réservation en ligne, sans chatbot ni agent IA
de réception client. Étude par détection d'absence : l'univers est recensé d'abord, puis
chaque établissement est vérifié individuellement.

Deux nuances méthodologiques sont traitées explicitement dans toute l'étude :
1. "Pas de site" ne signifie pas "pas de présence en ligne". La dépendance totale à
   Google Business Profile, Instagram, TheFork, Booking.com ou Uber Eats est qualifiée
   comme telle (niveaux 1 à 3 de la grille de maturité), et constitue probablement le
   cœur du gisement.
2. Un établissement sans site n'est pas automatiquement un prospect. Les cas de non-besoin
   (clientèle captive, établissement complet en permanence, commerce de flux) sont
   identifiés et exclus du gisement prioritaire.

## Décisions de cadrage

### A - Dépôt
- L'étude précédente (studio d'agents IA pour fiduciaires suisses) est archivée intacte
  dans `archive_fiduciaires/`. La nouvelle étude occupe la racine du dépôt.

### B - Finalité
- Finalité première : étude de marché préalable à un lancement d'activité (business plan léger).
- La base d'établissements qualifiée sert aussi la prospection commerciale, dans le cadre
  de conformité défini en section G.
- Lien avec l'étude fiduciaires : oui, second angle du même projet. Les données déjà
  constituées sur l'offre concurrente et les grilles tarifaires seront réutilisées quand
  elles restent valides, avec date de péremption signalée.

### C - Périmètre géographique
- Ville de Genève + Carouge : zones denses, vérifiables, représentatives.
- Extrapolation au canton entier via les données OCSTAT/STATENT, avec méthode explicite
  et intervalle d'incertitude (voir E).

### D - Segments
Retenus :
- Restauration : restaurants, bars, cafés.
- Hôtellerie : tous hébergements, du 5 étoiles à la pension familiale, chambres d'hôtes
  et résidences comprises.
- Commerce de détail indépendant : y compris boulangeries et métiers de bouche, coiffeurs,
  instituts, opticiens.

Exclus :
- Food trucks (univers instable, invérifiable).
- Garages.
- Chaînes et franchises (décision digitale au siège, hors de portée d'une offre locale).

### E - Définition du manque et profondeur
- Les quatre manques (site, site fonctionnel, réservation en ligne, chatbot) sont qualifiés
  séparément via la grille de maturité en 7 niveaux (0 à 6) définie en `01_plan_recherche.md`.
- Taille cible de la base : environ 300 établissements vérifiés un par un.
- Approche : exhaustivité sur les zones retenues (par quartier), puis extrapolation
  statistique au canton. Une fiche non vérifiée est marquée confiance faible, jamais déduite.

### F - Données collectées et volets optionnels
- Schéma contractuel de `/data/etablissements.csv` : voir Phase 3 du brief (colonnes figées).
- Nom du gérant : uniquement s'il est public (Zefix, site de l'établissement, presse).
  Aucun recoupement au-delà.
- Volet qualitatif : guide d'entretien et questionnaire gérants rédigés, passation à la
  charge du commanditaire.
- Angle économique : chiffrage du manque à gagner par segment et grille tarifaire d'offre.

### G - Conformité et éthique (cadre confirmé)
- Données professionnelles publiques uniquement.
- Consultation manuelle des sources : pas de scraping de Google Maps ni des plateformes
  dont les CGU l'interdisent ; API officielles seulement le cas échéant.
- Pas de collecte d'emails personnels ni de données de personnes au-delà du contact
  professionnel public.
- `05_conformite.md` (nLPD, art. 3 al. 1 let. o LCD, CGU des sources) est produit avant
  toute exploitation commerciale du fichier.
- Règle d'arrêt : toute méthode qui contournerait ce cadre est signalée au commanditaire
  avec une alternative conforme, jamais exécutée d'initiative.

### H - Livrables, deadline, git
- Arborescence : fichiers numérotés 00 à 08 à la racine, `/recherche/`, `/data/`, `/site/`.
  Attention, la numérotation du brief place la conformité en `05_conformite.md` et décale
  la synthèse en `06_synthese_executive.md`, sources en `07_sources.md`, limites en
  `08_limites.md`.
- Deadline : aucune contrainte, fiabilité privilégiée sur la vitesse.
- Git : commit descriptif + push après chaque phase importante ; mise à jour de `gh-pages`
  quand `/site/` évolue.
- Point d'étape court après chaque phase, ajustements possibles avant de poursuivre.

## Règles de travail rappelées
- Aucun chiffre inventé ; donnée manquante = "non disponible publiquement" + conséquence.
- Distinction systématique : fait vérifié / estimation raisonnée / hypothèse.
- Aucun classement sans vérification effective ; l'absence de résultat n'est pas une preuve
  d'absence.
- Chaque information est datée, avec fenêtre de validité.
- Les contradictions entre sources sont signalées, pas tranchées silencieusement.
- `PROGRESS.md` tenu à jour : fait, en cours, bloqué.
