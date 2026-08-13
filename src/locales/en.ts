import { extendedData } from "./extendedData";
import { Dictionary } from "./types";

export const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    subtitle: "Fresh Graduate | IT BA & PM Track",
    typewriter: [
      "IT Business Analyst & Project Coordinator",
      "Data-Driven Problem Solver",
      "End-to-End SDLC",
      "Digital Transformation"
    ],
    description: "Bridging business needs with precise technological solutions. Experienced in orchestrating the software development life cycle (SDLC), business process analysis, and data management to deliver measurable digital impact.",
  },
  about: {
    sectionTitle: "Get To Know Me",
    greeting: "Hello! I am an Information Systems and Technology graduate with Cumlaude honors (GPA 3.93/4.00). I have a deep interest in the intersection of business, data, and technology. For me, technology is not just lines of code, but a tool to simplify processes and solve real-world problems.",
    p1: "Hello! I am an Information Systems and Technology graduate with Cumlaude honors (GPA 3.93/4.00). I have a deep interest in the intersection of business, data, and technology. For me, technology is not just lines of code, but a tool to simplify processes and solve real-world problems.",
    p2: "I am an adaptive individual, highly meticulous with details, and love taking the initiative—traits I continue to hone through various experiences leading organizations and digital projects. I thoroughly enjoy the process of unraveling the complexity of a problem, understanding it from the user's perspective, and crafting it into an elegant and targeted solution.",
    viewWork: "View Work",
    downloadCV: "Download CV",
    contactMe: "Contact Me",
  },
  skills: {
    sectionTitle: "EXPERIENCE & FOCUS",
    subtitle: "Core Skills.",
    description: "Interests and experience in several mutually supportive areas in digital solution development, from analysis to implementation.",
    viewDetail: "View Details",
    focusArea: "Focus Area & Technologies",
    items: [
      {
        id: "01",
        title: "System & Business Process Analysis",
        desc: "Every good solution starts with a proper understanding of the problem. I am accustomed to extracting user needs (requirement gathering), structuring workflows, mapping business processes, and designing the most effective approach before development begins."
      },
      {
        id: "02",
        title: "Data Management & Validation",
        desc: "Ensuring data integrity and quality for operational needs. Experienced in validating thousands of data points, organizing complex datasets, and digitizing documents to be structured and ready to support decision-making."
      },
      {
        id: "03",
        title: "Software Development Life Cycle (SDLC)",
        desc: "Overseeing the software development cycle end-to-end. Ensuring the system or website built not only works technically but also answers end-user needs and achieves targeted success metrics."
      },
      {
        id: "04",
        title: "Project Coordination & Leadership",
        desc: "Acting as a bridge between business needs (non-technical) and the development team (technical). Accustomed to leading teams, setting project priorities, and maintaining communication among stakeholders to ensure projects are completed on time and meet expectations."
      },
      {
        id: "05",
        title: "Visual Communication & Prototyping",
        desc: "Translating ideas and system needs into easily understood visual designs. From wireframing, basic interface prototyping, to creating digital communication materials that support project branding."
      },
      {
        id: "06",
        title: "AI-Assisted Development",
        desc: "Utilizing Artificial Intelligence technology (Prompt Engineering) to accelerate the research process, structure documentation frameworks, and explore solutions to improve development productivity."
      }
    ]
  },
  experience: {
    sectionTitle: "TRACK RECORD",
    subtitle: "Experience & Journey.",
    description: "Weaving a journey from organizational leadership to professional roles, combining managerial and technical skills in every step.",
    categories: ["All", "Professional", "Projects", "Design & Creative", "Organization"],
    highlightsTitle: "Profile Highlights",
    highlightsSectionTitle: "Impact & Achievements",
    highlightsSectionDesc: "Not just a list of experiences, but a tangible track record of real impact delivered for institutions, the public, and team collaborations.",
    viewDetails: "View Details",
    proofTitle: "Validation Proof (Proof of Work)",
    highlights: [
      { title: "Best Graduate & Valedictorian (GPA 3.93)", desc: "As a Fresh Graduate, proven to have a solid academic foundation and problem-solving logic with Cumlaude honors and Best Graduate of the Faculty of Industrial Technology." },
      { title: "High Acceptance Score (UAT 93.8%)", desc: "Guarded the development of an information system truly accepted by real users, evidenced by a User Acceptance Test score of 93.8%." },
      { title: "Efficient Solution Delivery (Live in 3 Months)", desc: "Demonstrated agility in orchestrating projects from requirement analysis to system release (live) in a short time." },
      { title: "AI-Assisted Development Implementation", desc: "Experienced in acting as a logic orchestrator utilizing Artificial Intelligence tools to accelerate the system development life cycle (SDLC)." },
      { title: "Large-Scale Validation (5,000+ Data)", desc: "Proved high-level meticulousness and readiness in maintaining the integrity of thousands of crucial data points for enterprise-scale public agency needs." },
      { title: "Security & Privacy Standards (NIK)", desc: "Prioritizes user ethics and confidentiality in system design, including the application of encryption for the security of population data integration." },
      { title: "Cross-Sector Collaboration", desc: "Adaptive and flexible working with various entity cultures: Village Government, Ministries (Kemenkeu, KKP), to State-Owned Enterprises (BUMN)." },
      { title: "Communication & Visual Management", desc: "Possesses honed public communication and visual branding skills through roles in the Public Relations sub-division and organizational leadership." }
    ],
    items: [
      {
        role: "System Analyst & DSS Developer",
        company: "Freelance / Independent Project",
        date: "Apr 2026 – Jun 2026",
        description: "Developed a web-based Decision Support System (DSS) using the TOPSIS method. Analyzed user requirements, validated decision variables, and structured functional system documentation.",
        activities: [
          "Analyzed requirements & decision variables.",
          "Developed TOPSIS method DSS.",
          "Structured functional system documentation."
        ],
        label: "Freelance"
      },
      {
        role: "Business Analyst & Project Lead",
        company: "Cenrana Village Integrated System",
        date: "Jul 2025 – Apr 2026",
        description: "Led the end-to-end software development life cycle (SDLC) for the village digital platform. Extracted requirements directly from village officials and translated them into a web solution achieving a 93.8% UAT success rate.",
        activities: [
          "Led end-to-end SDLC for village digital platform.",
          "Conducted requirement gathering & UI prototyping.",
          "Executed User Acceptance Testing (UAT)."
        ],
        label: "Main Project"
      },
      {
        role: "System Analyst & Software Developer Intern",
        company: "Customs & Excise Sulbagsel (Ministry of Finance RI)",
        date: "Mar 2025 – Jul 2025",
        description: "Underwent job rotation across 5 strategic divisions. Developed SIMIRA prototype (Household Management Information System) based on PHP Laravel & MySQL, analyzed objection/appeal complaint systems, and executed daily news media monitoring (NALIKA).",
        activities: [
          "Developed SIMIRA application (Laravel & MySQL) for agency warehouse inventory.",
          "Executed NALIKA (Media Monitoring) & customs daily news analysis.",
          "Cross-checked & entered employee data in General Affairs Division.",
          "Identified workflows in Enforcement, Investigation & Internal Compliance divisions."
        ],
        label: "Ministry Internship"
      },
      {
        role: "Data Analyst & Account Representative Specialist",
        company: "BPJS Ketenagakerjaan Makassar Branch",
        date: "Oct 2024 – Jan 2025",
        description: "Managed membership acquisition & administration. Validated the integrity of >5,000 IGI Quality data entries, automated contribution/arrears collection via WA Blasting, and verified company integration data from the OSS portal (Online Single Submission).",
        activities: [
          "Validated & corrected IGI data quality (>5,000 membership records).",
          "Operated periodic contribution & arrears collection via WA Blasting & Email.",
          "Verified business entity registrations from Ministry of Investment OSS system.",
          "Conducted field socialization for Informal Worker (BPU) programs."
        ],
        label: "MBKM Program"
      },
      {
        role: "Data Digitalization Support Specialist",
        company: "KUSUKA System KKP (Ministry of Marine Affairs & Fisheries)",
        date: "May 2024 – Jul 2024",
        description: "Managed digitalization, cleaning, and precision verification of >1,000 marine & fisheries business profile data records. Ensured NIK validation and identity verification of aid program recipients integrated seamlessly with public administration SOPs.",
        activities: [
          "Executed cleaning & precision validation of >1,000 fisher/business population data entries.",
          "Verified NIK document authenticity & physical identity of applicants to ministry standards.",
          "Managed mass data entry & data synchronization to the official KUSUKA KKP RI portal."
        ],
        label: "Freelance"
      },
      {
        role: "INFOKOM Division Coordinator & PR Lead",
        company: "Capital Market Lovers Student Activity Unit (ITB Nobel)",
        date: "2023 – 2024",
        description: "Led the Information & Communication Division in controlling digital publications, reputation management, and strategic collaboration with the Indonesia Stock Exchange (IDX) & partner brokerages.",
        activities: [
          "Led & coordinated INFOKOM division team in executing investment education publication campaigns.",
          "Built strategic partnership relationships with external entities, investment galleries, & partner brokerages.",
          "Designed digital communication calendars & controlled organizational visual branding standards."
        ],
        label: "Organization"
      },
      {
        role: "President of Student Executive Board (Ketua OSIS)",
        company: "State Senior High School 2 Enrekang",
        date: "2020 – 2021",
        description: "Led student executive board governance at school/regency level, orchestrated 10 work program sections, and bridged strategic communication between students, school management, and the education department.",
        activities: [
          "Led student executive board & facilitated coordination of 10 work program sections.",
          "Orchestrated regency-level arts, sports, & social action competition events.",
          "Served as official student communication representative to school leadership & external institutions."
        ],
        label: "Organization"
      },
      {
        role: "Graphic & Social Media Designer",
        company: "Capital Market Lovers Student Activity Unit",
        date: "2023 – 2024",
        description: "Designed social media content collections supporting organizational branding and digital publication communications for the 2024-2025 executive period.",
        activities: [
          "Created Instagram Feed & Story content designs.",
          "Managed organizational visual communication assets.",
          "Supported digital publication campaigns."
        ],
        label: "Design"
      },
      {
        role: "Visual Content Creator",
        company: "KKN Post Cenrana Village",
        date: "Jul 2025 – Sep 2025",
        description: "Designed social media content designs supporting publication of activities and work programs for the KKN Post during the community service period in Cenrana Village.",
        activities: [
          "Designed work program publication materials.",
          "Documented community service activities.",
          "Managed daily visual content."
        ],
        label: "Design"
      }
    ]
  },
  portfolio: {
    sectionTitle: "PROJECTS & CASE STUDIES",
    subtitle: "Featured Work.",
    description: "A curated collection of selected projects representing analysis, management, and software development capabilities.",
    viewProject: "View Project",
    projects: [
      {
        title: "Cenrana Village Integrated Management Information System",
        desc: "Village administration digitalization system successfully passing UAT with a 93.8% score. Integrating mail management, public information transparency, and village fund reporting."
      },
      {
        title: "Decision Support System (DSS) TOPSIS Method",
        desc: "Web-based application providing data-driven recommendations using the TOPSIS algorithm."
      }
    ]
  },
  contact: {
    sectionTitle: "GET IN TOUCH",
    subtitle: "Let's Collaborate.",
    description: "Have an idea, project, or collaboration opportunity? Don't hesitate to reach out to me.",
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    messageLabel: "Your Message",
    sendButton: "Send Message",
    mascot: {
      idle: "Click me to start collaborating!",
      email: "Sending an email? Ready to reply quickly!",
      whatsapp: "Prefer a casual chat? Let's connect on WhatsApp!",
      default: "Have an innovative idea? Let me know!"
    }
  },
  footer: {
    copyright: "© 2026 Muhammad Asrauf Mustamin. All Rights Reserved."
  },
  tools: {
    sectionTitle: "TECHNOLOGY & TOOLS",
    title: "Tools I",
    typewriter: ["Use."],
    description: "Various tools I have used throughout project execution — from building this portfolio website to information system development, documentation, and daily productivity."
  },
  cvModal: {
    title: "Select CV Version",
    subtitle: "Please select the Curriculum Vitae version that best fits your requirements or target position.",
    baTitle: "IT Business Analyst",
    baDesc: "Focus on system analysis, requirement gathering, & UAT",
    pmTitle: "Project Manager",
    pmDesc: "Focus on coordination, timeline, & stakeholder management"
  },
  caseStudy: {
    overviewTitle: "Project Overview",
    problemsTitle: "Problems Solved",
    sdlcTitle: "Development Process (SDLC)",
    outputsTitle: "Output / Deliverables",
    focusTitle: "Analysis Focus & Description",
    deliverablesTitle: "Deliverables & Artifacts",
    close: "Close",
    backToPortfolio: "Back to Portfolio",
    viewLiveSite: "Visit Live Website",
    cenrana: {
      title: "Cenrana Village Information System",
      subtitle: "Integrated Village Digital Platform — Public Aspirations & Digital Economy",
      client: "Cenrana Village Government, Maros Regency",
      overview: "Developing a full-stack Village Information System (SID) integrating an information hub, citizen aspiration service, and digital economy showcase (Lapak Warga). Built from scratch (~95% custom code) using Next.js 16, with multi-layered security (SHA-256, AES-256-GCM) and PWA.",
      problems: [
        { title: "Infrastructure Gap", desc: "Village information relied on physical notice boards. Info distribution took 3-7 days." },
        { title: "Unmanaged Aspirations", desc: "Citizens voiced complaints on personal social media without official channels, making follow-ups difficult." },
        { title: "MSME Economic Stagnation", desc: "70 entrepreneurs with marketing reach limited strictly to local areas." }
      ],
      metrics: [
        { label: "UAT SUCCESS", suffix: "%" },
        { label: "DATABASE TABLES", suffix: "+" },
        { label: "CUSTOM CODE", suffix: "%" },
        { label: "ADMIN MODULES", suffix: "" },
        { label: "VILLAGE POPULATION", suffix: " people" },
        { label: "DATA MANAGED", suffix: "+" }
      ],
      phases: [
        {
          title: "1. Business Requirement Analysis",
          period: "October 2025",
          roleFocus: "IT Business Analyst (BA)",
          desc: "Conducting semi-structured interviews with Village Officials (Village Head, Village Secretary, Kaur) to extract operational needs. Mapping manual workflows (As-Is Process) and identifying 3 main problems: delayed physical notice boards, unrecorded citizen complaints, and MSME stagnation.",
          outputs: [
            "System Requirement Specification (SRS) Document",
            "As-Is vs To-Be Process Mapping",
            "Stakeholder Mapping Matrix"
          ]
        },
        {
          title: "2. System Modeling & Architecture",
          period: "November 2025",
          roleFocus: "System Analyst (SA)",
          desc: "Translating business needs into executable technical blueprints. Designing Entity Relationship Diagram (ERD) with 20+ database tables, Use Case Diagrams, and Sequence Diagrams for NIK encryption and complaint handling.",
          outputs: [
            "Entity Relationship Diagram (ERD 20+ Tables)",
            "Full-Stack System Architecture Blueprint",
            "NIK Validation Sequence Diagram (SHA-256)",
            "Complaint & Citizen Service Flowchart"
          ]
        },
        {
          title: "3. Prototype Design & Business Logic",
          period: "Nov 2025 – Jan 2026",
          roleFocus: "UI/UX & System Analyst",
          desc: "Designing Wireframes & High-Fidelity Prototypes for 18 admin modules and public portal. Designing citizen privacy protection logic (SHA-256 NIK Hashing) and WhatsApp Gateway integrated Lapak Warga business flow.",
          outputs: [
            "Wireframe & High-Fidelity UI Prototype",
            "WhatsApp Gateway Business Flow Specifications",
            "Encrypted NIK Data Security Protocol"
          ]
        },
        {
          title: "4. Feasibility Testing (UAT & QA)",
          period: "Feb – Mar 2026",
          roleFocus: "IT BA / QA Analyst",
          desc: "Drafting User Acceptance Testing (UAT) scenario matrix and testing system feasibility directly with village officials and citizen samples. Measuring System Usability Scale (SUS) and auditing web performance.",
          outputs: [
            "UAT Success Matrix & Report (93.8%)",
            "System Usability Scale Evaluation (SUS: 75.6)",
            "Google Lighthouse & Web Security Audit"
          ]
        },
        {
          title: "5. Training & Handover",
          period: "Mar – May 2026",
          roleFocus: "IT Project Lead & BA",
          desc: "Authoring User Manual PDF, conducting direct socialization & admin dashboard operation training for village officials, and official handover of desacenrana.id domain.",
          outputs: [
            "System User Manual (PDF)",
            "Official System Acceptance Report (BAST)",
            "Official Launch of desacenrana.id Domain"
          ]
        }
      ]
    },
    topsis: {
      title: "Makassar Auto: Used Motorcycle DSS",
      subtitle: "Web-Based Decision Support System Using TOPSIS Method",
      client: "Research (3 Used Motorcycle Dealers)",
      overview: "Building a web-based Decision Support System (DSS) for ranking used motorcycles using the TOPSIS algorithm. Processing 7 complex criteria (price, engine, mileage, year, etc.) from 53 real unit data points across 3 dealers in Makassar into objective recommendations for buyers.",
      problems: [
        { title: "Unit Condition Diversity", desc: "Complex variables like mileage, engine condition, and paperwork completeness are hard to compare manually." },
        { title: "Price Information Asymmetry", desc: "Lay buyers often focus only on price and physical appearance, ignoring crucial technical aspects." },
        { title: "Weighting Difficulty", desc: "Buyers struggle to mathematically weight benefit vs cost parameters in a short time." }
      ],
      metrics: [
        { label: "TEST DATA UNITS", suffix: "" },
        { label: "DEALERS INVOLVED", suffix: "" },
        { label: "EVALUATION CRITERIA", suffix: "" },
        { label: "RATING SCALE", suffix: " Pts" }
      ],
      phases: [
        {
          title: "Analysis & Data Collection",
          period: "April 2026",
          desc: "Collecting primary data of 53 used motorcycle units from 3 dealers in Makassar. Formulating 7 technical and economic evaluation criteria.",
          outputs: ["53 Motorcycle Units Dataset", "Initial Decision Matrix", "7 Evaluation Criteria"]
        },
        {
          title: "Weighting & Conversion",
          period: "May 2026",
          desc: "Converting cost criteria such as price and mileage into benefit scale 1-5 for uniform matrix calculation.",
          outputs: ["Cost to Benefit Conversion", "Normalized Matrix", "Positive & Negative Ideal Solutions"]
        },
        {
          title: "Algorithm Implementation",
          period: "May - June 2026",
          desc: "Coding the TOPSIS algorithm calculation step by step, including Euclidean distance and relative closeness score calculation.",
          outputs: ["TOPSIS Calculation Logic", "Ranking Output", "Interactive Web Portal"]
        }
      ]
    }
  },
  journey: {
    triggerText: "Want to see this journey from a different perspective?",
    triggerButton: "Start Virtual Journey",
    greeting: [
      "Hello, welcome.",
      "This is my space of memories and journey.",
      "Every step is a valuable learning process.",
      "Let's take a short walk along this path..."
    ]
  },
  extended: extendedData.en
};