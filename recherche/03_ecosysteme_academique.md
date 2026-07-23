# Écosystème académique et deeptech suisse de l'IA agentique

Date de rédaction : 2026-07-23
Toutes les sources ont été consultées le 2026-07-23.

## 1. Méthode

- Recherches web en anglais, allemand et français (requêtes types : "ETH Zurich spin-off AI agents", "EPFL spin-off agentic AI", "Swiss AI Initiative Apertus", "IDIAP startup", "ETH AI Center startups", "Swiss LLM startup", "Innosuisse programme IA").
- Consultation directe des pages institutionnelles : liste des startups affiliées à l'ETH AI Center, page spin-offs de l'Idiap, pages EPFL Startup Launchpad, pages Swiss AI Initiative / Apertus.
- Croisement avec la presse spécialisée (Startupticker, TechCrunch, Venturelab, Forbes, Silicon Canals, Fintechnews.ch, ICTjournal).
- Règles appliquées : aucun chiffre inventé ; données absentes marquées "non disponible publiquement" ; distinction explicite entre fait sourcé, estimation raisonnée et hypothèse.
- Périmètre : spin-offs et startups issues de l'écosystème académique suisse (EPFL, ETH Zurich, Idiap, CSEM, universités, HES) commercialisant des agents IA, de l'orchestration multi-agents, des copilotes ou des briques pour construire des agents. La recherche pure sans offre commerciale est traitée uniquement en contexte (sections 3 et 4).
- Limite méthodologique : les effectifs et revenus sont rarement publiés en Suisse ; plusieurs champs restent donc "non disponible publiquement". Le degré d'agenticité est une estimation raisonnée à partir de la communication produit des entreprises.

Échelle d'agenticité utilisée : chatbot < RAG < workflow automatisé < agents autonomes multi-étapes < infrastructure-outillage (briques pour construire/sécuriser des agents).

---

## 2. Fiches acteurs

### 2.1 Unique AG (Zurich)

- Canton / ville : Zurich, Zurich.
- Année de création : 2021 (fait sourcé).
- Effectif estimé : non disponible publiquement (estimation raisonnée : plusieurs dizaines, scale-up post-Series A).
- Statut : privée, indépendante, en expansion vers les États-Unis.
- Cible : B2B.
- Verticales : services financiers (banque privée, asset management, compliance, KYC).
- Offre : plateforme d'"agentic AI workforce" pour les fonctions middle et back-office ; environ 25 cas d'usage spécialisés ou agents sur mesure (recherche, compliance, KYC).
- Degré d'agenticité : agents autonomes multi-étapes sur workflows métier (copilotes + agents spécialisés).
- Stack technique : non détaillée publiquement (plateforme propriétaire au-dessus de LLM).
- Modèle de revenus : SaaS entreprise (estimation raisonnée).
- Financement : Series A de 30 M USD (février 2025), menée par CommerzVentures et DN Capital, avec VI Partners et Pictet Group ; total levé 53 M USD (fait sourcé).
- Clients références : Pictet, UBP, LGT, SIX, Partners Group (fait sourcé).
- Langues : non disponible publiquement (marché DACH + international).
- Hébergement des données : mise en avant de la sécurité des données et de la conformité réglementaire ; détails d'hébergement non disponibles publiquement.
- Lien académique : qualifiée de "spin-off ETH" par certaines sources secondaires (zuerich.ai), mais ce n'est pas un spin-off officiel labellisé ETH ; à considérer comme startup de l'écosystème zurichois (estimation raisonnée).
- URL : https://www.unique.ai
- Confiance : élevée sur le financement et les clients ; moyenne sur le lien académique.
- Sources : Venturelab (venturelab.swiss/Unique-raises-USD-30M-Series-A-to-advance-agentic-AI-in-financial-services), TechCrunch (techcrunch.com/2025/02/27/unique-a-swiss-ai-platform-for-finance-raises-30m/), Startupticker.

### 2.2 DeepJudge AG (spin-off ETH Zurich)

