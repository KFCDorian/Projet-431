# 03 - Analyse du marché suisse de l'IA agentique
Date : 23 juillet 2026. Sources : base consolidée `data/acteurs.csv` (84 acteurs), livrables `recherche/01` à `08`, sources externes citées en place. Statut de chaque chiffre indiqué : [FAIT] fait sourcé, [EST] estimation raisonnée, [HYP] hypothèse assumée.

## 1. Taille et dynamique du marché (TAM / SAM / SOM)

### 1.1 Avertissement méthodologique
Aucune étude publique ne chiffre le marché suisse de l'IA agentique en tant que tel : les recherches menées (fichier `recherche/06`) n'ont trouvé que des chiffres mondiaux (dépenses IA 2026 estimées à 2,5 billions USD, Gartner via ICTjournal, 22.01.2026) et des chiffres de financement suisse. La taille de marché ci-dessous est donc un calcul bottom-up dont chaque hypothèse est explicite. Conséquence : les ordres de grandeur sont défendables, les valeurs précises ne le sont pas.

### 1.2 Données d'ancrage sourcées
- [FAIT] La Suisse compte environ 590 000 à 610 000 entreprises, dont 99,7 % de PME (moins de 250 emplois) qui portent environ deux tiers des emplois. Source : OFS/STATENT via kmu.admin.ch et bfs.admin.ch, consulté le 23.07.2026.
- [FAIT] Environ 60 % des entreprises suisses déclarent utiliser l'IA (UBS, mai 2026, n≈2 500) mais 34 % seulement des PME l'intègrent consciemment (AXA/Sotomo 2025, n=300) et l'usage agentique en production reste minoritaire (~11 % des cas d'usage selon Camunda 2026, échantillon non suisse). Sources et contradictions : `recherche/08`.
- [FAIT] Le financement VC suisse 2025 : CHF 2,95 mds (Swiss Venture Capital Report 2026) à CHF 3,3 mds (EY), dont environ CHF 1 md pour l'IA selon EY, en triplement annuel. Source : `recherche/06`.
- [FAIT] Prix observés sur le marché (22 acteurs à prix publics, `02_tableaux_comparatifs.md`) : premier projet agentique PME entre 1 500 et 30 000 CHF, exploitation 200 à 1 500 CHF/mois, pilotes grands comptes dès 20 000 CHF, référence secteur public : chatbot cantonal fribourgeois à 62 000 CHF.

### 1.3 TAM, marché adressable total (Suisse, services et produits agentiques, horizon 2028)
Méthode bottom-up par étage de clientèle, en dépense annuelle potentielle :

| Étage | Volume [FAIT] | Hypothèse de pénétration à 3 ans [HYP] | Panier annuel moyen [EST] | Sous-total |
|---|---|---|---|---|
| Grandes entreprises (250+ emplois), env. 1 700 | OFS | 60 % engagées | 300 000 CHF (projets + licences + run) | ~306 M CHF |
| PME moyennes (50-249), env. 10 000 | OFS | 25 % | 60 000 CHF | ~150 M CHF |
| Petites entreprises (10-49), env. 50 000 | OFS | 15 % | 15 000 CHF | ~113 M CHF |
| Micro-entreprises (1-9), env. 530 000 | OFS | 5 % | 2 400 CHF (SaaS) | ~64 M CHF |
| Secteur public (Confédération, 26 cantons, communes, régies) | - | - | ancré sur l'AO fédéral 57 M CHF/5 ans et projets cantonaux | ~60-100 M CHF |

TAM estimé : environ 700 M à 1 md CHF par an à horizon 2028. [EST] : la borne basse suppose que les paniers observés aujourd'hui ne croissent pas ; la borne haute intègre l'extension des licences grands comptes. À titre de cohérence externe, ce TAM représente 3 à 4 % des dépenses IT suisses usuellement estimées à ~25-30 mds CHF/an, ce qui est plausible pour une technologie émergente.

### 1.4 SAM et SOM (pour un nouvel entrant de type studio/agence spécialisé)
- SAM [EST] : segment PME et petites structures de Suisse romande plus secteur fiduciaire national, soit la cible atteignable par un acteur romand sans force de vente grands comptes : environ 40 à 80 M CHF/an (croisement des étages 2 à 4 restreints à la Romandie, ~25 % du tissu économique, plus la verticale fiduciaire nationale).
- SOM [HYP] : part réaliste captable en 24 mois par un entrant solo ou petite équipe : 0,3 à 1 % du SAM, soit 150 000 à 600 000 CHF de revenu annuel. Cohérent avec les prix publics observés : 10 à 25 clients à 6 000-25 000 CHF de projet plus run mensuel.

