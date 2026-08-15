"use client";

import { motion } from "framer-motion";
import { Sparkles, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface VirtualJourneyTriggerProps {
  onTrigger: () => void;
}

export function VirtualJourneyTrigger({ onTrigger }: VirtualJourneyTriggerProps) {
  const { t } = useLanguage();

  return (
    <section className="relative w-full py-24 flex flex-col items-center justify-center overflow-hidden">
      {/* Mystical glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-6 text-center px-4"
      >
        <div className="flex items-center justify-center gap-3 text-primary font-serif italic text-lg md:text-xl">
          <Sparkles className="w-5 h-5" />
          <span>{t.journey?.triggerText || "Ingin melihat perjalanan ini dari sudut pandang yang berbeda?"}</span>
          <Sparkles className="w-5 h-5" />
        </div>

        <motion.button
          onClick={onTrigger}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-4 bg-bg-card border border-primary/30 rounded-full overflow-hidden shadow-[0_0_40px_-10px_rgba(204,122,0,0.5)] transition-all hover:border-primary/60 hover:shadow-[0_0_60px_-15px_rgba(204,122,0,0.8)] cursor-pointer"
        >
          {/* Animated glow inside button */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          
          <span className="relative z-10 font-bold text-text-main group-hover:text-primary transition-colors tracking-wide flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-primary/80" />
            <span>{t.journey?.triggerButton || "Mulai Perjalanan Virtual"}</span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20">
              Segera
            </span>
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