- Canton / ville : Zurich, Zurich.
- Année de création : 2021 (fait sourcé, fondée par trois docteurs en IA de l'ETH, ex-Google : Paulina Grnarova, Kevin Roth, Yannic Kilcher).
- Effectif estimé : non disponible publiquement.
- Statut : privée, forte croissance (plus de 500 % de croissance de revenus en glissement annuel revendiquée fin 2025).
- Cible : B2B (cabinets d'avocats, directions juridiques).
- Verticales : legaltech.
- Offre : plateforme de recherche de connaissances ("knowledge search") pour cabinets d'avocats ; connexion aux dépôts documentaires, emails, intranets et portails clients sans déplacement des données ; permet de construire des applications IA, d'encapsuler des workflows multi-étapes et de déployer des agents LLM.
- Degré d'agenticité : RAG d'entreprise + workflows automatisés + agents LLM (infrastructure applicative verticale).
- Stack technique : moteur de recherche sémantique propriétaire, agents branchés en retrieval-augmented sur les sources internes (fait sourcé au niveau descriptif).
- Modèle de revenus : SaaS entreprise (estimation raisonnée).
- Financement : Series A de 41-42 M USD (novembre 2025) menée par Felicis avec Coatue ; total environ 51,9 M USD (fait sourcé).
- Clients références : Holland & Knight, Cozen O'Connor, ArentFox Schiff, Schoenherr (fait sourcé).
- Langues : non disponible publiquement (clients US et européens).
- Hébergement des données : approche "sans déplacement des données" mise en avant ; détails non disponibles publiquement.
- URL : https://www.deepjudge.ai
- Confiance : élevée.
- Sources : Venturelab, Forbes (forbes.com/sites/aliciapark/2025/11/04/meet-the-ex-google-researchers-building-ai-search-for-law-firms/), legaltechnologyhub.com.

### 2.3 Invariant Labs (spin-off ETH Zurich, rachetée)

- Canton / ville : Zurich, Zurich.
- Année de création : 2024 (fait sourcé : rachetée "moins d'un an après sa fondation").
- Statut : acquise par Snyk en juin 2025 ; devient un centre de compétence sécurité des agents IA (fait sourcé).
- Cible : B2B.
- Verticales : sécurité des agents IA (transverse).
- Offre : outils de sécurité pour agents : détection et prévention de comportements non sûrs d'agents autonomes (guardrails, analyse de traces d'agents, sécurité MCP).
- Degré d'agenticité : infrastructure-outillage (brique de sécurité pour agents).
- Financement : non disponible publiquement ; montant d'acquisition non divulgué.
- Lien académique : spin-off du département d'informatique de l'ETH (labo SRI, Prof. Martin Vechev), affiliée ETH AI Center (fait sourcé).
- URL : https://invariantlabs.ai (redirigé vers Snyk depuis l'acquisition).
- Confiance : élevée.
- Signal marché : première sortie (exit) suisse purement "sécurité d'agents", qui valide la thèse d'une spécialisation suisse sur les briques de confiance pour agents.
- Source : ETH D-INFK (inf.ethz.ch/news-and-events/spotlights/infk-news-channel/2025/06/eth-spin-off-aquired-by-snyk.html).

### 2.4 Lakera (Zurich, rachetée par Check Point)

- Canton / ville : Zurich, Zurich (+ San Francisco).
- Année de création : 2021, par d'anciens de Google et Meta (fait sourcé).
- Effectif estimé : environ 70 personnes au moment du rachat (fait sourcé).
- Statut : acquisition par Check Point finalisée en 2025 ; montant rapporté d'environ 300 M USD (fait sourcé via Calcalist ; montant non confirmé officiellement par Check Point). Zurich devient le "Global Centre of Excellence for AI Security" de Check Point.
- Cible : B2B.
- Verticales : cybersécurité de l'IA (transverse).
- Offre : Lakera Guard (protection en temps réel des LLM, agents et workflows multimodaux), Lakera Red (red teaming / évaluation avant déploiement) ; créateur du jeu Gandalf (sensibilisation à l'injection de prompt).
- Degré d'agenticité : infrastructure-outillage (sécurisation d'agents et de LLM).
- Financement pré-acquisition : environ 30 M USD levés (seed + Series A, Citi Ventures, Atomico e.a. ; estimation raisonnée à partir de la presse).
- Lien académique : fondateurs issus de l'écosystème zurichois (ETH pour David Haber) ; startup affiliée ETH AI Center (fait sourcé via la liste de l'ETH AI Center).
- URL : https://www.lakera.ai
- Confiance : élevée sur l'acquisition ; moyenne sur le montant.
- Sources : Check Point (checkpoint.com/press-releases/check-point-acquires-lakera-to-deliver-end-to-end-ai-security-for-enterprises/), Calcalist, CyberScoop.

### 2.5 LatticeFlow AI (spin-off ETH Zurich)

- Canton / ville : Zurich, Zurich (+ Sofia, adossée à INSAIT).
- Année de création : 2020 (fait sourcé ; fondateurs : Petar Tsankov, Pavol Bielik, Martin Vechev, Andreas Krause).
- Effectif estimé : non disponible publiquement.
- Statut : privée.
- Cible : B2B.
- Verticales : gouvernance et évaluation de l'IA (banque, industrie, défense).
- Offre : plateforme d'évaluation et de gouvernance des systèmes IA : évaluations scalables, tests adversariaux, évidences de risque, évaluation d'agents IA sur cas d'usage réels ; COMPL-AI (premier cadre technique aligné sur l'AI Act européen, co-développé avec ETH Zurich et INSAIT) ; AI Insights (évaluation indépendante de la maturité "entreprise" des modèles, y compris une évaluation publique d'Apertus).
- Degré d'agenticité : infrastructure-outillage (évaluation/gouvernance de modèles et d'agents).
- Financement : 2,8 M USD (2021) puis Series A de 12 M USD (fait sourcé).
- Clients références : Siemens Mobility, Intenseye, Voxel AI, Carscan (fait sourcé).
- URL : https://latticeflow.ai
- Confiance : élevée.
- Sources : ETH News, TechCrunch, latticeflow.ai.

