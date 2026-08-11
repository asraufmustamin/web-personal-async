export const ext_es = {
  experienceUI: {
    aboutRole: "Acerca del Rol",
    mainActivities: "Actividades Principales",
    competencies: "Competencias",
    proofAndWorkflow: "Prueba y Flujo de Trabajo (BA & PM)",
    docsAndRealContribution: "Documentación y Resumen de Contribución",
    workflowAndRoleFocus: "Flujo de Trabajo y Enfoque del Rol",
    authenticDocsAndLogs: "Documentación Auténtica y Registros Institucionales",
    detailButton: "Detalles",
    openPortfolioButton: "Abrir Portafolio",
  },
  beaCukaiProof: {
    metrics: ["Rotación de División", "Sistema Desarrollado", "Informe MBKM", "Duración de Rotación"],
    workflow: [
      { phase: "Recolección de Requisitos del Almacén", desc: "Entrevisté a los gerentes de almacén, diseñé la base de datos MySQL y construí el prototipo PHP Laravel.", roleFocus: "Analista de Negocios y Analista de Sistemas" },
      { phase: "Auditoría de Datos de Empleados", desc: "Verificación cruzada de la integridad de los datos de >1,000 empleados de la Oficina Regional de Aduanas de Sulbagsel.", roleFocus: "Analista de Calidad de Datos" },
      { phase: "Monitoreo de Medios y Relaciones Públicas", desc: "Monitoreé noticias aduaneras diarias y diseñé materiales de publicación digital.", roleFocus: "Analista de Medios y Comunicaciones" },
      { phase: "Análisis de Cumplimiento Interno", desc: "Evalué flujos de trabajo de quejas/apelaciones y recolección de datos de bienes incautados.", roleFocus: "Auditor de Cumplimiento y Campo" }
    ],
    proofs: [
      { title: "Desarrollo del Sistema SIMIRA", caption: "Diseñó base de datos MySQL y construyó interfaz web PHP Laravel para registro de inventario de almacén.", tag: "Laravel & MySQL" },
      { title: "Mapeo de Procesos de Negocios", caption: "Mapeó diagramas de flujo de procesos de negocio para diseño de control de acceso basado en roles.", tag: "Análisis de Sistemas" },
      { title: "Validación de Datos de Empleados", caption: "Verificación cruzada de la integridad de miles de datos de empleados usando hojas de cálculo y bases de datos.", tag: "Calidad de Datos" },
      { title: "Análisis del Sistema de Quejas", caption: "Revisó el flujo de manejo de quejas públicas y la gestión de archivos de objeciones aduaneras.", tag: "Análisis de Cumplimiento" },
      { title: "Monitoreo de Medios NALIKA", caption: "Ejecutó el monitoreo diario de noticias aduaneras y diseñó materiales de publicación digital.", tag: "Monitoreo de Medios" },
      { title: "Inventario de Bienes Incautados", caption: "Conteo físico y registro de cigarrillos y alcohol ilegales incautados.", tag: "Auditoría de Campo" },
      { title: "Servicio de Recepción", caption: "Servicio de administración pública y recepción de invitados en la recepción de la Oficina de Aduanas.", tag: "Servicio Público" },
      { title: "Validación del Libro de Registro", caption: "Recapitulación de actividades diarias de pasantía aprobadas y validadas en el portal SIAKAD.", tag: "Validación Académica" }
    ]
  },
  bpjsProof: {
    metrics: ["Integridad de Datos", "Cobro de Contribuciones", "Verificación OSS", "Socialización BPU"],
    workflow: [
      { phase: "Validación y Limpieza de Datos", desc: "Verificó la calidad IGI y corrigió inconsistencias en >5,000 datos de participantes de manera sistemática.", roleFocus: "Analista de Datos" },
      { phase: "Automatización de Cobranza", desc: "Realizó campañas de cobro de contribuciones vía correo electrónico y WA blasting para empresas en mora.", roleFocus: "Representante de Cuenta" },
      { phase: "Sincronización del Portal OSS", desc: "Verificación cruzada de los datos de registro de nuevas entidades comerciales en el portal OSS.", roleFocus: "Soporte de Cumplimiento" },
      { phase: "Educación y Socialización del Programa", desc: "Proporcionó directamente comprensión del programa BPU a los trabajadores del sector informal.", roleFocus: "Relaciones Públicas" }
    ],
    proofs: [
      { title: "Verificación de Calidad IGI", caption: "Revisó anomalías en datos de participantes, números de identidad (NIK) y perfiles en el sistema BPJAMSOSTEK.", tag: "Validación de Datos" },
      { title: "Campaña de Cobro WA Blasting", caption: "Envío automatizado de mensajes de cobro y recordatorios de mora a las empresas.", tag: "Automatización" },
      { title: "Verificación Cruzada del Portal OSS", caption: "Verificó el registro de nuevas empresas integradas del sistema del Ministerio de Inversiones.", tag: "Verificación de Sistemas" },
      { title: "Socialización de Seguridad Social", caption: "Asistencia directa y educación a la comunidad de trabajadores del sector informal.", tag: "Servicio Público" },
      { title: "Resumen de Adquisición de Membresías", caption: "Informe mensual del progreso de adquisición y retención de empresas en la zona de Makassar.", tag: "Informes" },
      { title: "Servicio Integrado BPJS", caption: "Apoyó los servicios administrativos básicos para los participantes y representantes de las empresas.", tag: "Administración" }
    ]
  },
  portfolioList: [
    { title: "Sistema Integrado de Información del Pueblo Cenrana", desc: "Plataforma digital con 3 módulos principales: transparencia presupuestaria, e-Surat y gestión de datos. Tasa de éxito UAT del 93.8%." },
    { title: "Prototipo SIMIRA (Aduanas Sulbagsel)", desc: "Sistema de Información de Gestión de Almacenes y Hogares (PHP Laravel y MySQL) para la Aduana Regional. Diseñó el flujo comercial desde la recopilación de requisitos hasta las funciones de registro de existencias en tiempo real y la autenticación de usuarios." },
    { title: "Sistema de Soporte a la Decisión (Método TOPSIS)", desc: "Sistema de análisis de datos basado en web para optimizar la selección de vehículos usados en función de 7 criterios complejos." },
    { title: "Sistema de Predicción de Graduación", desc: "Modelo de aprendizaje automático basado en Python para predecir la puntualidad de graduación de los estudiantes: analizando datos históricos multivariables con una precisión del 93 % en datos de prueba." },
    { title: "Página de Aterrizaje y Perfil Web", desc: "Páginas promocionales y de marca personal diseñadas con un enfoque visual elegante para transmitir información de manera concisa, clara y atractiva." },
    { title: "Diseño de Feed de Instagram", desc: "Una colección de diseños de redes sociales que apoyan la marca de la organización y las comunicaciones de publicación digital." },
    { title: "Diseño de Redes Sociales KKN", desc: "Una colección de diseños de contenido de redes sociales que apoyan la publicación de actividades y programas de trabajo durante el período de servicio comunitario." },
    { title: "Colaboración Freelance", desc: "Diversas formas de colaboración flexible con particulares y necesidades de proyectos digitales." },
    { title: "Exploración de Otras Soluciones Digitales", desc: "Espacio para obras adicionales y nuevos desarrollos que seguirán creciendo." }
  ],
  projectsList: [
    { title: "Sistema de Información del Pueblo Cenrana", roleAndDate: "Jefe de Proyecto | Nov 2025 – Abr 2026", desc: "Un sitio web del pueblo diseñado para apoyar la información pública, la transparencia presupuestaria y las necesidades digitales.", tags: ["Sitio Web", "Sistema de Información", "E-Surat"] },
    { title: "Sistema Digital de Servicio de Aspiración", roleAndDate: "Coordinador y Desarrollador | Jul 2025 – Sep 2025", desc: "Una plataforma de reporte ciudadano para transmitir quejas o aspiraciones con mayor rapidez y documentación.", tags: ["Servicio de Aspiración", "Reporte Ciudadano", "Servicio Digital"] },
    { title: "Prototipo SIM Doméstico", roleAndDate: "Aduanas Sulbagsel | 2025", desc: "Un prototipo de sistema de información desarrollado para asistir necesidades administrativas internas.", tags: ["Sistema de Administración", "Gestión de Datos", "Prototipo"] },
    { title: "Diseño Visual y Marca", roleAndDate: "Diseño Gráfico", desc: "Creación de contenido para redes sociales, infografías, feeds, Reels y materiales de publicación.", tags: ["Diseño de Feeds", "Infografías", "Canva y Figma"] }
  ],
  blueprintNodes: [
    { title: "Análisis de Negocios y PRD", summary: "Traducción de necesidades ambiguas de las partes interesadas en documentos de especificaciones técnicas (PRD/BRD) y escenarios de prueba UAT." },
    { title: "Integridad y Validación de Datos", summary: "Ejecución de limpieza masiva de datos, cotejo de integridad y archivo digital." },
    { title: "SDLC y Coordinación de Proyectos", summary: "Liderar el ciclo de vida del desarrollo de software desde la planificación hasta el lanzamiento en vivo." },
    { title: "Operaciones de Agente GenAI", summary: "Utilizar IA como agente de trabajo para acelerar la redacción de documentación con validación manual precisa." }
  ],
  cenranaExtended: {
    diagrams: [
      { title: "Arquitectura del Sistema Full-Stack" },
      { title: "Diagrama Entidad-Relación" },
      { title: "Estructura de Base de Datos MySQL" },
      { title: "Almacenamiento en la Nube" },
      { title: "Informe de Evaluación del Sistema" },
      { title: "Infraestructura de Alojamiento" },
      { title: "Diagrama de Secuencia de Validación NIK" },
      { title: "Diagrama de Flujo del Método SDLC" }
    ],
    screenshots: [
      { title: "Página de Inicio Principal", category: "1. Inicio", desc: "Portal de información principal y punto de entrada a los servicios." },
      { title: "Portal de Perfil del Pueblo", category: "2. Perfil del Pueblo", desc: "Información demográfica, territorial y estructura organizativa." },
      { title: "Centro de Información Pública", category: "3. Información", desc: "Portal de transparencia de noticias del pueblo y anuncios oficiales." },
      { title: "Centro de Servicios Digitales", category: "4. Servicios Ciudadanos", desc: "Portal central de acceso a los servicios de autoservicio." },
      { title: "Servicio de Aspiración Ciudadana", category: "4. Servicios Ciudadanos", desc: "Formulario de quejas públicas con protección de encriptación." },
      { title: "Servicio Digital e-Surat", category: "4. Servicios Ciudadanos", desc: "Solicitudes automatizadas de cartas administrativas en línea." },
      { title: "Mercado Ciudadano", category: "4. Servicios Ciudadanos", desc: "Escaparate de marketing digital para las pymes del pueblo." },
      { title: "Panel de Resumen de Administración", category: "5. Panel de Administración", desc: "Resumen estadístico de datos ciudadanos, aspiraciones y actividades." },
      { title: "Panel de Control de Administración", category: "5. Panel de Administración", desc: "Gestión central de 18 módulos operativos del sistema." }
    ],
    fieldPhotos: [
      { title: "Firma de Cooperación", category: "1. Iniciación", desc: "Proceso de firma del documento de cooperación para el desarrollo del sistema." },
      { title: "Acuerdo de Iniciación de Proyecto", category: "1. Iniciación", desc: "Discusión del flujo de iniciación del proyecto y compromiso." },
      { title: "Observación y Análisis de Necesidades", category: "2. Análisis", desc: "Entrevistas directas y observación de los flujos de trabajo manuales." },
      { title: "Implementación de Código", category: "3. Desarrollo", desc: "Desarrollo de código personalizado de 18 módulos y portal público integrado." },
      { title: "Despliegue y Configuración", category: "3. Despliegue", desc: "Configuración del dominio, servidor y encriptación SSL." },
      { title: "Prueba Directa UAT", category: "4. Pruebas UAT", desc: "Prueba directa de escenarios de quejas por una muestra de ciudadanos." },
      { title: "Evaluación UAT y Puntuación SUS", category: "4. Pruebas UAT", desc: "Relleno de cuestionarios de viabilidad del sistema." },
      { title: "Socialización y Formación del Pueblo", category: "5. Formación", desc: "Socialización y formación sobre el funcionamiento independiente del sistema." },
      { title: "Orientación Técnica de Administración", category: "5. Formación", desc: "Formación en profundidad sobre la gestión de los módulos del CMS." },
      { title: "Carta de Aceptación", category: "6. Aceptación", desc: "Documento oficial de declaración de aceptación del sistema." },
      { title: "Entrega Oficial", category: "6. Entrega Oficial", desc: "Entrega simbólica del sistema de información al Jefe del Pueblo." }
    ]
  },
  topsisExtended: {
    diagrams: [
      { title: "Marco Básico del Método de Clasificación" },
      { title: "Flujo de Cálculo TOPSIS" },
      { title: "Visualización de Valores de Peso" },
      { title: "Matriz de Decisión de Normalización" }
    ],
    screenshots: [
      { title: "Portal de Recomendaciones", category: "1. Inicio", desc: "Interfaz pública para que los compradores seleccionen criterios." },
      { title: "Panel de Entrada de Criterios", category: "2. Entrada de Preferencias", desc: "Formulario de ponderación dinámica según las necesidades del usuario." },
      { title: "Resultados del Análisis TOPSIS", category: "3. Salida de Decisión", desc: "Tabla de recomendación de las 5 mejores motos." },
      { title: "Panel de Gestión de Datos", category: "4. Área de Administración", desc: "Módulo para gestionar 53 datos reales de motocicletas." }
    ]
  }
};
