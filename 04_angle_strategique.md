# 04 - Angle stratégique : sélection d'un angle de marché sous-exploité
Date : 23 juillet 2026. Fondé sur les zones blanches de `02_tableaux_comparatifs.md` (section 8), l'analyse `03_analyse_marche.md` et les livrables `recherche/01` à `08`. Statuts : [FAIT] sourcé, [EST] estimation raisonnée, [HYP] hypothèse.

## 1. Angles candidats issus des zones blanches

| # | Angle | Zone blanche d'origine |
|---|---|---|
| A | Agents IA pour fiduciaires et cabinets comptables suisses | 10 acteurs touchent la verticale, tous en workflow générique, aucun produit ni studio dédié [FAIT, CSV] |
| B | Agents conformes pour le secteur public romand (communes, cantons) | 24 acteurs sur la verticale mais un seul au niveau agent autonome (Swisscom) ; demande prouvée par l'AO fédéral de 57 M CHF et le chatbot fribourgeois [FAIT] |
| C | Copilote agentique généraliste PME multilingue FR/DE/IT | Rareté des offres nativement trilingues [FAIT, recherche/01-02] |
| D | "Souveraineté prouvée" : agents pour professions à secret (avocats, médecins) avec hébergement suisse certifié et auditable | 38 acteurs sur 84 ne documentent pas leur hébergement malgré l'argument marketing [FAIT, CSV] ; secret professionnel art. 321 CP comme moteur [FAIT, recherche/07] |
| E | Agents pour construction et artisanat (devis, planification, facturation) | 9 acteurs en workflow, aucun au-delà, aucun produit dédié [FAIT, CSV] |
| F | Assistant agentique B2C/prosumer suisse payant | 6 acteurs B2C, aucun au-delà du workflow, freemium dominant [FAIT, CSV + recherche/05] |
| G | Agents multilingues pour hôtellerie et tourisme | 10 acteurs en périphérie, aucun agent autonome dédié [FAIT, CSV] |

## 2. Grille de notation
Échelle 1 à 5, 5 = favorable au nouvel entrant. Notes [EST], fondées sur les faits collectés ; la pondération est uniforme, à ajuster selon votre appétence au risque.

| Critère | A Fiduciaires | B Secteur public | C PME trilingue | D Souveraineté secret | E Construction | F B2C payant | G Tourisme |
|---|---|---|---|---|---|---|---|
| Taille du besoin | 4 | 4 | 5 | 4 | 4 | 2 | 3 |
| Intensité concurrentielle (5 = faible) | 4 | 4 | 1 | 3 | 4 | 3 | 4 |
| Difficulté technique (5 = faible) | 3 | 2 | 2 | 2 | 4 | 3 | 4 |
| Cycle de vente (5 = court) | 4 | 1 | 3 | 2 | 4 | 5 | 4 |
| Capital nécessaire (5 = faible) | 4 | 3 | 2 | 2 | 4 | 2 | 4 |
| Défendabilité | 4 | 3 | 1 | 4 | 3 | 2 | 2 |
| Temps avant premier revenu (5 = court) | 4 | 1 | 3 | 2 | 4 | 3 | 4 |
| **Total (sur 35)** | **27** | **18** | **17** | **19** | **27** | **20** | **25** |

