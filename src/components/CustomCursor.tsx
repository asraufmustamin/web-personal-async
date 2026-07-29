"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Custom cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for the cursor - optimized for snappier follow
  const springConfig = { damping: 28, stiffness: 700, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports hover (not a touchscreen)
    const checkHover = () => {
      setIsMobile(window.matchMedia("(hover: none)").matches);
    };
    checkHover();
    window.addEventListener("resize", checkHover);

    if (!isMobile) {
      const moveCursor = (e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isClickable = 
          target.tagName.toLowerCase() === 'a' ||
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('.cursor-pointer');
          
        setIsHovered(!!isClickable);
      };

      window.addEventListener("mousemove", moveCursor);
      window.addEventListener("mouseover", handleMouseOver);

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        window.removeEventListener("mouseover", handleMouseOver);
        window.removeEventListener("resize", checkHover);
      };
    }
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, .cursor-pointer {
          cursor: none !important;
        }
      `}</style>
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-[9999] hidden md:block backdrop-invert-[0.1]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.2 : 0.5,
          backgroundColor: isHovered ? "var(--color-primary)" : "transparent",
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[10000] hidden md:block shadow-[0_0_10px_rgba(255,165,0,0.5)]"
        style={{
          x: cursorX, // No spring for the dot, it follows exactly
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
