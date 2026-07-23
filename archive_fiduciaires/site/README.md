# Site de restitution : étude de marché IA agentique Suisse

## Ouvrir le site
Double-cliquer sur `index.html`. Aucune installation, aucun serveur, aucun build : le site
fonctionne entièrement hors ligne (graphiques SVG générés par `assets/app.js`, aucune
dépendance externe, aucun appel réseau, pas même un CDN).

## Pourquoi les données sont dans `assets/data.js`
Les navigateurs bloquent `fetch()` sur les fichiers locaux en protocole `file://` (politique
CORS). Les fichiers `data/acteurs.json` et `data/analyse.json` sont donc doublés par
`assets/data.js`, qui expose les mêmes données en variables globales (`window.ACTEURS`,
`window.ANALYSE`). Les trois fichiers sont générés par le même script : ils ne divergent
jamais tant qu'on ne les édite pas à la main (ne pas les éditer à la main).

## Régénérer les données après mise à jour du CSV
La source de vérité est `../data/acteurs.csv` (schéma contractuel de 20 colonnes). Après
toute modification :

```bash
cd ..
python3 scripts/gen_tableaux.py      # régénère 02_tableaux_comparatifs.md
python3 scripts/gen_site_data.py     # régénère site/data/*.json et site/assets/data.js
```

Puis recharger `index.html` dans le navigateur. La bibliographie du site est extraite de
`../06_sources.md` : relancer `gen_site_data.py` si ce fichier change. Les règles de
normalisation (segments, verticales, hébergement) sont dans `scripts/normalisation.py`,
partagées entre les tableaux et le site.

## Contenu
- Accueil : chiffres clés, TAM/SAM/SOM, dynamique (créations et levées)
- Cartographie : cantons, B2B/B2C, segments par canton
- Annuaire : 84 acteurs filtrables (canton, segment, cible, verticale, maturité), recherche
  plein texte, tri par colonne, fiche détaillée au clic, export CSV de la vue filtrée
- Comparatifs : maturité, segments par verticale, modèles de revenus, hébergement, prix publics
- Matrice de positionnement : axes configurables, bulles selon l'effectif
- Zones blanches : heatmap verticales x maturité, synthèse
- Angle stratégique : scores des 7 angles, radar comparatif, argumentaire
- Sources et limites

## Accessibilité
Mode sombre et clair (bouton en haut à droite, mémorisé), contrastes conformes, navigation
clavier (tri, fiches et graphiques focusables), tableaux avec `th` et `scope`, et chaque
graphique double d'une "vue tableau" dépliable : aucune valeur n'est accessible uniquement
par la couleur ou le survol.
