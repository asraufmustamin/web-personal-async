"use client";

import { motion, useInView } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";
import { useRef } from "react";

const toolsRow1 = [
  { name: "Next.js", icon: "/tools/Nextjs.svg" },
  { name: "Node.js", icon: "/tools/Nodejs.svg" },
  { name: "HTML", icon: "/tools/HTML.svg" },
  { name: "CSS", icon: "/tools/CSS.svg" },
  { name: "PHP", icon: "/tools/PHP.svg" },
  { name: "Tailwind", icon: "/tools/Tailwind.svg" },
  { name: "MySQL", icon: "/tools/MySQL.svg" },
  { name: "Supabase", icon: "/tools/Supabase.svg" },
  { name: "GitHub", icon: "/tools/GitHub.svg" },
  { name: "Vercel", icon: "/tools/Vercel.svg" }
];

const toolsRow2 = [
  { name: "Figma", icon: "/tools/Figma.svg" },
  { name: "Canva", icon: "/tools/Canva.svg" },
  { name: "CapCut", icon: "/tools/capcutlogo.png", className: "w-12 h-12 md:w-[60px] md:h-[60px]" },
  { name: "Word", icon: "/tools/Word.svg" },
  { name: "Excel", icon: "/tools/Excel.svg" },
  { name: "PowerPoint", icon: "/tools/PowerPoint.svg" },
  { name: "Notion", icon: "/tools/Notion.png" },
  { name: "ChatGPT", icon: "/tools/ChatGPT.svg" },
  { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic/D97757" },
  { name: "Gemini", icon: "/tools/Gemini.svg" },
  { name: "DeepSeek", icon: "/tools/deepseeklogo.png", className: "w-12 h-12 md:w-[60px] md:h-[60px]" },
  { name: "Antigravity", icon: "/tools/antigravitylogo.png", className: "w-12 h-12 md:w-[60px] md:h-[60px]" }
];

const ToolCard = ({ tool }: { tool: any }) => (
  <div className="flex-shrink-0 flex items-center justify-center gap-3 md:gap-4 px-6 md:px-8 py-4 group transition-all duration-300 cursor-default">
    {tool.icon ? (
      <img 
        src={tool.icon} 
        alt={tool.name} 
        className={`${tool.className || 'w-8 h-8 md:w-12 md:h-12'} object-contain transition-all duration-500 transform group-hover:scale-110`}
      />
    ) : (
      <span className="material-symbols-outlined text-[32px] md:text-[48px] text-primary transition-all duration-500 transform group-hover:scale-110">
        rocket_launch
      </span>
    )}
    <span className="text-text-main font-bold text-base md:text-xl group-hover:text-primary transition-all duration-500">
      {tool.name}
    </span>
  </div>
);

export default function ToolsSection() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <motion.section 
      className="py-10 md:py-32 bg-bg-main relative overflow-hidden border-t border-black/5" 
      id="tools"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        <motion.div 
          className="flex flex-col items-center text-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-[2px] bg-primary rounded-full"></span>
            <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">
              TEKNOLOGI & TOOLS
            </span>
            <span className="w-8 h-[2px] bg-primary rounded-full"></span>
          </div>
          
          <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold font-serif mb-6 text-text-main">
            Tools yang Saya{" "}
            {isHeadingInView ? (
              <Typewriter 
                text={["Gunakan."]} 
                speed={70} 
                waitTime={15000}
                cursorChar="_" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400"
              />
            ) : (
              <span className="invisible">Gunakan.</span>
            )}
          </h2>
          
          <p className="text-text-muted font-medium text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
            Kombinasi tools untuk mendukung proses desain, pengembangan website, pengelolaan data, dokumentasi, dan produktivitas digital.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 md:gap-10 py-4 z-10">
        {/* Subtle Fade Left & Right */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-bg-main to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-bg-main to-transparent z-20 pointer-events-none"></div>

        {/* Row 1 (Right to Left) */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
          {[...toolsRow1, ...toolsRow1].map((tool, idx) => (
            <div key={`row1-${idx}`} className="px-2">
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>

        {/* Row 2 (Left to Right) */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] -ml-48 items-center">
          {[...toolsRow2, ...toolsRow2].map((tool, idx) => (
            <div key={`row2-${idx}`} className="px-2">
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
