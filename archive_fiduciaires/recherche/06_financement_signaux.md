# 06 - Financement et signaux de marché : écosystème suisse de l'IA agentique

Date de rédaction : 2026-07-23
Toutes les sources ont été consultées le 2026-07-23.

## Méthode

- Recherches web ciblées (EN/FR/DE) sur les levées de fonds de startups suisses IA/agentiques 2023-2026, les rapports macro (Swiss Venture Capital Report, EY Startup Barometer), les partenariats et implantations, les acquisitions et les signaux d'embauche.
- Sources prioritaires : startupticker.ch, Venturelab, TechCrunch, Sifted, communiqués officiels des entreprises, presse spécialisée (fintechnews.ch, SecurityWeek), agrégateurs (Tracxn, PitchBook, Glassdoor).
- Chaque chiffre est sourcé (URL). Les montants ont été croisés avec au moins deux sources quand c'était possible ; les divergences sont signalées.
- Convention de statut : [FAIT] = fait sourcé ; [ESTIMATION] = estimation raisonnée à partir de sources partielles ; [HYPOTHÈSE] = interprétation non confirmée.
- Limite : Crunchbase et PitchBook ne sont accessibles que partiellement (paywall) ; certains chiffres (valorisation d'Unique, montant exact d'AlpineAI) ne sont pas publics.

## (a) Tableau des levées de fonds identifiées (2023-2026)

