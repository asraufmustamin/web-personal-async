export const ext_de = {
  experienceUI: {
    aboutRole: "Über die Rolle",
    mainActivities: "Hauptaktivitäten",
    competencies: "Kompetenzen",
    proofAndWorkflow: "Nachweis & Arbeitsablauf (BA & PM)",
    docsAndRealContribution: "Dokumentation & Echte Beiträge",
    workflowAndRoleFocus: "Arbeitsablauf & Rollenfokus",
    authenticDocsAndLogs: "Authentische Dokumentation & Protokolle",
    detailButton: "Details",
    openPortfolioButton: "Portfolio Öffnen",
  },
  beaCukaiProof: {
    metrics: ["Abteilungsrotation", "Entwickeltes System", "MBKM-Bericht", "Rotationsdauer"],
    workflow: [
      { phase: "Bedarfserhebung & SIMIRA-Design", desc: "Interviews mit Lagerverwaltern, Design der MySQL-Datenbank & Entwicklung des PHP-Laravel-Prototyps.", roleFocus: "IT-Business-Analyst & Systemanalytiker" },
      { phase: "Mitarbeiterdaten-Audit", desc: "Überprüfung der Datenintegrität von >1.000 Mitarbeitern des regionalen Zollamts Sulbagsel.", roleFocus: "Datenqualitätsanalyst" },
      { phase: "Medienüberwachung (NALIKA) & PR", desc: "Überwachung der täglichen Zollnachrichten und Gestaltung digitaler Publikationsmaterialien.", roleFocus: "Medien- & Kommunikationsanalyst" },
      { phase: "Interne Compliance-Analyse", desc: "Bewertung von Beschwerdeabläufen und physische Datenerfassung von beschlagnahmten Gütern.", roleFocus: "Compliance- & Feldprüfer" }
    ],
    proofs: [
      { title: "SIMIRA-Systementwicklung & Prototyp", caption: "Entwurf der MySQL-Datenbank und Aufbau der PHP-Laravel-Webschnittstelle für die Bestandsaufnahme.", tag: "Laravel & MySQL" },
      { title: "Systemflussanalyse & Prozess-Mapping", caption: "Erstellung von Geschäftsprozessflussdiagrammen (Ist/Soll) für das Design der rollenbasierten Zugriffskontrolle.", tag: "Systemanalyse" },
      { title: "Validierung von Zolldaten", caption: "Kreuzvalidierung der Integrität tausender Mitarbeiterdaten mittels Tabellenkalkulationen & Datenbanken.", tag: "Datenqualität" },
      { title: "Analyse des Beschwerdesystems", caption: "Überprüfung des Ablaufs der Bearbeitung öffentlicher Beschwerden und Verwaltung von Einspruchsakten.", tag: "Compliance-Analyse" },
      { title: "NALIKA Medienüberwachung & PR", caption: "Tägliche Überwachung von Zollnachrichten und Gestaltung digitaler Publikationsmaterialien der Behörde.", tag: "Medienüberwachung" },
      { title: "Inventar Beschlagnahmter Güter", caption: "Physische Zählung und Protokollierung beschlagnahmter illegaler Zigaretten & Alkohol.", tag: "Feldprüfung" },
      { title: "Empfangs- & Stakeholder-Relations-Service", caption: "Öffentlicher Verwaltungsdienst und Gästebetreuung am Empfang des regionalen Zollamts.", tag: "Öffentlicher Dienst" },
      { title: "Validierung des MBKM-Logbuchs", caption: "Zusammenfassung der täglichen Praktikumsaktivitäten, validiert im SIAKAD-Portal.", tag: "Akademische Validierung" }
    ]
  },
  bpjsProof: {
    metrics: ["Datenintegrität", "Beitragserhebung", "OSS-Verifizierung", "BPU-Sozialisierung"],
    workflow: [
      { phase: "Validierung der Mitgliedsdaten", desc: "Überprüfung der IGI-Qualität und systematische Korrektur von Inkonsistenzen in >5.000 Teilnehmerdaten.", roleFocus: "Datenanalyst" },
      { phase: "Inkasso-Automatisierung", desc: "Durchführung von Beitragseinzugskampagnen via E-Mail & WA für säumige Unternehmen.", roleFocus: "Kundenbetreuer" },
      { phase: "Synchronisation des OSS-Portals", desc: "Kreuzprüfung von Registrierungsdaten neuer Geschäftseinheiten im OSS-Portal zur Akquise.", roleFocus: "Compliance-Support" },
      { phase: "Programmschulung & Sozialisierung", desc: "Vermittlung von Verständnis für das BPU-Programm an Arbeitnehmer im informellen Sektor.", roleFocus: "Public Relations" }
    ],
    proofs: [
      { title: "Überprüfung der IGI-Qualitätsdaten", caption: "Überprüfung von Datenanomalien der Teilnehmer und Vollständigkeit des Profils im BPJAMSOSTEK-System.", tag: "Datenvalidierung" },
      { title: "WA-Inkassokampagne", caption: "Automatisierter Versand von Inkassonachrichten & Mahnungen an betreute Unternehmen.", tag: "Automatisierung" },
      { title: "Integrierter OSS-Portal-Cross-Check", caption: "Überprüfung der Registrierung neuer, in das System integrierter Unternehmenseinheiten.", tag: "Systemverifizierung" },
      { title: "Sozialisierung der sozialen Sicherheit", caption: "Direkte Unterstützung und Aufklärung für die Gemeinschaft der Arbeitnehmer im informellen Sektor.", tag: "Öffentlicher Dienst" },
      { title: "Zusammenfassung der Mitgliedergewinnung", caption: "Monatliche Berichterstattung über den Akquisitionsfortschritt im Gebiet Makassar.", tag: "Berichterstattung" },
      { title: "Integrierter BPJS-Service", caption: "Unterstützung grundlegender Verwaltungsdienste für Teilnehmer in der Zweigstelle.", tag: "Verwaltung" }
    ]
  },
  portfolioList: [
    { title: "Integriertes Informationssystem Cenrana", desc: "End-to-End-Digitalplattform mit 3 Hauptmodulen: Budgettransparenz, e-Surat und Datenmanagement. UAT-Erfolgsrate von 93,8 %." },
    { title: "SIMIRA-Prototyp (Zoll Sulbagsel)", desc: "Webbasiertes Managementinformationssystem (PHP Laravel & MySQL) für den regionalen Zoll. Design des Geschäftsablaufs bis hin zu Bestandserfassungsfunktionen und Benutzerauthentifizierung." },
    { title: "Entscheidungsunterstützungssystem (TOPSIS)", desc: "Webbasiertes Datenanalysesystem zur Optimierung der Auswahl von Gebrauchtfahrzeugen anhand von 7 komplexen Kriterien." },
    { title: "Prognosesystem für den Studienabschluss", desc: "Auf Python basierendes Machine-Learning-Modell zur Vorhersage der Pünktlichkeit von Studienabschlüssen — 93 % Genauigkeit." },
    { title: "Landing Page & Webprofil", desc: "Werbe- und Personal-Branding-Seiten, die mit einem eleganten visuellen Ansatz gestaltet wurden, um Informationen ansprechend zu vermitteln." },
    { title: "Instagram-Feed-Design", desc: "Eine Sammlung von Social-Media-Designs, die das Organisations-Branding für den Zeitraum 2024-2025 unterstützen." },
    { title: "Social-Media-Design KKN Cenrana", desc: "Eine Sammlung von Social-Media-Inhaltsdesigns, die die Veröffentlichung von Aktivitäten während des gemeinnützigen Dienstes unterstützen." },
    { title: "Freiberufliche Zusammenarbeit", desc: "Verschiedene Formen der flexiblen Zusammenarbeit mit Einzelpersonen bei digitalen Projekten." },
    { title: "Erforschung weiterer digitaler Lösungen", desc: "Raum für zusätzliche Arbeiten und neue Entwicklungen, die weiter wachsen werden." }
  ],
  projectsList: [
    { title: "Informationssystem Dorf Cenrana", roleAndDate: "Projektleiter | Nov 2025 – Apr 2026", desc: "Eine Dorf-Website zur Unterstützung öffentlicher Informationen, der Budgettransparenz und der digitalen Bedürfnisse der Gemeinde.", tags: ["Dorf-Website", "Informationssystem", "E-Surat"] },
    { title: "Digitales Service-System für Anliegen", roleAndDate: "Koordinator & Entwickler | Jul 2025 – Sep 2025", desc: "Eine Plattform für Bürger, um Beschwerden über Infrastrukturbedingungen schneller und dokumentierter zu übermitteln.", tags: ["Bürgerservice", "Bürgermeldungen", "Digitaler Service"] },
    { title: "SIM-Prototyp für den Haushalt", roleAndDate: "Zoll Sulbagsel | 2025", desc: "Ein Prototyp eines Informationssystems, das zur Unterstützung interner Büroanforderungen entwickelt wurde.", tags: ["Verwaltungssystem", "Datenmanagement", "Prototyp"] },
    { title: "Visuelles Design & Branding", roleAndDate: "Grafikdesign & Digitale Komm.", desc: "Erstellung von Social-Media-Inhalten, Infografiken, Feeds und Publikationsmaterialien für organisatorische Anforderungen.", tags: ["Feed-Design", "Infografiken", "Canva & Figma"] }
  ],
  blueprintNodes: [
    { title: "Business-Analyse & PRD", summary: "Übersetzung von Stakeholder-Bedürfnissen in technische Spezifikationsdokumente (PRD/BRD) und UAT-Testszenarien." },
    { title: "Datenintegrität & Validierung", summary: "Durchführung von massenhafter Datenbereinigung, Integritätsabgleich und digitaler Archivierung." },
    { title: "SDLC & Projektkoordination", summary: "Leitung des Softwareentwicklungslebenszyklus von der Planung bis zur Live-Einführung." },
    { title: "GenAI-Agenten-Betrieb", summary: "Nutzung von KI als Arbeitsagent zur Beschleunigung der Erstellung von Dokumentationen mit manueller Validierung." }
  ],
  cenranaExtended: {
    diagrams: [
      { title: "Architektur-Blueprint des Full-Stack-Systems" },
      { title: "Entity-Relationship-Diagramm" },
      { title: "MySQL-Datenbankstruktur" },
      { title: "Cloud-Medienspeicher" },
      { title: "Systemevaluierungsbericht" },
      { title: "Produktionshosting-Infrastruktur" },
      { title: "Sequenzdiagramm — NIK-Validierung" },
      { title: "SDLC-Flussdiagramm" }
    ],
    screenshots: [
      { title: "Haupt-Homepage", category: "1. Homepage", desc: "Integriertes Hauptinformationsportal & Zugangspunkt." },
      { title: "Dorfprofil-Portal", category: "2. Dorfprofil", desc: "Demografische, territoriale und historische Informationen." },
      { title: "Öffentliches Informationszentrum", category: "3. Information", desc: "Transparenzportal für Dorfneuigkeiten und offizielle Ankündigungen." },
      { title: "Digitaler Bürger-Service-Hub", category: "4. Bürgerservice", desc: "Zentrales Zugangsportal für Self-Services." },
      { title: "Service für Bürgeranliegen", category: "4. Bürgerservice", desc: "Öffentliches Beschwerdeformular mit Verschlüsselungsschutz." },
      { title: "Digitaler e-Surat-Service", category: "4. Bürgerservice", desc: "Automatisierte Online-Anfragen für Verwaltungsdokumente." },
      { title: "Bürgermarkt (KMU-Wirtschaft)", category: "4. Bürgerservice", desc: "Digitaler Marketing-Showcase für KMU im Dorf." },
      { title: "Admin-Zusammenfassungs-Dashboard", category: "5. Admin & Panel", desc: "Statistische Zusammenfassung von Bürgerdaten und Aktivitäten." },
      { title: "Admin-Kontrollpanel (CMS)", category: "5. Admin & Panel", desc: "Zentrale Verwaltung von 18 operativen Modulen." }
    ],
    fieldPhotos: [
      { title: "Unterzeichnung der Partnerschaft", category: "1. Initiierung", desc: "Prozess der Unterzeichnung des Systementwicklungsvertrags." },
      { title: "Projektinitiierungsvereinbarung", category: "1. Initiierung", desc: "Diskussion über den Projektablauf & Festlegung der Verpflichtung." },
      { title: "Beobachtung & Bedarfsanalyse", category: "2. Analyse", desc: "Direkte Interviews & Beobachtung manueller Arbeitsabläufe." },
      { title: "Code-Implementierung", category: "3. Entwicklung", desc: "Benutzerdefinierte Code-Entwicklung von 18 Modulen." },
      { title: "Bereitstellung & Hosting-Konfiguration", category: "3. Bereitstellung", desc: "Einrichtung der Domain, Serverkonfiguration & SSL." },
      { title: "Direkte UAT-Tests", category: "4. UAT-Tests", desc: "Direkter Test von Beschwerdeszenarien durch Bürger." },
      { title: "UAT-Evaluierung & SUS-Score", category: "4. UAT-Tests", desc: "Ausfüllen von System-Machbarkeitsfragebögen." },
      { title: "Dorfsozialisierung & Schulung", category: "5. Schulung", desc: "Schulung zur unabhängigen Systembedienung für Dorfbeamte." },
      { title: "Technische Anleitung für Admins", category: "5. Schulung", desc: "Ausführliche Schulung zur Verwaltung von CMS-Modulen." },
      { title: "Annahmeerklärungsschreiben", category: "6. Annahme", desc: "Offizielles Dokument der Systemannahmeerklärung." },
      { title: "Offizielle Übergabe", category: "6. Offizielle Übergabe", desc: "Symbolische Übergabe des Informationssystems an den Dorfvorsteher." }
    ]
  },
  topsisExtended: {
    diagrams: [
      { title: "Grundgerüst der Ranking-Methode" },
      { title: "TOPSIS-Berechnungsfluss" },
      { title: "Visualisierung von Gewichtswerten" },
      { title: "Entscheidungsmatrix der Normalisierung" }
    ],
    screenshots: [
      { title: "Empfehlungsportal", category: "1. Homepage", desc: "Öffentliche Schnittstelle für Käufer zur Kriterienauswahl." },
      { title: "Kriterieneingabe-Panel", category: "2. Eingabe", desc: "Dynamisches Gewichtungsformular nach Benutzeranforderungen." },
      { title: "TOPSIS-Analyseergebnisse", category: "3. Ausgabe", desc: "Empfehlungstabelle der Top-5-Motorräder." },
      { title: "Datenmanagement-Dashboard", category: "4. Admin-Bereich", desc: "Modul zur Verwaltung von 53 realen Motorraddaten." }
    ]
  }
};