### 2.6 Calvin Risk (spin-off ETH Zurich)

- Canton / ville : Zurich, Zurich.
- Année de création : 2022 (fait sourcé ; fondateurs Julian Riebartsch, Syang Zhou).
- Effectif estimé : non disponible publiquement.
- Statut : privée.
- Cible : B2B.
- Verticales : gouvernance des risques IA (assurance, finance, industrie).
- Offre : plateforme SaaS de gouvernance et de quantification des risques des inventaires IA (tests automatisés, évaluation quantitative en temps réel, conformité réglementaire).
- Degré d'agenticité : infrastructure-outillage (brique de confiance pour le déploiement d'IA, dont agents).
- Financement : plus de 5 M USD au total, dont seed de 4 M USD (novembre 2024, Join Capital, seed + speed Ventures, b2venture, Founderful) (fait sourcé).
- URL : https://www.calvin-risk.com
- Confiance : élevée.
- Source : GlobeNewswire (globenewswire.com/news-release/2024/11/19/2983508).

### 2.7 LogicStar AI (spin-off ETH Zurich / INSAIT)

- Canton / ville : Zurich, Zurich.
- Année de création : 2024 (estimation raisonnée ; levée pré-seed annoncée février 2025).
- Effectif estimé : non disponible publiquement (petite équipe).
- Statut : privée, early stage.
- Cible : B2B (éditeurs de logiciels, équipes d'ingénierie).
- Verticales : maintenance logicielle autonome.
- Offre : agent IA de maintenance applicative : reproduit les bugs, teste des solutions et propose des correctifs de manière autonome ("self-healing applications") ; a publié le benchmark SWT-Bench pour agents de code.
- Degré d'agenticité : agents autonomes multi-étapes (référence suisse la plus "pure" du segment agents de code).
- Financement : 3 M USD pré-seed (février 2025), menés par Northzone, avec des business angels de DeepMind, Snyk, Spotify (fait sourcé).
- Lien académique : co-fondée par le Prof. Martin Vechev (labo SRI de l'ETH, directeur scientifique d'INSAIT), Boris Paskalev, Veselin Raychev, Mark Müller.
- URL : https://logicstar.ai
- Confiance : élevée.
- Sources : logicstar.ai, Northzone, Startupticker.

### 2.8 Omnilex (fondée à l'ETH Zurich)

- Canton / ville : Zurich, Zurich.
- Année de création : 2024 (fait sourcé).
- Effectif estimé : non disponible publiquement.
- Statut : privée, early stage.
- Cible : B2B (avocats, études juridiques suisses).
- Verticales : legaltech.
- Offre : espace de travail juridique IA avec le premier "commentaire juridique généré par IA" ; combine lois, jurisprudence et commentaire dans un environnement de raisonnement ; automatisation de la recherche juridique.
- Degré d'agenticité : RAG avancé + workflows automatisés de recherche juridique.
- Financement : seed de 4,5 M USD (novembre 2025) : Founderful, Plug and Play, Tiny Supercomputer Investment Company, Angel Invest, Pascal Mathis (fait sourcé).
- Lien académique : fondée à l'ETH Zurich, soutien du Prof. Elliott Ash (ETH AI Center) (fait sourcé).
- Langues : ciblage du droit suisse (multilingue DE/FR/IT probable ; hypothèse).
- URL : https://omnilex.ai
- Confiance : élevée sur financement ; moyenne sur le reste.
- Sources : Silicon Canals, Startupticker, Artificial Lawyer.

### 2.9 nunu.ai (Zurich, fondateurs issus de l'ETH)

- Canton / ville : Zurich, Zurich (+ présence US).
- Année de création : 2023 (estimation raisonnée à partir du parcours Y Combinator et des levées).
- Effectif estimé : non disponible publiquement (petite équipe).
- Statut : privée, early stage.
- Cible : B2B (studios de jeux vidéo moyens et grands, Europe et US).
- Verticales : jeux vidéo (QA), extension revendiquée vers la robotique.
- Offre : agents IA multimodaux qui testent et jouent aux jeux comme des humains (QA automatisée) ; records du monde revendiqués sur Pokémon Emerald et Hogwarts Legacy via agents.
- Degré d'agenticité : agents autonomes multi-étapes (environnements de jeu).
- Financement : 2 M USD pré-seed (a16z Games Speedrun, Y Combinator, Boost VC) puis seed de 6 M USD (avril 2025, a16z speedrun et TIRTA Ventures) ; total 8 M USD (fait sourcé).
- Lien académique : startup affiliée à l'ETH AI Center (fait sourcé via la liste officielle) ; fondateurs Jan Schnyder, Kyrill Hux, Nicolas Muntwyler.
- URL : https://nunu.ai
- Confiance : élevée.
- Sources : Venture Kick, Startupticker, PocketGamer.biz.

### 2.10 Giotto.ai (Lausanne, EPFL Innovation Park)

- Canton / ville : Vaud, Lausanne (EPFL Innovation Park).
- Année de création : 2017 (fait sourcé).
- Effectif estimé : non disponible publiquement ; équipe avec des alumni DeepMind, CERN, ETH Zurich (fait sourcé).
- Statut : privée ; en 2025-2026, recherche de plus de 200 M USD à une valorisation supérieure à 1 Md USD (mandat Lazard, selon Reuters ; fait sourcé mais fondé sur des "sources" de presse).
- Cible : B2B (positionnement "Intelligence You Control").
- Verticales : modèles de raisonnement, IA frugale embarquée.
- Offre : modèle de raisonnement portable et "AI operating system" permettant un raisonnement agentique sur un seul GPU ; en tête de l'ARC Prize 2025 (27,08 % des puzzles résolus avec un modèle d'environ 200 M de paramètres, coût moyen 0,20 USD par tâche revendiqué).
- Degré d'agenticité : infrastructure-outillage (modèles de raisonnement comme brique agentique).
- Financement : historique de financement complet non disponible publiquement.
- URL : https://www.giotto.ai
- Confiance : moyenne à élevée (performance ARC sourcée ; valorisation fondée sur des fuites de presse).
- Sources : Reuters via TradingView, RTS via Archyde, giotto.ai, SCCIJ.