### 1.5 Dynamique
- [FAIT] Accélération du financement (triplement du VC IA suisse en 2025), implantations d'OpenAI et Anthropic à Zurich, 400 M USD d'infrastructure Microsoft, 1 md USD annoncé par Salesforce (juillet 2026). Sources : `recherche/06`, `recherche/04`.
- [FAIT] Consolidation déjà entamée : Effixis racheté par Artefact, Paixon absorbée par Taskbase, Lakera par Check Point, Invariant Labs par Snyk, Yokoy par TravelPerk. Le segment chatbot se referme, la valeur migre vers l'agentique et sa sécurité.
- [EST] Le marché est en phase "early majority" côté grandes entreprises, "early adopters" côté PME : la fenêtre pour se positionner avant la standardisation des offres est de 12 à 24 mois.

## 2. Segmentation

### 2.1 Offre (84 acteurs, chiffres exacts du CSV)
- Par segment : 33 produit (startups + éditeurs + 3 filiales produit), 40 service et intégration, 11 conseil.
- Par maturité : 55 acteurs en workflow automatisé (65 %), 11 en agents autonomes multi-étapes, 7 en infrastructure, 7 en RAG, 4 en chatbot.
- Par géographie : Zurich 37 (44 %), Vaud 15, le reste dispersé ; 12 cantons sans aucun acteur.
- Structure en trois couches : (1) éditeurs verticaux financés à Zurich (Unique en finance, DeepJudge en juridique, Typewise en service client) ; (2) intégrateurs établis qui pivotent (ti&m, ELCA, Swisscom, Big Four) ; (3) longue traîne d'agences PME nées après 2023, quasi toutes sur n8n + LLM avec l'argument souveraineté.

### 2.2 Demande (source : `recherche/08`)
- Grandes entreprises : acheteurs outillés, exigences de gouvernance (FINMA pour la finance), cycles de 6 à 18 mois, préférence pour les marques établies ; douleur dominante : passage du pilote à l'échelle et ROI démontrable (58 % de ROI basique ou inexistant).
- PME : adoption en forte hausse (22 % en 2024, 34 % en 2025) mais superficielle : traductions (52 %) et correspondance (47 %) d'abord ; douleurs : manque de compétences, absence de règles de protection des données (67 % des PME utilisatrices), peur du coût et du fournisseur qui disparaît.
- Indépendants et particuliers : 43 % de la population utilise la GenAI (OFS 2025) mais via des produits internationaux gratuits ; disposition à payer non démontrée, offre suisse quasi absente.

## 3. Chaîne de valeur et rôle des acteurs

Infrastructure de calcul et modèles (Swisscom/Nvidia, Apertus, clouds souverains Infomaniak et Exoscale ; les LLM de frontière restent américains)
→ Outillage et sécurité des agents (Lakera, Invariant Labs, LatticeFlow, Calvin Risk : couche où la Suisse est mondialement forte)
→ Plateformes et produits agentiques (Unique, DeepJudge, Squirro, Typewise, Enterprise Bot, BSI)
→ Intégration et conseil (Big Four, ESN, boutiques : captent aujourd'hui l'essentiel de la valeur facturée)
→ Agences PME et studios (longue traîne, faible différenciation, forte proximité client)
→ Client final.

Observations : la valeur se concentre aux deux extrémités, à savoir la couche sécurité/gouvernance (exits à 9 chiffres) et la relation client de confiance (agences locales, cycles courts). Le milieu de chaîne (plateformes génériques) est exposé à la concurrence internationale directe (Microsoft Copilot, Salesforce Agentforce, OpenAI).

## 4. Cinq forces de Porter appliquées au contexte suisse

