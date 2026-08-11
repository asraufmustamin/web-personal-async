export const ext_fr = {
  experienceUI: {
    aboutRole: "À Propos du Rôle",
    mainActivities: "Activités Principales",
    competencies: "Compétences",
    proofAndWorkflow: "Preuves et Flux de Travail (BA & PM)",
    docsAndRealContribution: "Documentation et Résumé de la Contribution Réelle",
    workflowAndRoleFocus: "Flux de Travail et Rôle",
    authenticDocsAndLogs: "Documentation Authentique et Registres",
    detailButton: "Détails",
    openPortfolioButton: "Ouvrir le Portfolio",
  },
  beaCukaiProof: {
    metrics: ["Rotation de Division", "Système Développé", "Rapport MBKM", "Durée de Rotation"],
    workflow: [
      { phase: "Recueil des Besoins en Entrepôt et Conception SIMIRA", desc: "Entretiens avec les gestionnaires d'entrepôt, conception de la base de données MySQL et création d'un prototype PHP Laravel.", roleFocus: "Analyste d'Affaires Informatique et Analyste Système" },
      { phase: "Audit des Données des Employés et Vérification", desc: "Vérification croisée de l'intégrité des données de >1 000 employés du bureau régional des douanes de Sulbagsel.", roleFocus: "Analyste de la Qualité des Données" },
      { phase: "Veille Médiatique (NALIKA) et Relations Publiques", desc: "Surveillance des problèmes d'actualité douanière quotidienne et conception de matériel de publication numérique.", roleFocus: "Analyste Médias et Communications" },
      { phase: "Analyse de la Conformité Interne et Inventaire P2", desc: "Évaluation des flux de plaintes/appels et collecte de données physiques sur les marchandises saisies.", roleFocus: "Conformité et Auditeur Terrain" }
    ],
    proofs: [
      { title: "Développement du Système SIMIRA et Prototype", caption: "Conception d'une base de données MySQL et construction d'une interface web basée sur PHP Laravel pour l'enregistrement des stocks de l'entrepôt.", tag: "Laravel & MySQL" },
      { title: "Analyse du Flux du Système et Cartographie", caption: "Cartographie des flux de processus métier pour la conception du contrôle d'accès basé sur les rôles (RBAC).", tag: "Analyse Système" },
      { title: "Validation des Données des Employés des Douanes", caption: "Vérification croisée de l'intégrité des données de milliers d'employés utilisant des feuilles de calcul et des bases de données.", tag: "Qualité des Données" },
      { title: "Analyse du Système de Plaintes et d'Appel", caption: "Examen du flux de traitement des plaintes du public et de la gestion des dossiers d'objection douanière.", tag: "Analyse de Conformité" },
      { title: "Veille Médiatique NALIKA et Conception RP", caption: "Exécution quotidienne de la veille de l'actualité douanière et conception de matériel de publication numérique.", tag: "Veille Médiatique" },
      { title: "Inventaire des Marchandises Saisies (Division P2)", caption: "Comptage physique et enregistrement des cigarettes illégales et de l'alcool saisis.", tag: "Audit Terrain & P2" },
      { title: "Service d'Accueil et Relations avec les Parties Prenantes", caption: "Service d'administration publique et réception des invités à la réception du bureau régional des douanes.", tag: "Service Public" },
      { title: "Validation du Journal de Bord MBKM SIAKAD Nobel", caption: "Récapitulation des activités de stage quotidiennes approuvées et validées académiquement dans le portail SIAKAD.", tag: "Validation Académique" }
    ]
  },
  bpjsProof: {
    metrics: ["Intégrité des Données", "Collecte des Cotisations", "Vérification OSS", "Sensibilisation BPU"],
    workflow: [
      { phase: "Validation et Nettoyage des Données d'Adhésion", desc: "Vérification de la qualité IGI et correction systématique des incohérences dans >5 000 données de participants.", roleFocus: "Analyste de Données" },
      { phase: "Automatisation du Recouvrement et Suivi", desc: "Campagnes de recouvrement via e-mail et WA pour les entreprises en retard de paiement.", roleFocus: "Représentant de Compte" },
      { phase: "Synchronisation du Portail OSS du Ministère", desc: "Vérification croisée des données d'enregistrement de nouvelles entités commerciales sur le portail OSS.", roleFocus: "Support de Conformité" },
      { phase: "Éducation et Sensibilisation au Programme", desc: "Compréhension directe du programme BPU auprès des travailleurs du secteur informel.", roleFocus: "Relations Publiques" }
    ],
    proofs: [
      { title: "Vérification des Données de Qualité IGI", caption: "Vérification des anomalies de données, des numéros d'identité (NIK) et de l'exhaustivité des profils.", tag: "Validation des Données" },
      { title: "Campagne de Recouvrement WA Blasting", caption: "Envoi automatisé de messages de recouvrement et de rappels de retard.", tag: "Automatisation" },
      { title: "Vérification Croisée du Portail OSS Intégré", caption: "Vérification de l'enregistrement des nouvelles entreprises intégrées depuis le système du Ministère.", tag: "Vérification Système" },
      { title: "Sensibilisation à la Sécurité Sociale", caption: "Assistance et éducation directes à la communauté des travailleurs du secteur informel/BPU.", tag: "Service Public" },
      { title: "Récapitulatif de l'Acquisition des Adhésions", caption: "Rapport mensuel des progrès d'acquisition et de la rétention des entreprises dans la région de Makassar.", tag: "Rapports" },
      { title: "Service Intégré de l'Emploi BPJS", caption: "Soutien aux services administratifs de base pour les participants et les représentants d'entreprises.", tag: "Administration" }
    ]
  },
  portfolioList: [
    { title: "Système d'Information Intégré du Village de Cenrana", desc: "Plateforme numérique avec 3 modules principaux : transparence budgétaire, e-Surat et gestion des données. Taux de réussite UAT de 93,8 %." },
    { title: "Prototype SIMIRA (Douanes Sulbagsel)", desc: "Système d'information de gestion pour les douanes régionales. Conception du flux métier, de l'enregistrement des stocks en temps réel et de l'authentification." },
    { title: "Système d'Aide à la Décision (Méthode TOPSIS)", desc: "Système d'analyse de données basé sur le Web pour optimiser la sélection de véhicules d'occasion en fonction de 7 critères complexes." },
    { title: "Système de Prédiction de l'Obtention du Diplôme", desc: "Modèle d'apprentissage automatique basé sur Python pour prédire la ponctualité de l'obtention du diplôme des étudiants — précision de 93 %." },
    { title: "Page de Destination et Profil Web", desc: "Pages promotionnelles conçues avec une approche visuelle élégante pour transmettre les informations de manière claire et attrayante." },
    { title: "Conception de Flux Instagram", desc: "Conceptions de médias sociaux soutenant l'image de marque organisationnelle pour la période exécutive 2024-2025." },
    { title: "Conception de Médias Sociaux pour le KKN", desc: "Conceptions de contenu de médias sociaux soutenant la publication d'activités pendant la période de service communautaire." },
    { title: "Collaboration Freelance", desc: "Diverses formes de collaboration flexible avec des individus et des besoins en projets numériques." },
    { title: "Exploration d'Autres Solutions Numériques", desc: "Espace pour des œuvres supplémentaires et de nouveaux développements qui continueront de croître." }
  ],
  projectsList: [
    { title: "Système d'Information du Village de Cenrana", roleAndDate: "Chef de Projet | Nov 2025 – Avr 2026", desc: "Un site web de village conçu pour soutenir l'information publique, la transparence budgétaire et les services administratifs.", tags: ["Site Web Villageois", "Système d'Information", "E-Surat"] },
    { title: "Système de Service d'Aspiration Numérique", roleAndDate: "Coordinateur et Développeur | Jui 2025 – Sep 2025", desc: "Une plateforme de signalement permettant de transmettre plus rapidement les plaintes concernant les infrastructures.", tags: ["Service d'Aspiration", "Signalement Citoyen", "Service Numérique"] },
    { title: "Prototype SIM Ménager", roleAndDate: "Douanes Sulbagsel | 2025", desc: "Un prototype de système d'information développé pour aider les besoins administratifs internes.", tags: ["Système d'Administration", "Gestion des Données", "Prototype"] },
    { title: "Conception Visuelle et Image de Marque", roleAndDate: "Conception Graphique et Comm Numérique", desc: "Création de contenu pour les médias sociaux, infographies, flux, Reels et matériel de publication.", tags: ["Conception de Flux et Reels", "Infographies", "Canva & Figma"] }
  ],
  blueprintNodes: [
    { title: "Analyse Commerciale et PRD", summary: "Traduction des besoins ambigus en documents de spécifications techniques (PRD/BRD) et scénarios de test UAT." },
    { title: "Intégrité et Validation des Données", summary: "Exécution d'un nettoyage de données à grande échelle (5 000+), d'une vérification de l'intégrité et d'un archivage numérique." },
    { title: "SDLC et Coordination de Projet", summary: "Direction du cycle de vie du développement logiciel de la planification au lancement." },
    { title: "Opérations d'Agent GenAI", summary: "Utilisation de l'IA comme agent de travail pour accélérer la rédaction de documents avec une validation manuelle précise." }
  ],
  cenranaExtended: {
    diagrams: [
      { title: "Architecture Système Full-Stack" },
      { title: "Diagramme Entité-Relation (ERD 20+ Tables)" },
      { title: "Structure de la Base de Données MySQL" },
      { title: "Stockage Média Cloud (Supabase)" },
      { title: "Rapport d'Évaluation du Système (UAT 93.8%)" },
      { title: "Infrastructure d'Hébergement (Hostinger VPS)" },
      { title: "Diagramme de Séquence — Validation NIK" },
      { title: "Organigramme de la Méthode SDLC" }
    ],
    screenshots: [
      { title: "Page d'Accueil Principale", category: "1. Accueil", desc: "Portail d'information principal et point d'entrée." },
      { title: "Portail de Profil du Village", category: "2. Profil du Village", desc: "Informations démographiques, territoriales et historiques." },
      { title: "Centre d'Information Publique", category: "3. Information", desc: "Portail de transparence pour les actualités et annonces." },
      { title: "Hub de Services Numériques", category: "4. Services aux Citoyens", desc: "Portail central d'accès aux services en libre-service." },
      { title: "Service d'Aspiration Citoyenne", category: "4. Services aux Citoyens", desc: "Formulaire de plainte publique avec protection SHA-256." },
      { title: "Service e-Surat Numérique", category: "4. Services aux Citoyens", desc: "Demandes automatisées de lettres administratives en ligne." },
      { title: "Marché Citoyen (Économie PME)", category: "4. Services aux Citoyens", desc: "Vitrine de marketing numérique pour les PME du village." },
      { title: "Tableau de Bord Administratif", category: "5. Administration", desc: "Résumé statistique des données citoyennes et des activités." },
      { title: "Panneau de Contrôle (CMS)", category: "5. Administration", desc: "Gestion centrale de 18 modules opérationnels." }
    ],
    fieldPhotos: [
      { title: "Signature de la Coopération", category: "1. Initiation", desc: "Processus de signature du document de coopération avec les partenaires." },
      { title: "Accord d'Initiation de Projet", category: "1. Initiation", desc: "Discussion du flux d'initiation et engagement." },
      { title: "Observation et Analyse des Besoins", category: "2. Analyse", desc: "Entretiens directs et observation des flux manuels." },
      { title: "Implémentation du Code", category: "3. Développement", desc: "Développement de code sur mesure de 18 modules." },
      { title: "Déploiement et Configuration", category: "3. Déploiement", desc: "Configuration du domaine et du serveur." },
      { title: "Tests UAT Directs", category: "4. Tests UAT", desc: "Essai direct des scénarios de plainte." },
      { title: "Évaluation UAT et Score SUS", category: "4. Tests UAT", desc: "Remplissage des questionnaires de faisabilité." },
      { title: "Formation du Village", category: "5. Formation", desc: "Formation sur le fonctionnement indépendant du système." },
      { title: "Conseils Techniques", category: "5. Formation", desc: "Formation approfondie sur la gestion des modules CMS." },
      { title: "Lettre d'Acceptation", category: "6. Acceptation", desc: "Document officiel de déclaration d'acceptation du système." },
      { title: "Remise Officielle", category: "6. Remise", desc: "Remise symbolique du système d'information au chef du village." }
    ]
  },
  topsisExtended: {
    diagrams: [
      { title: "Cadre de Base de la Méthode" },
      { title: "Flux de Calcul TOPSIS" },
      { title: "Visualisation des Poids" },
      { title: "Matrice de Décision de Normalisation" }
    ],
    screenshots: [
      { title: "Portail de Recommandation", category: "1. Accueil", desc: "Interface publique pour les acheteurs." },
      { title: "Panneau de Saisie des Critères", category: "2. Saisie", desc: "Formulaire de pondération dynamique." },
      { title: "Résultats de l'Analyse TOPSIS", category: "3. Sortie", desc: "Tableau de recommandation des 5 meilleures motos." },
      { title: "Tableau de Bord des Données", category: "4. Administration", desc: "Module de gestion de 53 données de motos." }
    ]
  }
};