### 2.11 AlpineAI / SwissGPT (ZHAW, ETH, UZH)

- Canton / ville : siège fondé à Davos (Grisons) ; activités à Zurich (fait sourcé).
- Année de création : 2023 (fait sourcé).
- Effectif estimé : non disponible publiquement.
- Statut : privée.
- Cible : B2B (entreprises suisses, administrations).
- Verticales : assistant IA d'entreprise sécurisé, transverse.
- Offre : SwissGPT, un système d'IA type ChatGPT pour entreprises, avec traitement des données en Suisse ; s'appuie sur des modèles tiers (GPT, Falcon et autres open source).
- Degré d'agenticité : chatbot / RAG d'entreprise (agenticité limitée à ce stade ; estimation raisonnée).
- Lien académique : co-fondateurs Pascal Kaufmann (Mindfire), Benjamin Grewe (professeur ETH/UZH), Thilo Stadelmann (directeur du Centre IA de la ZHAW) ; affiliée ETH AI Center (faits sourcés).
- Financement : non disponible publiquement.
- Hébergement des données : Suisse (argument commercial central ; fait sourcé).
- URL : https://www.swissgpt.ai (via AlpineAI).
- Confiance : moyenne.
- Sources : Greater Zurich Area, ZHAW Impact, cash.ch.

### 2.12 Supertext (fusion Supertext + Textshuttle, spin-off UZH)

- Canton / ville : Zurich, Zurich (+ Berlin).
- Année de création : Textshuttle fondée en 2016 comme spin-off UZH ; fusion avec Supertext annoncée début 2025 (faits sourcés).
- Effectif : environ 120 personnes (Zurich et Berlin) plus un réseau de 3000+ freelances (fait sourcé).
- Statut : privée (CEO : Samuel Läubli, docteur en linguistique computationnelle UZH).
- Cible : B2B.
- Verticales : traduction et services linguistiques (banques, médias, industrie).
- Offre : plateforme combinant traduction automatique propriétaire (y compris dialectes / langues suisses) et traduction humaine ; briques de language AI sécurisées pour entreprises.
- Degré d'agenticité : workflow automatisé (traduction augmentée) ; pas d'agents autonomes (estimation raisonnée).
- Financement : non disponible publiquement.
- Hébergement des données : positionnement "secure Swiss online translator" (fait sourcé).
- URL : https://www.supertext.com
- Confiance : élevée.
- Sources : UZH Innovation Hub, Slator, Startupticker.

### 2.13 Recapp IT AG (spin-off Idiap)