| Force | Intensité | Justification |
|---|---|---|
| Rivalité interne | Moyenne à forte selon le segment | Faible sur les niches verticales à haute autonomie (1 à 2 acteurs par verticale) ; très forte sur l'intégration généraliste PME (25 agences quasi interchangeables) et sur la banque/pharma grands comptes (tous les cabinets s'y pressent) |
| Nouveaux entrants | Menace élevée | Barrières techniques en baisse (n8n, MCP, LLM par API) : une agence PME se lance en semaines, d'où la vague post-2023 ; barrières réelles ailleurs : confiance, références, conformité |
| Substituts | Menace élevée et croissante | Microsoft Copilot/Agentforce intégrés aux licences existantes ; ChatGPT et autres pour les particuliers ; ne rien faire reste le substitut principal en PME |
| Pouvoir des fournisseurs | Fort | Dépendance aux LLM américains (prix, conditions, disponibilité) ; Apertus offre une alternative souveraine mais moins performante ; pénurie de talents IA (record de ~25 000 annonces exigeant des compétences IA, Adecco/UZH) |
| Pouvoir des clients | Fort en grands comptes, moyen en PME | Grands comptes : appels d'offres, exigences FINMA/audit répercutées contractuellement ; PME : peu outillées pour comparer, fidèles une fois la confiance établie |

## 5. Barrières à l'entrée spécifiques à la Suisse
- Confiance et réseau : le marché suisse achète par recommandation ; sans références locales, cycles très longs. C'est la barrière numéro un citée dans les deux cartographies.
- Langues : une offre crédible nationale exige FR + DE (et idéalement IT) jusque dans les agents eux-mêmes ; les produits internationaux traitent mal le suisse-allemand parlé (opportunité documentée : Recapp IT, `recherche/03`).
- Souveraineté des données : exigence portée par le secret bancaire (art. 47 LB), le secret professionnel (art. 321 CP) et la pratique de marché plus que par la nLPD elle-même (`recherche/07`) ; 38 acteurs sur 84 ne documentent pourtant pas leur hébergement, l'écart discours/preuve est une barrière ou une arme.
- Conformité sectorielle : FINMA (communication 08/2024, outsourcing 2018/3) impose gouvernance et droits d'audit répercutés sur tout prestataire servant la finance ; l'article 50 de l'AI Act s'applique dès le 02.08.2026 aux chatbots dont l'output atteint l'UE.
- Cycles de vente longs en grands comptes (6-18 mois) ; à l'inverse, cycles courts en PME (semaines) mais paniers modestes.
- Capital : faible pour une offre de service (dizaines de kCHF), élevé pour un produit compétitif face aux plateformes internationales (les Series A locales sont à 30-42 M USD).

## 6. Tendances 12-24 mois et signaux faibles
1. [FAIT] Standardisation des protocoles : MCP déjà cité nativement par Unique et Typewise, A2A chez Swisscom ; l'interopérabilité des agents devient un critère d'achat.
2. [FAIT] Réglementation par étapes : avant-projet de loi suisse attendu d'ici fin 2026, obligations haut risque de l'AI Act reportées à 2027-2028 mais transparence dès août 2026 : fenêtre favorable aux offres "conformité incluse".
3. [FAIT] Consolidation : 5 acquisitions documentées en 18 mois ; les agences chatbot sans différenciation seront absorbées ou disparaîtront.
4. [EST] Descente de gamme des grands : Copilot et Agentforce vont industrialiser les cas simples ; la valeur locale se réfugiera dans l'intégration profonde aux processus et données métier suisses.
5. [EST] Souveraineté opérationnalisée : Apertus + clouds suisses rendent techniquement crédible une pile 100 % suisse ; premiers appels d'offres publics l'exigeant attendus.
6. Signal faible : montée des postes "forward deployed engineer" (24 offres recensées, y compris banque LGT, `recherche/06`) : les clients internalisent l'intégration, ce qui menace la régie mais valorise les produits et les formats de transfert de compétences.
7. Signal faible : le retrait du rapport agentique de KPMG pour hallucinations (juin 2026) a durci le scepticisme des acheteurs ; la preuve vérifiable (démos, pilotes mesurés) devient l'argument de vente décisif.

## 7. Conclusion d'analyse
Le marché suisse de l'IA agentique est réel, financé et en structuration rapide, mais il est asymétrique : sur-servi en haut (banque, pharma, grands comptes zurichois) et sous-servi en bas (PME non technologiques, verticales de proximité, cantons hors ZH/VD) ainsi que sur les exigences typiquement suisses (multilinguisme, souveraineté prouvée, conformité clef en main). Ces asymétries sont quantifiées dans `02_tableaux_comparatifs.md` (section 8) et nourrissent directement la sélection d'angle de la Phase 5.
