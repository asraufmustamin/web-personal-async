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
    close: string;
    backToPortfolio: string;
    viewLiveSite: string;
  };
};