- Canton / ville : Valais, Martigny (incubateur IdeArk).
- Année de création : non disponible publiquement (active depuis le milieu des années 2010 ; issue de l'Idiap Create Challenge).
- Effectif estimé : non disponible publiquement (PME).
- Statut : privée.
- Cible : B2B / B2G (parlements cantonaux, médias, administrations ; estimation raisonnée).
- Verticales : reconnaissance vocale, transcription.
- Offre : reconnaissance vocale spécialisée sur les langues nationales suisses et les dialectes suisses-allemands ; transcription automatique (produits type Töggl).
- Degré d'agenticité : brique technologique (speech-to-text) utilisable dans des pipelines d'agents vocaux ; pas d'agents autonomes.
- Financement : non disponible publiquement.
- Hébergement des données : cloud suisse (argument mis en avant ; confiance moyenne).
- URL : https://www.recapp.ch
- Confiance : moyenne.
- Sources : idiap.ch (tech-transfer/spinoffs-partners), idiap.ch/en/allnews/two-idiap-spin-off-in-the-swiss-top-100.

### 2.14 Visium SA (Lausanne, EPFL Innovation Park)

- Canton / ville : Vaud, Lausanne (EPFL Innovation Park).
- Année de création : 2018 (estimation raisonnée : "huit ans bootstrappée" avant première levée institutionnelle rapportée en 2026).
- Effectif : environ 100 personnes en Europe (fait sourcé).
- Statut : privée ; première levée institutionnelle récente (montant non disponible publiquement).
- Cible : B2B.
- Verticales : multi-sectorielle (pharma, industrie, finance, retail) ; plateforme dédiée life sciences (Visium Labs).
- Offre : services et solutions IA sur mesure ; développement d'une plateforme d'IA agentique propriétaire, y compris agents sur le cycle de vie du développement logiciel.
- Degré d'agenticité : workflows automatisés à agents multi-étapes (plateforme en construction ; estimation raisonnée).
- Financement : non disponible publiquement.
- URL : https://www.visium.com
- Confiance : moyenne.
- Sources : visium.com, Venturelab, Deep Tech Nation.

### 2.15 EthonAI (spin-off ETH Zurich) - cas frontière

- Canton / ville : Zurich, Zurich.
- Année de création : 2021 (fait sourcé ; fondateurs Torbjørn Netland, Julian Senoner, Bernhard Kratzwald).
- Effectif : 21 personnes (donnée Dealroom, date exacte incertaine).
- Cible : B2B (industrie manufacturière).
- Offre : analytics de production par IA (détection et prévention des pertes de qualité).
- Degré d'agenticité : faible (analytics et workflows, pas d'agents autonomes) ; inclus ici comme spin-off IA emblématique mais hors du coeur agentique (estimation raisonnée).
- Financement : 6,8 M USD seed (2023) puis Series A de 16,5 M USD (Index Ventures) (faits sourcés).
- URL : https://ethon.ai
- Confiance : élevée.
- Sources : ETH MTEC, Index Ventures, TFN.

### 2.16 Acteurs de contexte (hors spin-offs académiques stricts)

- Squirro (Zurich, fondée 2012, non académique) : plateforme GenAI d'entreprise combinant RAG, knowledge graphs et workflows agentiques ; catalogue de 13 agents IA lancé pour l'entreprise ; croissance d'environ 60 % en 2025 ; acquisition de Synaptica. Référence du marché suisse de l'agentique d'entreprise, utile comme point de comparaison concurrentiel. Sources : squirro.com, PRNewswire, VKTR. Confiance : élevée.
- Startups affiliées ETH AI Center à surveiller (informations publiques limitées, confiance faible à moyenne, données financières non disponibles publiquement) : DDMind (IA agentique pour l'analyse financière combinant LLM et modélisation déterministe), askEarth (agent géospatial d'intelligence satellitaire), UTHEREAL.ai (plateformes de connaissance personnalisées sur LLM), Dynius (GenAI pour services financiers), Modulos (plateforme d'IA data-centric et gouvernance), Askantis (GenAI et IA causale pour la décision), Rimon Technologies et Ucentrics (retrieval vidéo / guidance des travailleurs de première ligne). Source : liste officielle ETH AI Center (ai.ethz.ch/entrepreneurship/startups.html).
- Idiap, autres spin-offs actives mais non agentiques : Eyeware (eye tracking), Klewel (webcasting et indexation de conférences), AudioSearch (indexation vocale), Vima (analyse comportementale) ; anciennes : Koemei (rachetée par Crealogix en 2017), KeyLemon (biométrie, rachetée par AMS), Biowatch, DigitArena. Elles montrent la capacité de l'Idiap à transférer des briques perception/parole, en amont des agents vocaux. Source : idiap.ch.
- CSEM (Neuchâtel) : pas de spin-off "agents IA" identifié à ce jour ; les spin-offs récents relèvent du hardware pour l'IA (ex. CCRAFT, fonderie photonique pour l'optique des datacenters IA, 7,8 M USD levés en 2026) et de la santé (Aktiia). Le CSEM opère un portefeuille Data & AI et le programme CSEM Accelerate. Positionnement : briques matérielles et edge AI plutôt qu'agents logiciels. Sources : csem.ch, Startuprad.io. Confiance : moyenne.
- Exits antérieurs structurants pour le vivier de talents : Yokoy (gestion des dépenses par IA, rachetée par TravelPerk) et Beekeeper (fusion avec LumApps) alimentent le recyclage de talents et de business angels dans l'agentique zurichoise (estimation raisonnée, non vérifiée en détail dans cette recherche).