| Startup | Canton / ville | Montant | Tour | Date | Investisseurs principaux | Lien avec l'agentique |
|---|---|---|---|---|---|---|
| Lakera | Zurich (+ San Francisco) | 20 M USD (total levé : 30 M USD) | Series A | Juillet 2024 | Atomico (lead), Citi Ventures, Dropbox Ventures, redalpine | Périphérique-critique : sécurité temps réel des applications GenAI et agentiques (guardrails, red teaming via Gandalf) |
| EthonAI | Zurich | CHF 15 M (~16,5 M USD) | Series A | Mai 2024 | Index Ventures (lead), General Catalyst, Earlybird, Founderful | Périphérique : IA causale pour l'industrie manufacturière, pas d'agents au cœur de l'offre |
| Neural Concept | Lausanne (VD) | 27 M USD | Series B | Juin 2024 | Forestay Capital (lead), D. E. Shaw, Alven, CNB Capital, HTGF, Aster | Périphérique : deep learning 3D pour l'ingénierie produit |
| Unique | Zurich | 30 M USD (total levé : 53 M USD) | Series A | Février 2025 | CommerzVentures et DN Capital (co-leads), VI Partners, Pictet Group | Cœur : "agentic AI workforce" pour la finance (25 cas d'usage agents, clients Pictet, UBP, LGT, SIX, Partners Group) |
| General Intuition | Genève (co-fondateurs et équipe) + New York | 133,7 M USD | Seed | Octobre 2025 | Khosla Ventures, General Catalyst, The Raine Group | Cœur : world models et agents à raisonnement spatio-temporel (données vidéo de la plateforme Medal). Attention : société d'origine américaine avec une forte équipe genevoise, le rattachement "suisse" est partiel |
| DeepJudge | Zurich | 41,2 M USD | Series A | Novembre 2025 | Felicis (lead), Coatue | Cœur/proche : recherche d'entreprise juridique branchée sur des agents IA (RAG + agents), clients Freshfields, Holland & Knight |
| Neural Concept | Lausanne (VD) | 100 M USD | Series C | Décembre 2025 | Growth Equity at Goldman Sachs Alternatives (lead) | Périphérique : plateforme d'ingénierie "AI-native", partenaires Nvidia, Siemens, Microsoft |
| Rivia | Zurich | 15 M USD | Series A | Mars 2026 (annonce) | Earlybird (lead), Defiant, Speedinvest, Amino Collective, Nina Capital | Cœur : suite d'agents IA pour les essais cliniques (premier agent "Spark"), ~40 essais utilisateurs |
| AlpineAI (SwissGPT) | Davos (GR) | "double-digit million" CHF, montant exact non disponible publiquement | Seed | Avril 2026 | Swiss KMU Partners (lead) + investisseurs tech internationaux non nommés | Cœur/proche : plateforme d'IA souveraine permettant de déployer des agents IA sur données sensibles dans des datacenters suisses certifiés |
| Squirro | Zurich | ~29 M USD au total (dernier tour : Series B), pas de grosse levée récente identifiée | Series B (historique) | - | Selon Tracxn : total levé 29,02 M USD | Cœur : plateforme GenAI d'entreprise, "Agent Catalog" de 13 agents préconstruits (finance, RH, juridique, ventes, IT) ; croissance ~60 % de revenus en 2024 |

Croisements et vérifications :
- Unique 30 M USD : confirmé par TechCrunch, fintechnews.ch, startupticker et le communiqué de l'entreprise (montant identique partout ; Silicon Canals indique 28,6 M EUR, simple conversion). [FAIT]
- DeepJudge 41,2 M USD et valorisation de 300 M USD : confirmés par Forbes, startupticker, Venturelab (arrondi à 42 M) et Deep Tech Nation. [FAIT]
- Lakera 20 M USD : confirmé par PRNewswire, Sifted, Fortune, startupticker. [FAIT]
- Neural Concept 100 M USD Series C : communiqué de l'entreprise et Venturelab ; EU-Startups indique 85 M EUR (conversion). [FAIT]
- AlpineAI : montant exact non divulgué ("double-digit million"), source unique startupticker. [FAIT sur l'existence, montant non disponible publiquement]
- Aucune valorisation publique pour Unique, Rivia, AlpineAI, Squirro. [FAIT : non disponible publiquement]

Valorisations connues :
- DeepJudge : 300 M USD post-Series A (nov. 2025, Forbes / Deep Tech Nation). [FAIT]
- Lakera : ~300 M USD via le prix d'acquisition par Check Point (voir section e) ; montant rapporté par la presse israélienne, non confirmé officiellement par Check Point. [ESTIMATION rapportée par Calcalist/Ynet]

## (b) Contexte macro : VC suisse et IA

Deux sources de référence, avec des méthodologies différentes (à ne pas additionner ni confondre) :

1. Swiss Venture Capital Report 2026 (startupticker.ch + SECA, publié début 2026, périmètre : tours de financement VC publiquement connus de startups suisses) :
 - CHF 2,95 milliards investis en 2025 sur 354 tours, soit +23,9 % sur un an, première hausse annuelle depuis 2022. [FAIT]
 - Record de CHF 1'116 millions en early stage (seed + Series A), +73 % sur un an. [FAIT]
 - Sources : cms.law (résumé du rapport), deeptechnation.ch, startupticker.ch/en/swiss-venture-capital-report.

2. EY Start-up Barometer Suisse 2026 (publié le 2 mars 2026, périmètre plus large : VC + private equity + subventions + convertibles + startups "liées" à la Suisse) :
 - CHF 3,3 milliards investis en 2025 (+44 % vs 2024) sur 515 tours (513 en 2024). [FAIT]
 - IA : 163 tours pour des startups liées à l'IA en 2025 (contre 112 en 2024, +46 %) ; volume investi en IA passé de CHF 345 millions (2024) à environ CHF 1'058 millions (2025), soit environ un triplement (+206 %). L'IA représente environ un tiers des tours. [FAIT]
 - Sources : startupticker.ch (article EY Barometer), ey.com.

Points complémentaires :
- Deep tech : la Suisse serait première au monde pour la part du VC allant à la deep tech, avec un financement deep tech record d'environ 2,6 milliards USD en 2025 (Swiss Deep Tech Report / Deep Tech Nation, méthode propre à ce rapport). [FAIT sourcé, méthodologie distincte]
- Segment "agentic AI" au sens strict : Tracxn ne comptait que ~49,6 M USD sur 2 tours en Suisse en 2025 (jusqu'à novembre, +61,7 % vs 2024). Ce chiffre est manifestement très en deçà de la réalité observable (Unique 30 M + DeepJudge 41,2 M dépassent déjà ce total) : la catégorisation "agentic AI" de Tracxn est étroite et exclut des acteurs classés ailleurs (legaltech, fintech). À utiliser avec prudence. [FAIT sur le chiffre publié ; ESTIMATION : sous-évaluation par effet de taxonomie]
- Tendance qualitative : concentration du capital sur moins de dossiers de meilleure qualité, l'IA étant le principal moteur de la reprise 2025. Scalemetrics projette ~CHF 3,2 milliards pour 2026 et estime que plus de 60 % des tours ICT/SaaS impliquent une composante IA/ML. [ESTIMATION de source secondaire, méthode non détaillée]

Contradiction à signaler : les totaux 2025 divergent entre SVCR (CHF 2,95 mds, 354 tours) et EY (CHF 3,3 mds, 515 tours). Ce n'est pas une erreur mais une différence de périmètre (EY inclut PE, subventions et convertibles). Le chiffre de 163 tours IA provient du périmètre EY.

## (c) Signaux d'embauche

Volumes observables (instantanés, ordre de grandeur) :
- Glassdoor : 369 offres "artificial intelligence" en Suisse (juillet 2026) et 142 offres "AI / machine learning engineer" (juin 2026). [FAIT à la date de consultation]
- Glassdoor : 24 offres "forward deployed engineer" en Suisse (juin 2026), un intitulé quasi inexistant avant 2024 et typique du déploiement d'agents IA chez les clients. [FAIT]
- swissaijob.ch recense 337 offres IA dans des entreprises suisses (2026). [FAIT]
- jobs.ch : pas de comptage fiable obtenu à distance pour la requête "AI agent" ; non disponible publiquement via cette méthode. [FAIT : non mesuré]

Profils recherchés (exemples d'offres actives observées) :
- OpenAI Zurich : "Technical Deployment Lead, Forward Deployed Engineering". [FAIT]
- LGT (banque privée, Zurich) : "Forward Deployed Engineer" pour son équipe IA interne (private banking et fonctions corporate). Signal fort : les banques elles-mêmes recrutent des profils de déploiement d'IA agentique. [FAIT]
- Kyndryl Zurich : "Forward Deployed Engineer - AI Engineer" (solutions IA custom de bout en bout). [FAIT]
- EthonAI (Zurich) : postes d'ingénierie IA industrielle, 3 jours sur site. [FAIT]
- Fourchette salariale observée pour un FDE AI/ML à Zurich via cabinet (Rockstar Recruiting) : CHF 100'000 - 130'000 / an. [FAIT sur l'annonce, non généralisable]
- Les annonces suisses demandent explicitement de l'expérience "tool use, planning, retrieval and agentic integrations for LLMs" et "production-ready LLM workflows" (datacareer.ch, Glassdoor). [FAIT]

Effectifs et croissance (points de repère sourcés) :
- Lakera : ~70 employés au moment de l'annonce d'acquisition (sept. 2025, SecurityWeek). [FAIT]
- Unique : ~165 employés (PitchBook, profil 2026). [FAIT selon PitchBook, précision non garantie]
- Neural Concept : plus de 60 employés (juin 2024, communiqué), recrutement mondial annoncé comme usage des fonds Series B puis C. [FAIT]
- DeepJudge : croissance de revenus de +500 % sur un an revendiquée (nov. 2025) ; effectifs non publiés. [FAIT sur la déclaration, chiffre non audité]
- Contexte : le PwC AI Jobs Barometer 2025 (Suisse) montre une forte croissance des postes exposés à l'IA (méthode : ~1 milliard d'offres mondiales, dizaines de milliers d'offres suisses). [FAIT]

## (d) Partenariats et implantations notables

Implantations de laboratoires IA internationaux :
- OpenAI : ouverture d'un bureau à Zurich annoncée fin 2024, autour de trois chercheurs vedettes débauchés de Google DeepMind Zurich (Lucas Beyer, Alexander Kolesnikov, Xiaohua Zhai, équipe Vision Transformer). [FAIT]
- Anthropic : équipe de recherche à Zurich annoncée en 2025, dirigée par Neil Houlsby (ex-Google DeepMind) ; troisième implantation européenne après Londres et Dublin, avant Paris et Munich (nov. 2025). [FAIT]
- Microsoft : investissement de 400 M USD annoncé en juin 2025 pour étendre ses datacenters cloud/IA près de Zurich et Genève (GPU pour charges IA). [FAIT]
- Google DeepMind dispose de longue date d'un centre de recherche majeur à Zurich (contexte, vivier de talents des fondateurs de DeepJudge et des équipes OpenAI/Anthropic Zurich). [FAIT]

Partenariats corporate suisses :
- Swisscom : partenariat avec Nvidia (annoncé au WEF de Davos) pour bâtir une "Swiss AI Platform" souveraine ; Swisscom veut vendre des services IA à ses clients entreprises en alternative à Microsoft/OpenAI ; membre du Swiss National AI Institute (ETH Zurich + EPFL). [FAIT]
- Apertus : LLM suisse entièrement ouvert publié le 2 septembre 2025 par EPFL, ETH Zurich et le CSCS (entraîné sur le supercalculateur Alps, plus de 10 millions d'heures GPU, 15 billions de tokens, 40 % de données non anglaises dont le suisse allemand et le romanche). Swisscom est parmi les premiers à le déployer sur sa Sovereign Swiss AI Platform ; disponible aussi sur AWS SageMaker. [FAIT]
- Unique x place financière : plateforme agentique déployée chez Pictet, UBP, LGT, SIX et Partners Group ; Pictet est aussi investisseur. [FAIT]
- Neural Concept : partenariats technologiques avec Nvidia, Siemens et Microsoft (Series C, déc. 2025). [FAIT]
- Contexte bancaire mondial touchant la Suisse : Anthropic a lancé "Claude for Financial Services" (juillet 2025) avec agents préconstruits pour la banque ; aucun partenariat public UBS-OpenAI ou UBS-Anthropic n'a été confirmé dans les sources consultées. [FAIT sur le lancement ; FAIT : partenariat UBS non confirmé publiquement]
- Cisco (étude juin 2025) : environ 50 % des interactions B2B clients en Suisse passeraient par des agents IA d'ici 2026. [FAIT sur l'existence de la projection ; à traiter comme prévision d'éditeur, pas comme mesure]

## (e) Acquisitions, sorties et échecs

- Lakera acquis par Check Point Software (annoncé le 16-17 septembre 2025, closing prévu T4 2025) : montant estimé à 300 M USD selon Calcalist/Ynet/Globes, non confirmé officiellement par Check Point. Lakera (Zurich + San Francisco, ~70 personnes) devient le centre d'excellence mondial "AI Security" de Check Point, axé sur la sécurisation des applications agentiques. C'est la sortie la plus emblématique de l'écosystème agentique suisse. [FAIT sur l'acquisition ; montant : ESTIMATION de presse]
- Yokoy (Zurich, gestion des dépenses par IA) acquis par TravelPerk (Espagne), annoncé le 28 janvier 2025, montant non divulgué, dans le cadre d'une Series E de 200 M USD valorisant TravelPerk à 2,7 mds USD ; le lab IA zurichois de Yokoy est mis en avant par l'acquéreur. [FAIT ; prix d'acquisition non disponible publiquement]
- Squirro (Zurich) en position d'acquéreur : rachat de Synaptica (USA, taxonomies et knowledge graphs) en juillet 2024 pour renforcer son offre RAG/agents. [FAIT]
- Échecs / fermetures : aucune faillite ou fermeture significative d'une startup suisse d'IA agentique n'a été identifiée dans les sources consultées (les grands cas 2025 comme Builder.ai sont étrangers). Absence de preuve n'est pas preuve d'absence : les fermetures early stage suisses sont peu médiatisées. [FAIT : rien d'identifié publiquement ; HYPOTHÈSE : une correction touchera d'abord les "wrappers" sans moat, tendance documentée mondialement]

## Lecture d'ensemble (synthèse analytique)

- [FAIT] Le financement IA suisse a environ triplé en 2025 (périmètre EY : CHF 345 M -> ~1'058 M), dans un marché VC globalement en reprise (+24 à +44 % selon le périmètre).
- [ESTIMATION] L'agentique "cœur d'offre" reste un sous-segment jeune : les tours identifiés (Unique, DeepJudge, Rivia, AlpineAI, Squirro) sont concentrés à Zurich, en Series A, sur des verticales réglementées (finance, juridique, essais cliniques, secteur public), avec un argument récurrent de souveraineté des données.
- [ESTIMATION] Le triangle talents (Google DeepMind Zurich, ETH, EPFL) - implantations (OpenAI, Anthropic, Microsoft) - clients réglementés (banques, pharma) est le moteur structurel de l'écosystème ; l'apparition d'offres "forward deployed engineer" jusque dans les banques (LGT) signale le passage des POC au déploiement.
- [HYPOTHÈSE] Avec DeepJudge valorisé 300 M USD et Lakera sorti à ~300 M USD quatre ans après sa création, une Series B d'Unique et des tours growth agentiques suisses sont plausibles d'ici fin 2026 ; rien d'annoncé à ce jour.

## Sources consultées (URL, consultées le 2026-07-23, fiabilité)

Rapports et macro :
- https://www.startupticker.ch/en/swiss-venture-capital-report - page officielle SVCR (fiabilité élevée)
- https://cms.law/en/che/legal-updates/swiss-venture-capital-report-2026-shows-strong-rebound-in-swiss-vc-market - résumé SVCR 2026 (élevée)
- https://www.startupticker.ch/en/news/ey-startup-barometer-invested-capital-rebounds-ai-gaining-importance - EY Barometer 2026, publié 2026-03-02 (élevée)
- https://www.ey.com/en_ch/newsroom/2026/02/ey-start-up-barometer-switzerland-2026-significant-increase-in-investment-volume-ai-start-ups-becoming-much-more-important - communiqué EY (élevée)
- https://deeptechnation.ch/dtn-news/swiss-venture-capital-achieves-24-growth-as-early-stage-investment-hits-record-1-35-billion/ - Deep Tech Nation (moyenne-élevée)
- https://www.startupticker.ch/en/news/switzerland-extends-its-lead-as-deep-tech-hub - deep tech (élevée)
- https://www.scalemetrics.ai/biggest-swiss-funding-rounds-2026/ - agrégateur, méthode non détaillée (moyenne)
- https://tracxn.com/d/explore/agentic-ai-startups-in-switzerland/__l6U08-6tfY9VFcUerzHKkgiRG7Te2PntrgGXgIx_97g - Tracxn agentic AI CH (moyenne, taxonomie étroite)

Levées de fonds :
- https://techcrunch.com/2025/02/27/unique-a-swiss-ai-platform-for-finance-raises-30m/ (élevée)
- https://www.unique.ai/en/blog/unique-secures-usd-30-million-series-a-to-pioneer-agentic-ai-workforce-in-financial-services-2 - communiqué (élevée, source primaire)
- https://fintechnews.ch/aifintech/switzerlands-unique-raises-30m-series-a-to-advance-financial-ai-solutions/74883/ (moyenne-élevée)
- https://www.startupticker.ch/en/news/deepjudge-closes-41-2m-series-a-round (élevée)
- https://www.forbes.com/sites/aliciapark/2025/11/04/meet-the-ex-google-researchers-building-ai-search-for-law-firms/ (élevée)
- https://deeptechnation.ch/dtn-news/from-eth-labs-to-300m-valuation-how-deepjudges-41-2m-round-showcases-swiss-ai-excellence/ (moyenne-élevée)
- https://www.prnewswire.com/news-releases/lakera-raises-20m-series-a-to-secure-generative-ai-applications-302204874.html - communiqué (élevée, primaire)
- https://sifted.eu/articles/atomico-gandalf-lakera-raise-news (élevée)
- https://www.startupticker.ch/en/news/rivia-raises-15m-series-a-to-bring-clinical-trials-into-the-agentic-ai-era - publié 2026-03-18 (élevée)
- https://www.startupticker.ch/en/news/alpineai-raises-double-digit-million-seed-round-for-sovereign-ai - publié 2026-04-14 (élevée)
- https://www.startupticker.ch/en/news/general-intuition-raises-usd-134-million - publié 2025-10-17 (élevée)
- https://ethon.ai/news/ethonai-closes-chf-15m-series-a-financing-round/ - communiqué (élevée, primaire)
- https://techcrunch.com/2024/05/30/ai-manufacturing-startup-funding-is-on-a-tear-as-switzerlands-ethonai-raises-16-5m/ (élevée)
- https://www.businesswire.com/news/home/20240531755430/en/Engineering-AI-Platform-Neural-Concept-Raises-%2427-Million-Series-B-to-Further-Accelerate-Global-Growth - communiqué (élevée, primaire)
- https://www.neuralconcept.com/post/neural-concept-closes-100m-funding-round-led-by-growth-equity-at-goldman-sachs-alternatives-to-scale-ai-native-engineering - communiqué (élevée, primaire)
- https://www.eu-startups.com/2025/12/with-nvidia-siemens-and-microsoft-as-partners-lausanne-based-neural-concept-raises-e85-million/ (moyenne-élevée)
- https://tracxn.com/d/companies/squirro/__aQCZkXHtmnOUsHvDBbF2FbrIlzFtBNO9SAApczQ0Hhs - total levé Squirro (moyenne)
- https://www.prnewswire.com/news-releases/squirro-drives-almost-60-annual-growth-through-acquisitions-partnerships-and-technology-enhancements-302370129.html - communiqué (élevée, primaire pour les revendications de Squirro)

Acquisitions :
- https://www.checkpoint.com/press-releases/check-point-acquires-lakera-to-deliver-end-to-end-ai-security-for-enterprises/ - communiqué officiel, sans montant (élevée, primaire)
- https://www.securityweek.com/check-point-to-acquire-ai-security-firm-lakera/ (élevée)
- https://www.calcalistech.com/ctechnews/article/rj5bc1vige - montant ~300 M USD (moyenne-élevée, non confirmé officiellement)
- https://www.startupticker.ch/en/news/check-point-to-acquire-lakera (élevée)
- https://www.globenewswire.com/news-release/2025/01/28/3016058/0/en/TravelPerk-Raises-200M-and-Acquires-Yokoy-to-Create-the-Leading-Integrated-Travel-and-Expense-Management-Platform.html - communiqué (élevée, primaire)
- https://www.finews.com/news/english-news/66121-yokoy-zurich-fintech-sold-to-spain-travelperk-philippe-sahli (moyenne-élevée)
- https://squirro.com/news-and-events/squirro-acquires-synaptica-a-strategic-fusion-of-generative-ai-and-knowledge-graph-technologies - communiqué (élevée, primaire)

Implantations et partenariats :
- https://www.swissinfo.ch/eng/archive-multinational-companies/openai-sets-up-new-office-in-switzerland/88468988 (élevée)
- https://www.greaterzuricharea.com/en/success-stories/anthropic (moyenne-élevée, organisme de promotion)
- https://www.s-ge.com/invest/en/articles/news/anthropic-establishing-ai-research-team-zurich (élevée)
- https://news.microsoft.com/source/emea/features/switzerlands-digital-future-microsofts-commitment/ - communiqué (élevée, primaire)
- https://www.rcrwireless.com/20250604/ai-ml/microsoft-ai-switzerland (moyenne-élevée)
- https://www.swisscom.ch/en/about/news/2025/05/14-vertrauenswuerdige-ki-entwicklung.html - communiqué (élevée, primaire)
- https://www.nzz.ch/english/ai-made-in-switzerland-swisscom-plans-to-develop-its-own-ai-services-ld.1774836 (élevée)
- https://ethz.ch/en/news-and-events/eth-news/news/2025/09/press-release-apertus-a-fully-open-transparent-multilingual-language-model.html - communiqué (élevée, primaire)
- https://aws.amazon.com/blogs/alps/switzerlands-open-source-apertus-llms-now-available-on-amazon-sagemaker-ai/ (élevée, primaire)
- https://www.americanbanker.com/news/anthropic-launches-bank-friendly-ai-agents-vendor-alliances (élevée)

Emploi et effectifs :
- https://www.pwc.ch/en/insights/transformation/ai-jobs-barometer-2025-switzerland.html (élevée)
- https://www.glassdoor.com/Job/switzerland-artificial-intelligence-jobs-SRCH_IL.0,11_IN226_KO12,35.htm - 369 offres, juillet 2026 (moyenne, instantané)
- https://www.glassdoor.com/Job/switzerland-forward-deployed-engineer-jobs-SRCH_IL.0,11_IN226_KO12,37.htm - 24 offres FDE, juin 2026 (moyenne, instantané)
- https://swissaijob.ch/jobs/sector/industry - 337 offres IA (moyenne)
- https://swissdevjobs.ch/jobs/Rockstar-Recruiting-AG-Forward-Deployed-Engineer---AIML - fourchette CHF 100-130k (moyenne)
- https://jobmaps.ch/en/company/341212/job/234541 - FDE Kyndryl Zurich (moyenne)
- https://pitchbook.com/profiles/company/484788-34 - effectif Unique ~165 (moyenne, paywall partiel)
