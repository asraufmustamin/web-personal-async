import { Variants } from "framer-motion";

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const fadeUpBlur: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50, 
    filter: "blur(15px)",
    scale: 0.9,
    rotateX: 20
  },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    rotateX: 0,
    transition: { 
      type: "spring" as const, 
      stiffness: 100,
      damping: 20,
      duration: 0.8
    } 
  },
};

export const slideInRightBlur: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50, 
    filter: "blur(15px)",
    scale: 0.9,
  },
  show: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { 
      type: "spring" as const, 
      stiffness: 100,
      damping: 20,
      duration: 0.8
    } 
  },
};

export const slideInLeftBlur: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50, 
    filter: "blur(15px)",
    scale: 0.9,
  },
  show: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { 
      type: "spring" as const, 
      stiffness: 100,
      damping: 20,
      duration: 0.8
    } 
  },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.5, filter: "blur(20px)" },
  show: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 150, damping: 15 }
  }
};