---

## 3. Initiatives structurantes

### 3.1 Swiss AI Initiative, supercalculateur Alps et modèle Apertus

- Swiss AI Initiative : lancée en décembre 2023, pilotée par EPFL et ETH Zurich, soutenue par plus de 10 institutions académiques, plus de 800 chercheurs dont environ 70 professeurs en IA (faits sourcés : swiss-ai.org, ETH News).
- Financement : CHF 20 millions alloués par le Conseil des EPF pour 2025-2028, plus de 10 millions d'heures GPU investies sur Alps (faits sourcés : swissinfo.ch, ETH News).
- Alps (CSCS, Lugano) : supercalculateur avec plus de 10 000 superpuces NVIDIA Grace Hopper, alimenté en énergie renouvelable ; infrastructure d'entraînement d'Apertus (fait sourcé).
- Apertus : LLM entièrement ouvert (poids, données, recettes d'entraînement), multilingue (données couvrant plus de 1800 langues, dont suisse-allemand et romanche), publié le 2 septembre 2025 en versions 8B et 70B sous licence Apache 2.0 (faits sourcés : ETH News, Wikipedia).
- Canaux de diffusion commerciaux : Swisscom le propose sur sa plateforme "sovereign Swiss AI" pour clients entreprises ; disponible sur Hugging Face, sur Amazon SageMaker AI, et via la Public AI Inference Utility (soutenue par Mozilla et le Future of Life Institute) ainsi que la coopérative Swiss Public Inference Utility (spiu.ch) (faits sourcés).
- Impact marché : Apertus fournit aux startups suisses une base souveraine, auditable et gratuite pour construire des agents conformes (AI Act, secret bancaire, santé). LatticeFlow a publié une évaluation indépendante de sa maturité entreprise. Impact réel sur les produits commerciaux encore émergent à mi-2026 (estimation raisonnée).

### 3.2 Swiss National AI Institute (SNAI)

- Fondé conjointement par ETH Zurich et EPFL (annonce octobre 2024), fédérant l'ETH AI Center et l'EPFL AI Center ; plus de 70 professeurs (fait sourcé).
- Mission : modèles de fondation à grande échelle, transparents et open source, déployés dans la santé, la durabilité, la science, l'éducation, la robotique ; objectif explicite que PME et startups puissent en bénéficier (fait sourcé : ETH News, Greater Zurich Area).

### 3.3 ETH AI Center et écosystème zurichois

- L'ETH AI Center liste 78 startups affiliées (consultation 2026-07-23), dont une part croissante de sociétés agentiques (Invariant Labs, LogicStar, nunu.ai, DDMind, Omnilex, askEarth) et de briques de confiance (Lakera, LatticeFlow, Calvin Risk, Modulos) (fait sourcé : ai.ethz.ch).
- ETH Zurich a établi un record de créations en 2025 : 46 ventures (24 spin-offs, 22 startups), CHF 540 millions levés sur 41 tours divulgués, l'IA/ML représentant le premier sous-secteur (26 %) (fait sourcé : zuerich.ai, ETH News).
- Le labo SRI (Prof. Martin Vechev) est une "usine à spin-offs" agentiques : LatticeFlow, Invariant Labs, LogicStar, avec le pont vers INSAIT (Sofia).
- Effet d'ancrage des rachats : Snyk (via Invariant) et Check Point (via Lakera) installent leurs centres mondiaux de sécurité IA à Zurich (fait sourcé).

### 3.4 EPFL AI Center et Startup Launchpad AI Track

- EPFL Startup Launchpad, AI Track "powered by UBS" : lancé en juin 2025, subventions jusqu'à CHF 50 000, mentorat, accès aux experts UBS ; 6 premiers projets sélectionnés en novembre 2025 parmi plus de 50 candidatures (dont Windlens, prévision éolienne) ; nouvel appel en 2026 (faits sourcés : actu.epfl.ch, Startupticker).
- EPFL LLM team (Prof. Bosselut, Jaggi, Hartley) : Meditron, meilleur LLM médical open source ; en 2026, "médicalisation" d'Apertus et d'autres modèles ouverts (MeditronFO) ; test clinique de Meditron au CHUV (urgences) annoncé (faits sourcés : actu.epfl.ch, ICTjournal, swissinfo.ch).

### 3.5 Idiap, IdeArk et Valais

- Idiap (Martigny) : institut de recherche semi-privé, pionnier en perception machine, parole et dialogue ; incubateur IdeArk ; Idiap Create Challenge (ICC), édition 2026 en cours, qui transforme des technologies Idiap en startups (faits sourcés : idiap.ch, icc.idiap.ch).
- Boîte à outils SDialog (IA conversationnelle reproductible) : brique open source pertinente pour les agents conversationnels (fait sourcé).

### 3.6 CSEM, Innosuisse et financement public

- CSEM : programmes ACCELERATE (4 deeptechs sélectionnées en 2025) et extension à Schwyz en 2026 ; axe Data & AI orienté industrialisation et edge (faits sourcés : csem.ch).
- Innosuisse : "Start-up Innovation Projects" (financement pré-commercialisation, 45 projets financés sur une période récente), ouverts aux projets IA ; conditions : siège suisse, moins de 50 ETP, moins de 5 ans en règle générale (faits sourcés : innosuisse.admin.ch, Startupticker).
- Contexte capital-risque : le financement deeptech suisse a atteint un record de 2,6 Md USD en 2025 ; 63 % du capital-risque suisse va au deeptech, part la plus élevée au monde ; l'IA/ML représente désormais une nouvelle société deeptech suisse sur quatre (faits sourcés : Swiss Deep Tech Report 2026 via deeptechnation.ch, agnavigator).

---

## 4. Pipeline 12-24 mois (mi-2026 à mi-2028)

Faits sourcés et estimations raisonnées, avec niveau d'incertitude indiqué.

1. Spécialisation verticale d'Apertus (probabilité élevée) : la Swiss AI Initiative annonce un basculement vers des modèles spécialisés bâtis sur Apertus, en particulier dans le médical (MeditronFO, pilote CHUV aux urgences). Attendu : agents cliniques souverains et copilotes santé commercialisables via spin-offs EPFL/CHUV (source : swissinfo.ch, ICTjournal).
2. Sécurité et gouvernance des agents comme spécialité suisse (probabilité élevée) : après les exits Invariant Labs (Snyk) et Lakera (Check Point), les labos SRI/ETH et INSAIT continueront de produire des spin-offs "briques de confiance" (évaluation, guardrails, conformité AI Act via COMPL-AI). Zurich concentre désormais deux centres mondiaux de sécurité IA d'acteurs internationaux, aimant à talents et à nouvelles créations (estimation raisonnée à partir de faits sourcés).
3. Agents de code et de maintenance logicielle (probabilité élevée) : LogicStar (SWT-Bench) et la recherche associée alimenteront des offres d'agents autonomes de correction de bugs à horizon 12-24 mois (fait sourcé sur la feuille de route de LogicStar ; calendrier = hypothèse).
4. Cohortes ETH AI Center et EPFL Launchpad AI Track (probabilité élevée) : les cohortes 2025-2026 (Windlens, DDMind, askEarth, Omnilex, etc.) atteindront la commercialisation ou des Series A dans la fenêtre ; le record de 46 ventures ETH en 2025 alimente mécaniquement le flux 2026-2028 (faits sourcés sur les cohortes ; trajectoire = estimation raisonnée).
5. Voix et dialecte suisse (probabilité moyenne) : les briques Idiap (parole, SDialog) et Recapp (dialectes) sont les candidates naturelles pour des agents vocaux "Swiss German native" en service client et administration ; l'ICC 2026 peut générer de nouvelles startups (estimation raisonnée).
6. Modèles de raisonnement frugaux (probabilité moyenne, forte incertitude) : si Giotto.ai finalise sa levée de plus de 200 M USD à valorisation supérieure à 1 Md USD, la Suisse romande disposerait d'un champion des modèles de raisonnement embarquables pour agents on-premise (fait sourcé sur l'intention de levée via Reuters ; issue incertaine).
7. Infrastructure souveraine d'inférence (probabilité moyenne) : montée en charge des canaux Swisscom, SPIU et Public AI Inference Utility pour l'inférence Apertus ; hypothèse d'offres d'orchestration d'agents "hébergés en Suisse" par des intégrateurs (Visium, Squirro, AlpineAI) dans la fenêtre 12-24 mois (hypothèse).
8. Hardware pour l'IA (contexte) : les spin-offs CSEM/EPFL en photonique (CCRAFT) et neuromorphique (SynSense/iniVation) nourrissent la couche matérielle, sans offre agentique directe (fait sourcé, impact indirect).

