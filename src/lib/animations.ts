import { Variants } from "framer-motion";

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const fadeUpBlur: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    filter: "blur(12px)",
    scale: 0.95,
  },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  },
};

export const slideInRightBlur: Variants = {
  hidden: { 
    opacity: 0, 
    x: 40, 
    filter: "blur(12px)",
    scale: 0.95,
  },
  show: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  },
};

export const slideInLeftBlur: Variants = {
  hidden: { 
    opacity: 0, 
    x: -40, 
    filter: "blur(12px)",
    scale: 0.95,
  },
  show: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(10px)", y: 20 },
  show: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  }
};
