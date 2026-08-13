export type Dictionary = {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    typewriter: string[];
    description: string;
  };
  about: {
    sectionTitle: string;
    greeting: string;
    p1: string;
    p2: string;
    viewWork: string;
    downloadCV: string;
    contactMe: string;
  };
  skills: {
    sectionTitle: string;
    subtitle: string;
    description: string;
    items: {
      id: string;
      title: string;
      desc: string;
    }[];
    viewDetail: string;
    focusArea: string;
  };
  experience: {
    sectionTitle: string;
    subtitle: string;
    description: string;
    categories: string[];
    items: {
      role: string;
      company: string;
      date: string;
      description: string;
      activities: string[];
      label: string;
    }[];
    highlightsTitle: string;
    highlightsSectionTitle: string;
    highlightsSectionDesc: string;
    highlights: {
      title: string;
      desc: string;
    }[];
    viewDetails: string;
    proofTitle: string;
  };
  portfolio: {
    sectionTitle: string;
    subtitle: string;
    description: string;
    projects: {
      title: string;
      desc: string;
    }[];
    viewProject: string;
  };
  contact: {
    sectionTitle: string;
    subtitle: string;
    description: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    mascot: {
      idle: string;
      email: string;
      whatsapp: string;
      default: string;
    };
  };
  footer: {
    copyright: string;
  };
  tools: {
    sectionTitle: string;
    title: string;
    typewriter: string[];
    description: string;
  };
  cvModal: {
    title: string;
    subtitle: string;
    baTitle: string;
    baDesc: string;
    pmTitle: string;
    pmDesc: string;
  };
  caseStudy: {
    overviewTitle: string;
    problemsTitle: string;
    sdlcTitle: string;
    outputsTitle: string;
    focusTitle: string;
    deliverablesTitle: string;
    close: string;
    backToPortfolio: string;
    viewLiveSite: string;
    cenrana: {
      title: string;
      subtitle: string;
      client: string;
      overview: string;
      problems: { title: string; desc: string }[];
      metrics: { label: string; suffix: string }[];
      phases: { title: string; period: string; roleFocus?: string; desc: string; outputs: string[] }[];
    };
    topsis: {
      title: string;
      subtitle: string;
      client: string;
      overview: string;
      problems: { title: string; desc: string }[];
      metrics: { label: string; suffix: string }[];
      phases: { title: string; period: string; roleFocus?: string; desc: string; outputs: string[] }[];
    };
  };
  journey?: {
    triggerText: string;
    triggerButton: string;
    greeting: string[];
  };
  extended?: any;
};