Risques transverses : dépendance aux modèles américains pour les produits en production (Apertus reste en retrait de l'état de l'art), rachats précoces qui transfèrent la propriété intellectuelle à l'étranger (Snyk, Check Point), et rareté des données d'effectifs/revenus qui complique la veille concurrentielle.

---

## 5. Sources consultées (2026-07-23)

Institutionnelles (fiabilité élevée) :
- https://ethz.ch/en/news-and-events/eth-news/news/2025/09/press-release-apertus-a-fully-open-transparent-multilingual-language-model.html
- https://ethz.ch/en/news-and-events/eth-news/news/2025/01/start-up-boom-thriving.html
- https://inf.ethz.ch/news-and-events/spotlights/infk-news-channel/2025/06/eth-spin-off-aquired-by-snyk.html
- https://ai.ethz.ch/entrepreneurship/startups.html (liste des 78 startups affiliées ETH AI Center)
- https://ethz.ch/en/news-and-events/eth-news/news/2024/10/eth-zurich-and-eth-epfl-collaboration (SNAI ; voir aussi actu.epfl.ch)
- https://actu.epfl.ch/news/six-ai-startup-projects-selected-for-new-launchpad
- https://www.epfl.ch/innovation/startup/programs/ai-track/
- https://www.idiap.ch/en/tech-transfer/spinoffs-partners ; https://icc.idiap.ch/
- https://www.csem.ch/en/history-and-start-ups/ ; https://www.csem.ch/en/press/four-future-deep-tech-start-ups-join-csem-accelerate/
- https://www.innosuisse.admin.ch/en/start-up-innovation-projects
- https://www.swiss-ai.org/ ; https://www.swisscom.ch/en/about/news/2025/09/02-apertus.html
- https://publicai.co/stories/apertus ; https://spiu.ch/