Justification des notes extrêmes : B et D pénalisés par les cycles de vente (marchés publics ; exigences d'audit et de certification, `recherche/07`) ; C pénalisé par la concurrence frontale de Microsoft Copilot et des 25 agences généralistes [FAIT, CSV] ; F pénalisé par la disposition à payer non démontrée (freemium généralisé, `recherche/05`).

## 3. Arbitrage entre les deux ex aequo (A et E)
A (fiduciaires) l'emporte sur E (construction) pour quatre raisons :
1. Récurrence naturelle : la fiduciaire a des processus mensuels et annuels normés (salaires, TVA, bouclements, déclarations), parfaits pour des agents et pour un revenu récurrent ; la construction est davantage en flux projet.
2. Canal de prescription structuré : [FAIT] FIDUCIAIRE|SUISSE compte plus de 4 200 membres (8 100 employés) organisés en 12 sections cantonales, entreprises moyennes de 6 collaborateurs (treuhandsuisse.ch, consulté le 23.07.2026) ; EXPERTsuisse s'y ajoute. Aucun équivalent aussi homogène en construction.
3. Effet de levier : chaque fiduciaire sert des dizaines de PME clientes ; un agent déployé chez la fiduciaire touche indirectement tout son portefeuille, et la fiduciaire peut devenir revendeuse.
4. Alignement avec les barrières suisses : données ultra-sensibles (salaires, impôts), exigence de souveraineté et spécificités cantonales (26 régimes fiscaux) qui découragent les produits internationaux : la barrière du marché devient la défense de l'offre.

## 4. Angle retenu : studio d'agents IA pour fiduciaires suisses

### 4.1 Proposition de valeur
"Nous automatisons les tâches répétitives des fiduciaires suisses avec des agents IA hébergés en Suisse, intégrés à vos logiciels existants, conformes nLPD, en français et en allemand : vous libérez des heures facturables sans embaucher." Offres : (1) audit de processus (2 000 à 4 000 CHF) ; (2) premier agent en production en 6 semaines (8 000 à 20 000 CHF) : tri et saisie de pièces, relances débiteurs, préparation de déclarations, réponses clients standardisées ; (3) run et amélioration continue (300 à 800 CHF/mois par agent). Prix [EST] calés sur les fourchettes publiques observées (`02_tableaux_comparatifs.md`, section 4).

### 4.2 Persona client
Associé-gérant d'une fiduciaire de 3 à 15 collaborateurs en Suisse romande, 45-60 ans, débordé en période fiscale, en difficulté de recrutement [FAIT : pénurie de personnel qualifié documentée dans la branche, `recherche/08`], équipé de logiciels métier suisses (Abacus, WinBIZ, Crésus, Dr. Tax [À VÉRIFIER pour chaque cible]), sensible au secret professionnel et à l'hébergement des données, achète par recommandation de pairs.

### 4.3 Concurrence
- Directs : les agences généralistes qui listent la fiduciaire parmi leurs verticales : Mivelaz Consulting, AVQN, i-fixit, Les Précurseurs Lab, Sidora [FAIT, CSV]. Aucune n'est dédiée à la verticale ni n'offre de produit réutilisable : leur présence valide le besoin sans le verrouiller.
- Indirects : les plateformes suisses d'automatisation comptable non agentiques (Accounto, bexio, Run my Accounts, Klara [À VÉRIFIER : périmètre exact de leurs fonctions IA en 2026]) ; les éditeurs métier historiques s'ils ajoutent des agents ; Microsoft Copilot pour la bureautique générique ; l'externalisation à bas coût.
- Risque d'entrant : un éditeur comptable suisse qui lancerait ses propres agents ; parade en 4.6.

### 4.4 Positionnement prix
Milieu de gamme assumé : au-dessus des agences généralistes à 1 500 CHF (crédibilité métier), en dessous des intégrateurs à 20 000 CHF le pilote (NETNODE) ; objectif : 60 % du revenu en récurrent (run + abonnements) sous 18 mois, pour sortir du plafond du forfait projet identifié en Phase 3.

### 4.5 Go-to-market suisse
1. Mois 1-3 : 3 fiduciaires pilotes romandes à prix coûtant contre étude de cas chiffrée (heures économisées mesurées) ; recrutement via réseau personnel puis annuaire des sections FIDUCIAIRE|SUISSE Vaud, Genève et Valais.
2. Mois 3-9 : conférences et formations dans les sections cantonales romandes et auprès d'EXPERTsuisse ; contenu LinkedIn en FR ; partenariat d'intégration avec un éditeur métier (WinBIZ ou Crésus [À VÉRIFIER : programmes partenaires]).
3. Mois 9-18 : extension alémanique (section Zurich/Berne, offre en DE), packaging des agents récurrents en produit semi-standard, canal de revente par les fiduciaires vers leurs PME clientes.
Premiers clients à cibler : les fiduciaires membres des comités des sections romandes de FIDUCIAIRE|SUISSE (visibles sur treuhandsuisse.ch et les sites de sections : ces personnes sont jointes facilement, crédibilisent la marque et prescrivent), plus les fiduciaires déjà en transformation numérique repérables par leur présence sur les annuaires des éditeurs cloud. Nommer des sociétés précises exige la consultation des annuaires de sections, prévue au test des 30 jours (4.7).

### 4.6 Risques et parades
| Risque | Probabilité [EST] | Parade |
|---|---|---|
| Un éditeur comptable lance ses agents intégrés | Moyenne à 24 mois | Se positionner en couche d'orchestration multi-logiciels, nouer le partenariat éditeur tôt, viser l'acquisition comme issue acceptable |
| Fiabilité insuffisante des agents sur des données comptables | Moyenne | Périmètre initial : tâches à faible risque avec validation humaine (art. 21 nLPD respecté par conception) ; jamais de production comptable finale autonome au départ |
| Cycle d'adoption plus lent que prévu (profession prudente) | Moyenne | L'audit payant finance la prospection ; cibler d'abord les fiduciaires déjà cloud |
| Dépendance aux LLM américains contradictoire avec le discours souveraineté | Faible à moyenne | Architecture à modèles substituables ; option Apertus/infrastructure suisse pour les données sensibles [FAIT : disponible via Swisscom, recherche/03] |
| Concurrence des agences généralistes en baisse de prix | Élevée mais peu létale | La spécialisation métier (plan comptable suisse, TVA, 26 régimes fiscaux) creuse un fossé que le généraliste ne franchit pas à coût nul |

### 4.7 Ce qui invaliderait cette recommandation, et le test en 30 jours
L'angle est invalidé si l'une de ces conditions se vérifie :
1. Les fiduciaires n'ont pas de budget : moins de 3 rendez-vous obtenus sur 30 sollicitations, ou aucune intention d'achat au-delà de 5 000 CHF.
2. Le besoin est déjà couvert : les plateformes type Accounto/éditeurs métier offrent déjà des agents jugés suffisants par les fiduciaires interrogées.
3. La barrière d'intégration est infranchissable : pas d'API exploitable sur les logiciels dominants (Abacus, WinBIZ, Crésus) sans accord éditeur inaccessible.
Protocole de test (30 jours, moins de 2 000 CHF) : semaine 1, extraire 60 fiduciaires romandes des annuaires de sections et qualifier leur équipement logiciel ; semaines 2-3, 30 sollicitations, objectif 8 entretiens de 30 minutes sur les tâches chronophages et la disposition à payer ; semaine 3, vérification technique des API des 3 logiciels dominants et des programmes partenaires ; semaine 4, maquette d'un agent de relance débiteurs ou de collecte de pièces présentée à 3 fiduciaires, avec proposition d'un pilote payant. Critère de succès : 1 pilote signé ou 2 lettres d'intention ; sinon, basculer sur l'angle E (construction), deuxième du classement.
