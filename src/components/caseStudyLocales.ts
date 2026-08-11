export const caseStudyLocales: Record<string, any> = {
  id: {}, // Defaults are in CaseStudySection.tsx
  en: {
    cenrana: {
      title: "Cenrana Village Information System",
      subtitle: "Integrated Digital Village Platform — Public Aspirations & Digital Economy",
      role: "Business Analyst & Project Lead",
      overview: "Developed a full-stack Village Information System (SID) integrating an information center, citizen aspiration services, and a digital economy storefront. Built from scratch (~95% custom code) using Next.js 16, with multi-layered security (SHA-256, AES-256-GCM) and PWA.",
      problems: [
        { title: "Infrastructure Gap", desc: "Village information still relies on physical notice boards. Information distribution takes 3-7 days." },
        { title: "Unmanaged Aspirations", desc: "Citizens voice complaints via personal social media without official channels, making it hard to follow up." },
        { title: "SME Economic Stagnation", desc: "70 entrepreneurs with limited marketing reach confined to the local environment." }
      ],
      metrics: [
        { label: "UAT Success" }, { label: "Database Tables" }, { label: "Custom Code" },
        { label: "Admin Modules" }, { label: "Village Population" }, { label: "Data Managed" }
      ],
      phases: [
        { title: "1. Business Needs Analysis", roleFocus: "IT Business Analyst (BA)", desc: "Conducted semi-structured interviews with Village Officials to extract operational needs. Mapped the manual workflow (As-Is Process) and identified 3 main problems.", outputs: ["Software Requirements Specification (SRS)", "As-Is vs To-Be Process Mapping", "Stakeholder Mapping"] },
        { title: "2. System Modeling & Architecture", roleFocus: "System Analyst (SA)", desc: "Translated business needs into executable technical blueprints. Designed ERD for 20+ tables, Use Case Diagrams, and Sequence Diagrams for NIK encryption and complaint handling.", outputs: ["Entity Relationship Diagram (20+ Tables)", "Full-Stack System Architecture Blueprint", "NIK Validation Sequence Diagram (SHA-256)", "Complaint & Citizen Service Flowchart"] },
        { title: "3. Prototype Design & Business Logic", roleFocus: "UI/UX & System Analyst", desc: "Designed Wireframes & High-Fidelity Prototypes for 18 admin modules and public portal. Formulated logic for citizen privacy protection and WhatsApp Gateway integrated business flow.", outputs: ["Wireframe & High-Fidelity UI Prototype", "WhatsApp Gateway Business Flow Specs", "Encrypted NIK Data Security Protocol"] },
        { title: "4. Feasibility Testing (UAT & QA)", roleFocus: "IT BA / QA Analyst", desc: "Composed User Acceptance Testing (UAT) scenario matrix and tested system feasibility directly with village apparatus and citizen samples. Measured System Usability Scale (SUS) and audited web performance.", outputs: ["UAT Success Matrix & Report (93.8%)", "System Usability Scale Evaluation (SUS: 75.6)", "Google Lighthouse & Web Security Audit"] },
        { title: "5. Training & Handover", roleFocus: "IT Project Lead & BA", desc: "Drafted PDF System User Manual, conducted direct socialization & training on admin dashboard operation, and handed over the desacenrana.id domain.", outputs: ["System User Manual (PDF)", "System Handover Certificate (BAST)", "Official Launch of desacenrana.id Domain"] }
      ]
    },
    topsis: {
      title: "Used Motorcycle Selection DSS (TOPSIS)",
      subtitle: "Web-Based Decision Support System & Criteria Analysis",
      role: "System Analyst & Full-Stack Developer",
      overview: "Developed a web-based Decision Support System (DSS) using the TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution) method to objectively evaluate 53 alternatives against 7 complex criteria. Features dynamic weighting and normalized matrix calculations.",
      problems: [
        { title: "Subjective Selection", desc: "Buyers are often confused when choosing a motorcycle based on intuition without considering complex parameters." },
        { title: "Multi-Criteria Complexity", desc: "Difficulty in simultaneously comparing price, mileage, year, engine capacity, and physical condition." },
        { title: "Data Transparency", desc: "Lack of a system that can present objective and transparent decision logic to users." }
      ],
      metrics: [
        { label: "Data Evaluated" }, { label: "Decision Criteria" }, { label: "Calculation Accuracy" },
        { label: "Admin Modules" }, { label: "Response Time" }, { label: "Uptime" }
      ],
      phases: [
        { title: "1. Criteria & Weighting Analysis", roleFocus: "System Analyst", desc: "Analyzed essential parameters in used motorcycle selection. Established 7 criteria (Price, Year, Mileage, CC, Condition, Completeness, Tax) and assigned relative weights.", outputs: ["Criteria & Weight Definition", "Decision Matrix Formulation"] },
        { title: "2. Algorithm Implementation", roleFocus: "Backend Developer", desc: "Implemented the TOPSIS algorithm: normalized matrix, weighted normalized matrix, ideal positive/negative solutions, and preference values.", outputs: ["TOPSIS Algorithm Code", "Calculation Validation"] },
        { title: "3. UI/UX Design & Frontend", roleFocus: "Frontend Developer", desc: "Designed an intuitive interface for users to input preferences and view calculation results transparently.", outputs: ["Interactive Input Form", "Result Dashboard UI"] },
        { title: "4. Testing & Deployment", roleFocus: "QA Analyst", desc: "Verified calculation accuracy against manual computations. Deployed the application and conducted usability testing.", outputs: ["Accuracy Test Report", "Live Deployment"] }
      ]
    }
  },
  fr: {
    cenrana: {
      title: "Système d'Information du Village de Cenrana",
      subtitle: "Plateforme Numérique Intégrée — Aspirations Publiques & Économie Numérique",
      role: "Analyste Commercial & Chef de Projet",
      overview: "Développement d'un Système d'Information Villageois (SID) full-stack intégrant un centre d'information, des services d'aspiration citoyenne et une vitrine d'économie numérique. Construit à partir de zéro (~95% de code personnalisé) avec Next.js 16 et une sécurité multicouche.",
      problems: [
        { title: "Déficit d'Infrastructure", desc: "L'information repose sur des panneaux d'affichage physiques. La distribution prend 3-7 jours." },
        { title: "Aspirations Non Gérées", desc: "Les citoyens expriment leurs plaintes via les réseaux sociaux personnels sans canaux officiels." },
        { title: "Stagnation Économique", desc: "70 entrepreneurs avec une portée marketing limitée à l'environnement local." }
      ],
      metrics: [
        { label: "Succès UAT" }, { label: "Tables de Base de Données" }, { label: "Code Personnalisé" },
        { label: "Modules Admin" }, { label: "Population" }, { label: "Données Gérées" }
      ],
      phases: [
        { title: "1. Analyse des Besoins", roleFocus: "Analyste Commercial", desc: "Entretiens semi-structurés avec les officiels du village. Cartographie du flux de travail manuel et identification de 3 problèmes principaux.", outputs: ["Spécifications des Besoins (SRS)", "Cartographie des Processus", "Cartographie des Parties Prenantes"] },
        { title: "2. Modélisation et Architecture", roleFocus: "Analyste Système", desc: "Conception de l'ERD pour plus de 20 tables et de diagrammes de séquence pour le cryptage NIK et la gestion des plaintes.", outputs: ["Diagramme ERD (20+ Tables)", "Architecture Système Full-Stack", "Séquence de Validation NIK", "Logigramme des Plaintes"] },
        { title: "3. Conception de Prototypes", roleFocus: "UI/UX & Analyste Système", desc: "Conception de Wireframes & Prototypes Haute Fidélité pour 18 modules d'administration. Formulation de la logique de protection de la vie privée.", outputs: ["Wireframes & Prototypes UI", "Spécifications WhatsApp Gateway", "Protocole de Sécurité NIK"] },
        { title: "4. Tests de Faisabilité", roleFocus: "Analyste QA", desc: "Matrice de scénarios UAT et tests de faisabilité avec le personnel du village. Mesure du SUS et audit des performances web.", outputs: ["Rapport de Succès UAT (93.8%)", "Évaluation SUS (75.6)", "Audit de Sécurité Web"] },
        { title: "5. Formation et Remise", roleFocus: "Chef de Projet", desc: "Manuel d'utilisation PDF, socialisation et formation directe, et remise du domaine desacenrana.id.", outputs: ["Manuel d'Utilisation (PDF)", "Certificat de Remise (BAST)", "Lancement Officiel du Domaine"] }
      ]
    },
    topsis: {
      title: "SAD de Sélection de Motos (TOPSIS)",
      subtitle: "Système d'Aide à la Décision Web & Analyse de Critères",
      role: "Analyste Système & Développeur Full-Stack",
      overview: "Développement d'un Système d'Aide à la Décision (SAD) basé sur le web utilisant la méthode TOPSIS pour évaluer objectivement 53 alternatives selon 7 critères complexes.",
      problems: [
        { title: "Sélection Subjective", desc: "Les acheteurs sont souvent confus lors du choix basé sur l'intuition sans tenir compte de paramètres complexes." },
        { title: "Complexité Multi-Critères", desc: "Difficulté à comparer simultanément le prix, le kilométrage, l'année, la capacité du moteur et l'état." },
        { title: "Transparence des Données", desc: "Absence d'un système pouvant présenter une logique de décision objective aux utilisateurs." }
      ],
      metrics: [
        { label: "Données Évaluées" }, { label: "Critères de Décision" }, { label: "Précision de Calcul" },
        { label: "Modules Admin" }, { label: "Temps de Réponse" }, { label: "Disponibilité" }
      ],
      phases: [
        { title: "1. Analyse des Critères", roleFocus: "Analyste Système", desc: "Analyse des paramètres essentiels. Établissement de 7 critères et attribution de poids relatifs.", outputs: ["Définition des Critères & Poids", "Formulation de la Matrice"] },
        { title: "2. Implémentation", roleFocus: "Développeur Backend", desc: "Implémentation de l'algorithme TOPSIS : matrice normalisée, solutions idéales, et valeurs de préférence.", outputs: ["Code de l'Algorithme TOPSIS", "Validation des Calculs"] },
        { title: "3. Conception UI/UX", roleFocus: "Développeur Frontend", desc: "Conception d'une interface intuitive pour saisir les préférences et afficher les résultats de manière transparente.", outputs: ["Formulaire Interactif", "UI du Tableau de Bord"] },
        { title: "4. Tests et Déploiement", roleFocus: "Analyste QA", desc: "Vérification de la précision des calculs. Déploiement de l'application et tests d'utilisabilité.", outputs: ["Rapport de Précision", "Déploiement en Direct"] }
      ]
    }
  },
  es: {
    cenrana: {
      title: "Sistema de Información del Pueblo de Cenrana",
      subtitle: "Plataforma Digital Integrada — Aspiraciones y Economía",
      role: "Analista de Negocios y Líder de Proyecto",
      overview: "Desarrollo de un Sistema de Información (SID) que integra un centro de información, servicios de aspiración ciudadana y economía digital. Construido desde cero (~95% código personalizado) usando Next.js 16 con seguridad multicapa.",
      problems: [
        { title: "Brecha de Infraestructura", desc: "La información depende de tablones de anuncios físicos. La distribución tarda de 3 a 7 días." },
        { title: "Aspiraciones No Gestionadas", desc: "Los ciudadanos expresan quejas a través de redes sociales personales sin canales oficiales." },
        { title: "Estancamiento Económico", desc: "70 emprendedores con un alcance de marketing limitado al entorno local." }
      ],
      metrics: [
        { label: "Éxito UAT" }, { label: "Tablas Base Datos" }, { label: "Código Personalizado" },
        { label: "Módulos Admin" }, { label: "Población" }, { label: "Datos Gestionados" }
      ],
      phases: [
        { title: "1. Análisis de Necesidades", roleFocus: "Analista de Negocios", desc: "Entrevistas para extraer necesidades operativas. Mapeo del flujo de trabajo e identificación de 3 problemas principales.", outputs: ["Especificación de Requisitos (SRS)", "Mapeo de Procesos As-Is/To-Be", "Mapeo de Interesados"] },
        { title: "2. Modelado y Arquitectura", roleFocus: "Analista de Sistemas", desc: "Diseño de ERD para más de 20 tablas y diagramas de secuencia para encriptación NIK y manejo de quejas.", outputs: ["Diagrama ERD (20+ Tablas)", "Arquitectura Full-Stack", "Secuencia de Validación NIK", "Diagrama de Flujo de Quejas"] },
        { title: "3. Diseño de Prototipos", roleFocus: "UI/UX & Analista", desc: "Diseño de Wireframes y Prototipos para 18 módulos de administración. Formulación de lógica de protección de privacidad.", outputs: ["Prototipos UI Alta Fidelidad", "Flujo de Negocios WhatsApp", "Protocolo de Seguridad NIK"] },
        { title: "4. Pruebas de Viabilidad", roleFocus: "Analista QA", desc: "Pruebas UAT y de viabilidad con el personal del pueblo. Medición de SUS y auditoría de rendimiento web.", outputs: ["Reporte de Éxito UAT (93.8%)", "Evaluación SUS (75.6)", "Auditoría de Seguridad Web"] },
        { title: "5. Capacitación y Entrega", roleFocus: "Líder de Proyecto", desc: "Manual de usuario PDF, socialización y capacitación directa, y entrega del dominio desacenrana.id.", outputs: ["Manual de Usuario (PDF)", "Certificado de Entrega (BAST)", "Lanzamiento del Dominio"] }
      ]
    },
    topsis: {
      title: "SAD de Selección de Motocicletas (TOPSIS)",
      subtitle: "Sistema de Apoyo a Decisiones Web y Análisis de Criterios",
      role: "Analista de Sistemas y Desarrollador Full-Stack",
      overview: "Desarrollo de un Sistema de Apoyo a Decisiones (SAD) basado en web utilizando el método TOPSIS para evaluar objetivamente 53 alternativas frente a 7 criterios complejos.",
      problems: [
        { title: "Selección Subjetiva", desc: "Los compradores a menudo se confunden al elegir basándose en la intuición sin considerar parámetros complejos." },
        { title: "Complejidad Multicriterio", desc: "Dificultad para comparar simultáneamente precio, kilometraje, año, cilindrada y condición." },
        { title: "Transparencia de Datos", desc: "Falta de un sistema que pueda presentar lógica de decisión objetiva a los usuarios." }
      ],
      metrics: [
        { label: "Datos Evaluados" }, { label: "Criterios de Decisión" }, { label: "Precisión de Cálculo" },
        { label: "Módulos Admin" }, { label: "Tiempo de Respuesta" }, { label: "Disponibilidad" }
      ],
      phases: [
        { title: "1. Análisis de Criterios", roleFocus: "Analista de Sistemas", desc: "Análisis de parámetros esenciales. Establecimiento de 7 criterios y asignación de pesos relativos.", outputs: ["Definición de Criterios y Pesos", "Formulación de Matriz"] },
        { title: "2. Implementación", roleFocus: "Desarrollador Backend", desc: "Implementación del algoritmo TOPSIS: matriz normalizada, soluciones ideales y valores de preferencia.", outputs: ["Código Algoritmo TOPSIS", "Validación de Cálculos"] },
        { title: "3. Diseño UI/UX", roleFocus: "Desarrollador Frontend", desc: "Diseño de interfaz intuitiva para ingresar preferencias y ver resultados de forma transparente.", outputs: ["Formulario Interactivo", "UI de Panel de Resultados"] },
        { title: "4. Pruebas y Despliegue", roleFocus: "Analista QA", desc: "Verificación de la precisión de los cálculos. Despliegue de la aplicación y pruebas de usabilidad.", outputs: ["Reporte de Precisión", "Despliegue en Vivo"] }
      ]
    }
  },
  de: {
    cenrana: {
      title: "Cenrana Dorf-Informationssystem",
      subtitle: "Integrierte digitale Dorfplattform — Öffentliche Bestrebungen & digitale Wirtschaft",
      role: "Business Analyst & Projektleiter",
      overview: "Entwicklung eines Full-Stack-Dorf-Informationssystems (SID), das ein Informationszentrum, Dienstleistungen für Bürgeranliegen und eine digitale Wirtschaft integriert. Von Grund auf neu erstellt (~95% benutzerdefinierter Code) mit Next.js 16 und mehrschichtiger Sicherheit.",
      problems: [
        { title: "Infrastrukturlücke", desc: "Informationen stützen sich auf physische Pinnwände. Die Verteilung dauert 3-7 Tage." },
        { title: "Unverwaltete Anliegen", desc: "Bürger äußern Beschwerden über persönliche soziale Medien ohne offizielle Kanäle." },
        { title: "Wirtschaftliche Stagnation", desc: "70 Unternehmer mit auf die lokale Umgebung beschränkter Marketingreichweite." }
      ],
      metrics: [
        { label: "UAT-Erfolg" }, { label: "Datenbanktabellen" }, { label: "Eigener Code" },
        { label: "Admin-Module" }, { label: "Bevölkerung" }, { label: "Verwaltete Daten" }
      ],
      phases: [
        { title: "1. Bedarfsanalyse", roleFocus: "Business Analyst", desc: "Interviews zur Ermittlung des operativen Bedarfs. Kartierung des manuellen Workflows und Identifizierung von 3 Hauptproblemen.", outputs: ["Anforderungsspezifikation (SRS)", "As-Is/To-Be Prozess-Mapping", "Stakeholder-Mapping"] },
        { title: "2. Systemmodellierung", roleFocus: "Systemanalytiker", desc: "Entwurf eines ERD für über 20 Tabellen und Sequenzdiagramme für NIK-Verschlüsselung und Beschwerdemanagement.", outputs: ["ERD-Diagramm (20+ Tablas)", "Full-Stack Systemarchitektur", "NIK-Validierungssequenz", "Beschwerde-Flussdiagramm"] },
        { title: "3. Prototyp-Design", roleFocus: "UI/UX & Systemanalytiker", desc: "Entwurf von Wireframes und Prototypen für 18 Admin-Module. Formulierung der Datenschutzlogik.", outputs: ["High-Fidelity UI-Prototyp", "WhatsApp Gateway Business Flow", "NIK Datensicherheitsprotokoll"] },
        { title: "4. Machbarkeitstests (UAT)", roleFocus: "QA Analyst", desc: "UAT- und Machbarkeitstests mit Dorfpersonal. Messung von SUS und Web-Performance-Audit.", outputs: ["UAT-Erfolgsbericht (93.8%)", "SUS-Bewertung (75.6)", "Web Security Audit"] },
        { title: "5. Schulung & Übergabe", roleFocus: "Projektleiter", desc: "PDF-Benutzerhandbuch, Sozialisierung und direkte Schulung sowie Übergabe der Domain desacenrana.id.", outputs: ["Benutzerhandbuch (PDF)", "Übergabezertifikat (BAST)", "Offizieller Start der Domain"] }
      ]
    },
    topsis: {
      title: "Motorrad-Auswahl DSS (TOPSIS)",
      subtitle: "Webbasiertes Entscheidungsunterstützungssystem & Kriterienanalyse",
      role: "Systemanalytiker & Full-Stack-Entwickler",
      overview: "Entwicklung eines webbasierten Entscheidungsunterstützungssystems (DSS) unter Verwendung der TOPSIS-Methode zur objektiven Bewertung von 53 Alternativen anhand von 7 komplexen Kriterien.",
      problems: [
        { title: "Subjektive Auswahl", desc: "Käufer sind oft verwirrt, wenn sie basierend auf Intuition ohne Berücksichtigung komplexer Parameter wählen." },
        { title: "Multikriterien-Komplexität", desc: "Schwierigkeit beim gleichzeitigen Vergleich von Preis, Laufleistung, Jahr, Hubraum und Zustand." },
        { title: "Daten-Transparenz", desc: "Fehlen eines Systems, das den Benutzern eine objektive Entscheidungslogik präsentieren kann." }
      ],
      metrics: [
        { label: "Bewertete Daten" }, { label: "Entscheidungskriterien" }, { label: "Berechnungsgenauigkeit" },
        { label: "Admin-Module" }, { label: "Reaktionszeit" }, { label: "Verfügbarkeit" }
      ],
      phases: [
        { title: "1. Kriterienanalyse", roleFocus: "Systemanalytiker", desc: "Analyse wesentlicher Parameter. Festlegung von 7 Kriterien und Zuweisung relativer Gewichtungen.", outputs: ["Definition von Kriterien & Gewichten", "Matrix-Formulierung"] },
        { title: "2. Implementierung", roleFocus: "Backend-Entwickler", desc: "Implementierung des TOPSIS-Algorithmus: normalisierte Matrix, ideale Lösungen und Präferenzwerte.", outputs: ["TOPSIS Algorithmus Code", "Berechnungsvalidierung"] },
        { title: "3. UI/UX-Design", roleFocus: "Frontend-Entwickler", desc: "Entwurf einer intuitiven Oberfläche zur Eingabe von Präferenzen und zur transparenten Anzeige von Ergebnissen.", outputs: ["Interaktives Formular", "Dashboard-UI"] },
        { title: "4. Testen & Bereitstellung", roleFocus: "QA Analyst", desc: "Überprüfung der Berechnungsgenauigkeit. Bereitstellung der Anwendung und Usability-Tests.", outputs: ["Genauigkeitsbericht", "Live-Bereitstellung"] }
      ]
    }
  },
  zh: {
    cenrana: {
      title: "Cenrana 村庄信息系统",
      subtitle: "综合数字村庄平台 — 公众愿望与数字经济",
      role: "业务分析师与项目负责人",
      overview: "开发了一个全栈村庄信息系统 (SID)，整合了信息中心、公民意愿服务和数字经济店面。使用 Next.js 16 从零开始构建（~95% 定制代码），并具有多层安全性。",
      problems: [
        { title: "基础设施差距", desc: "村庄信息仍依赖于物理公告栏。信息分发需要 3-7 天。" },
        { title: "愿望未被管理", desc: "公民通过个人社交媒体表达投诉，没有官方渠道，难以跟进。" },
        { title: "中小微企业经济停滞", desc: "70 名企业家的营销范围仅限于当地环境。" }
      ],
      metrics: [
        { label: "UAT 成功率" }, { label: "数据库表" }, { label: "定制代码" },
        { label: "管理模块" }, { label: "村庄人口" }, { label: "管理数据" }
      ],
      phases: [
        { title: "1. 业务需求分析", roleFocus: "业务分析师", desc: "与村干部进行半结构化访谈以提取运营需求。绘制手动工作流程并确定了3个主要问题。", outputs: ["需求规格说明书 (SRS)", "流程映射", "利益相关者映射"] },
        { title: "2. 系统建模与架构", roleFocus: "系统分析师", desc: "将业务需求转化为可执行的技术蓝图。为 20 多个表设计了 ERD，并为 NIK 加密和投诉处理设计了序列图。", outputs: ["实体关系图 (20+ 表)", "全栈系统架构蓝图", "NIK 验证序列图", "投诉处理流程图"] },
        { title: "3. 原型设计与业务逻辑", roleFocus: "UI/UX & 系统分析师", desc: "为 18 个管理模块设计了线框图和高保真原型。制定了公民隐私保护逻辑和 WhatsApp 相关的业务流程。", outputs: ["高保真 UI 原型", "WhatsApp 网关业务流程", "加密的 NIK 数据安全协议"] },
        { title: "4. 可行性测试 (UAT & QA)", roleFocus: "QA 分析师", desc: "编写 UAT 场景矩阵，并与村干部进行可行性测试。测量了 SUS 并审核了网络性能。", outputs: ["UAT 成功报告 (93.8%)", "SUS 评估 (75.6)", "网络安全审计"] },
        { title: "5. 培训与移交", roleFocus: "项目负责人", desc: "起草 PDF 系统用户手册，进行后台操作培训，并移交 desacenrana.id 域名。", outputs: ["系统用户手册 (PDF)", "系统移交证书", "域名的正式启用"] }
      ]
    },
    topsis: {
      title: "二手摩托车选择 DSS (TOPSIS)",
      subtitle: "基于 Web 的决策支持系统与标准分析",
      role: "系统分析师与全栈开发人员",
      overview: "使用 TOPSIS 方法开发了一个基于 Web 的决策支持系统 (DSS)，以针对 7 个复杂标准客观评估 53 个备选方案。",
      problems: [
        { title: "主观选择", desc: "买家通常在基于直觉进行选择时感到困惑，而不考虑复杂的参数。" },
        { title: "多标准复杂性", desc: "难以同时比较价格、里程、年份、发动机排量和车况。" },
        { title: "数据透明度", desc: "缺乏一个可以向用户展示客观决策逻辑的系统。" }
      ],
      metrics: [
        { label: "评估的数据" }, { label: "决策标准" }, { label: "计算精度" },
        { label: "管理模块" }, { label: "响应时间" }, { label: "正常运行时间" }
      ],
      phases: [
        { title: "1. 标准与权重分析", roleFocus: "系统分析师", desc: "分析基本参数。确定 7 个标准并分配相对权重。", outputs: ["标准与权重定义", "决策矩阵形成"] },
        { title: "2. 算法实现", roleFocus: "后端开发人员", desc: "实现 TOPSIS 算法：归一化矩阵、理想解和偏好值。", outputs: ["TOPSIS 算法代码", "计算验证"] },
        { title: "3. UI/UX 设计", roleFocus: "前端开发人员", desc: "设计直观的界面供用户输入偏好并透明地查看结果。", outputs: ["交互式表单", "结果仪表板 UI"] },
        { title: "4. 测试与部署", roleFocus: "QA 分析师", desc: "验证计算准确性。部署应用程序并进行可用性测试。", outputs: ["准确性测试报告", "实时部署"] }
      ]
    }
  },
  ja: {
    cenrana: {
      title: "Cenrana 村情報システム",
      subtitle: "統合デジタル村プラットフォーム — 公共の願望とデジタル経済",
      role: "ビジネスアナリスト & プロジェクトリーダー",
      overview: "情報センター、市民の願望サービス、およびデジタル経済ストアフロントを統合するフルスタック村情報システム（SID）を開発。Next.js 16 を使用してゼロから構築（〜95% カスタムコード）。",
      problems: [
        { title: "インフラのギャップ", desc: "村の情報は物理的な掲示板に依存しています。情報の配布には3〜7日かかります。" },
        { title: "管理されていない願望", desc: "市民は公式のチャンネルを持たずに個人のSNSを通じて苦情を表明します。" },
        { title: "中小企業の経済停滞", desc: "ローカル環境に限定されたマーケティングリーチを持つ70人の起業家。" }
      ],
      metrics: [
        { label: "UATの成功" }, { label: "データベーステーブル" }, { label: "カスタムコード" },
        { label: "管理モジュール" }, { label: "村の人口" }, { label: "管理データ" }
      ],
      phases: [
        { title: "1. ビジネスニーズ分析", roleFocus: "ビジネスアナリスト", desc: "村の役人にインタビューを行い、運用ニーズを抽出しました。手動のワークフローをマッピングし、3つの主要な問題を特定しました。", outputs: ["要件仕様書 (SRS)", "プロセス・マッピング", "ステークホルダー・マッピング"] },
        { title: "2. システムモデリング", roleFocus: "システムアナリスト", desc: "ビジネスニーズを実行可能な技術的青写真に変換しました。20以上のテーブルのERDと、NIK暗号化のシーケンス図を設計。", outputs: ["ERD (20+ テーブル)", "フルスタックシステムアーキテクチャ", "NIK検証シーケンス図", "苦情処理フローチャート"] },
        { title: "3. プロトタイプデザイン", roleFocus: "UI/UX & システムアナリスト", desc: "18の管理モジュールとパブリックポータルのワイヤーフレームとプロトタイプを設計。市民のプライバシー保護論理を策定。", outputs: ["高忠実度UIプロトタイプ", "WhatsAppゲートウェイビジネスフロー", "暗号化NIKデータセキュリティ"] },
        { title: "4. 実行可能性テスト", roleFocus: "QAアナリスト", desc: "UATシナリオを作成し、村の役員と実現可能性テストを実施。SUSを測定し、Webパフォーマンスを監査。", outputs: ["UAT成功レポート (93.8%)", "SUS評価 (75.6)", "Webセキュリティ監査"] },
        { title: "5. トレーニングと引き継ぎ", roleFocus: "プロジェクトリーダー", desc: "PDFシステムユーザーマニュアルの作成、管理者向け操作トレーニング、および desacenrana.id ドメインの引き継ぎ。", outputs: ["システムユーザーマニュアル", "システム引き継ぎ証明書", "ドメインの公式立ち上げ"] }
      ]
    },
    topsis: {
      title: "中古バイク選択 DSS (TOPSIS)",
      subtitle: "Webベースの意思決定支援システムと基準分析",
      role: "システムアナリスト & フルスタック開発者",
      overview: "TOPSIS法を使用して、7つの複雑な基準に対して53の代替案を客観的に評価するWebベースの意思決定支援システム（DSS）を開発。",
      problems: [
        { title: "主観的な選択", desc: "バイヤーは複雑なパラメーターを考慮せずに直感に基づいて選択する際にしばしば混乱します。" },
        { title: "多基準の複雑さ", desc: "価格、走行距離、年式、排気量、状態を同時に比較することの難しさ。" },
        { title: "データの透明性", desc: "ユーザーに客観的な決定論理を提示できるシステムがありません。" }
      ],
      metrics: [
        { label: "評価データ" }, { label: "決定基準" }, { label: "計算精度" },
        { label: "管理モジュール" }, { label: "応答時間" }, { label: "稼働率" }
      ],
      phases: [
        { title: "1. 基準分析", roleFocus: "システムアナリスト", desc: "必須パラメータの分析。7つの基準を確立し、相対的な重みを割り当てました。", outputs: ["基準と重みの定義", "決定マトリックスの形成"] },
        { title: "2. アルゴリズムの実装", roleFocus: "バックエンド開発者", desc: "TOPSISアルゴリズムの実装：正規化行列、理想解、および選好値。", outputs: ["TOPSISアルゴリズムコード", "計算の検証"] },
        { title: "3. UI/UXデザイン", roleFocus: "フロントエンド開発者", desc: "ユーザーが好みを入力し、結果を透過的に表示するための直感的なインターフェースを設計。", outputs: ["インタラクティブフォーム", "ダッシュボードUI"] },
        { title: "4. テストとデプロイ", roleFocus: "QAアナリスト", desc: "計算の正確性を検証。アプリケーションをデプロイし、ユーザビリティテストを実施。", outputs: ["精度テストレポート", "ライブデプロイ"] }
      ]
    }
  },
  ar: {
    cenrana: {
      title: "نظام معلومات قرية Cenrana",
      subtitle: "منصة قرية رقمية متكاملة — التطلعات العامة والاقتصاد الرقمي",
      role: "محلل أعمال ورئيس مشروع",
      overview: "تطوير نظام معلومات قرية (SID) متكامل يجمع بين مركز المعلومات وخدمات شكاوى المواطنين وواجهة الاقتصاد الرقمي. تم بناؤه من الصفر باستخدام Next.js 16.",
      problems: [
        { title: "فجوة البنية التحتية", desc: "لا تزال معلومات القرية تعتمد على لوحات الإعلانات المادية. يستغرق توزيع المعلومات من 3-7 أيام." },
        { title: "تطلعات غير مدارة", desc: "يعبر المواطنون عن شكاواهم عبر وسائل التواصل الاجتماعي دون قنوات رسمية." },
        { title: "ركود اقتصادي للمشاريع الصغيرة", desc: "70 رائد أعمال بمدى تسويقي يقتصر على البيئة المحلية." }
      ],
      metrics: [
        { label: "نجاح UAT" }, { label: "جداول قواعد البيانات" }, { label: "كود مخصص" },
        { label: "وحدات الإدارة" }, { label: "عدد سكان القرية" }, { label: "البيانات المدارة" }
      ],
      phases: [
        { title: "1. تحليل احتياجات الأعمال", roleFocus: "محلل أعمال", desc: "مقابلات لاستخراج الاحتياجات التشغيلية. وتحديد 3 مشاكل رئيسية.", outputs: ["مواصفات متطلبات النظام (SRS)", "تخطيط العمليات", "تخطيط أصحاب المصلحة"] },
        { title: "2. نمذجة النظام وبنيته", roleFocus: "محلل نظم", desc: "تصميم ERD لأكثر من 20 جدولًا، ومخططات تسلسلية لتشفير NIK.", outputs: ["مخطط ERD (20+ جدول)", "بنية النظام المتكاملة", "مخطط تسلسل التحقق من NIK", "مخطط انسيابي للشكاوى"] },
        { title: "3. تصميم النموذج المبدئي", roleFocus: "محلل UI/UX", desc: "تصميم نماذج مبدئية لـ 18 وحدة إدارة. صياغة منطق حماية الخصوصية.", outputs: ["النموذج المبدئي لواجهة المستخدم", "تدفق أعمال بوابة WhatsApp", "بروتوكول أمان بيانات NIK"] },
        { title: "4. اختبار الجدوى (UAT)", roleFocus: "محلل ضمان الجودة", desc: "اختبار الجدوى مع موظفي القرية. قياس SUS وتدقيق أداء الويب.", outputs: ["تقرير نجاح UAT (93.8%)", "تقييم مقياس قابلية الاستخدام", "تدقيق أمن الويب"] },
        { title: "5. التدريب والتسليم", roleFocus: "رئيس المشروع", desc: "دليل مستخدم PDF، تدريب على تشغيل لوحة الإدارة، وتسليم النطاق.", outputs: ["دليل المستخدم (PDF)", "شهادة تسليم النظام", "الإطلاق الرسمي للنطاق"] }
      ]
    },
    topsis: {
      title: "نظام دعم قرار اختيار الدراجات النارية (TOPSIS)",
      subtitle: "نظام دعم القرار المستند إلى الويب وتحليل المعايير",
      role: "محلل نظم ومطور",
      overview: "تطوير نظام دعم القرار (DSS) المستند إلى الويب باستخدام طريقة TOPSIS لتقييم 53 بديلاً بشكل موضوعي مقابل 7 معايير معقدة.",
      problems: [
        { title: "اختيار شخصي", desc: "غالبًا ما يرتبك المشترون عند الاختيار بناءً على الحدس." },
        { title: "تعقيد متعدد المعايير", desc: "صعوبة مقارنة السعر، الأميال، السنة، السعة، والحالة في نفس الوقت." },
        { title: "شفافية البيانات", desc: "عدم وجود نظام يمكنه تقديم منطق قرار موضوعي للمستخدمين." }
      ],
      metrics: [
        { label: "البيانات المقيمة" }, { label: "معايير القرار" }, { label: "دقة الحساب" },
        { label: "وحدات الإدارة" }, { label: "وقت الاستجابة" }, { label: "وقت التشغيل" }
      ],
      phases: [
        { title: "1. تحليل المعايير", roleFocus: "محلل نظم", desc: "تحليل المعلمات الأساسية. تحديد 7 معايير وتعيين أوزان نسبية.", outputs: ["تعريف المعايير والأوزان", "تكوين مصفوفة القرار"] },
        { title: "2. تنفيذ الخوارزمية", roleFocus: "مطور خلفي", desc: "تنفيذ خوارزمية TOPSIS: المصفوفة المعيارية، الحلول المثالية، وقيم التفضيل.", outputs: ["كود خوارزمية TOPSIS", "التحقق من صحة الحساب"] },
        { title: "3. تصميم UI/UX", roleFocus: "مطور واجهة أمامية", desc: "تصميم واجهة تفاعلية لإدخال التفضيلات وعرض النتائج بشفافية.", outputs: ["نموذج تفاعلي", "واجهة لوحة النتائج"] },
        { title: "4. الاختبار والنشر", roleFocus: "محلل ضمان الجودة", desc: "التحقق من دقة الحسابات. نشر التطبيق وإجراء اختبارات سهولة الاستخدام.", outputs: ["تقرير اختبار الدقة", "النشر المباشر"] }
      ]
    }
  }
};