Presse et bases spécialisées (fiabilité moyenne à élevée) :
- https://techcrunch.com/2025/02/27/unique-a-swiss-ai-platform-for-finance-raises-30m/
- https://www.venturelab.swiss/Unique-raises-USD-30M-Series-A-to-advance-agentic-AI-in-financial-services
- https://www.venturelab.swiss/USD-42M-Series-A-for-DeepJudges-AI-knowledge-platform-for-law-firms
- https://www.forbes.com/sites/aliciapark/2025/11/04/meet-the-ex-google-researchers-building-ai-search-for-law-firms/
- https://www.checkpoint.com/press-releases/check-point-acquires-lakera-to-deliver-end-to-end-ai-security-for-enterprises/
- https://www.calcalistech.com/ctechnews/article/rj5bc1vige (montant Lakera, ~300 M USD, non confirmé officiellement)
- https://techcrunch.com/2021/01/19/eth-spin-off-latticeflow-raises-2-8m-to-help-build-trustworthy-ai-systems ; https://insait.ai/latticeflow-rounda-en/
- https://www.globenewswire.com/news-release/2024/11/19/2983508 (Calvin Risk)
- https://logicstar.ai/blog/logicstar-ai-raised-a-3m-round-led-by-northzone ; https://www.startupticker.ch/en/news/three-million-to-make-self-healing-software-a-reality
- https://siliconcanals.com/omnilex-raises-3-8m/ ; https://www.artificiallawyer.com/2025/11/11/omnilex-bags-4-5m-for-legal-research-ai-commentary/
- https://www.startupticker.ch/en/news/nunu-ai-closes-6-million-seed-round ; https://www.venturekick.ch/Nunuai-raises-USD-2M-PreSeed-Funding-to-innovate-game-testing-with-AI
- https://my.tradingview.com/news/reuters.com%2C2025%3Anewsml_L6N3V50VI%3A0 (Giotto.ai, levée visée ; fiabilité moyenne, "sources" Reuters)
- https://www.aicerts.ai/news/giotto-ai-bets-on-reasoning-based-models-to-lead-swiss-agi-charge/
- https://www.greaterzuricharea.com/en/news/swissgpt-bringing-secure-ai-companies ; https://impact.zhaw.ch/en/article/a-historic-collaboration-switzerlands-own-version-of-chatgpt
- https://www.innovation.uzh.ch/en/stories/news/2025/12.02.2025_Supertext.html ; https://slator.com/supertext-and-textshuttle-are-merging/
- https://www.visium.com/about ; https://www.venturelab.swiss/index.cfm?page=137304&profil_id=19504
- https://ethon.ai/news/seed-financing-round/ ; https://www.indexventures.com/perspectives/ethonai-series-a/
- https://squirro.com/news-and-events/squirro-fintech-top50 ; https://www.prnewswire.com/news-releases/squirro-launches-ai-agent-catalog-to-end-the-start-from-zero-problem-stalling-enterprise-ai-302829144.html
- https://zuerich.ai/news/eth-zurich-spinoff-record-2025-analysis/
- https://www.swissinfo.ch/eng/swiss-ai/artificial-intelligence-in-switzerland-whats-new-in-2026/90701795
- https://www.ictjournal.ch/news/2026-06-19/lepfl-medicalise-apertus-et-dautres-modeles-dia-ouverts
- https://deeptechnation.ch/dtn-news/swiss-deep-tech-report-2026-switzerland-leads-the-technologies-reshaping-the-global-economy/
- https://en.wikipedia.org/wiki/Apertus_(LLM)

Note de fiabilité : les montants de financement proviennent de communiqués et de presse spécialisée (fiabilité élevée) ; les effectifs et modèles de revenus sont rarement publiés (fiabilité faible, marqués comme estimations) ; les degrés d'agenticité sont des estimations raisonnées de l'auteur à partir de la communication produit.
