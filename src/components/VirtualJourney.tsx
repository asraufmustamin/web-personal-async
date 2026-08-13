"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
});

interface VirtualJourneyProps {
  onClose: () => void;
}

export function VirtualJourney({ onClose }: VirtualJourneyProps) {
  const { t } = useLanguage();
  const milestones = t.experience.items ? [...t.experience.items].reverse() : [];
  
  const [step, setStep] = useState(0); 

  const handleNext = () => {
    if (step <= milestones.length) {
      setStep(prev => prev + 1);
    } else {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={`fixed inset-0 z-[1000] w-full h-full flex flex-col items-center justify-center overflow-hidden bg-sky-100 ${playfair.className}`}
    >
      {/* Optimized Background Image with subtle continuous zoom for 3D feel without lag */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image 
          src="/heaven-bg.png" 
          alt="Surga Alam"
          fill
          className="object-cover opacity-90"
          priority
        />
        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
      </motion.div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-amber-800 transition-all shadow-lg border border-white/50"
      >
        <X size={24} />
      </button>

      {/* Main Content - Text flying towards camera for 3D effect */}
      <div 
        className="relative z-10 w-full h-full px-6 flex flex-col items-center justify-center text-center cursor-pointer" 
        onClick={handleNext}
      >
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2 }} // Flies past camera
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="flex flex-col items-center p-12 rounded-3xl bg-white/40 backdrop-blur-md shadow-2xl border border-white/60 max-w-2xl"
            >
              <h1 className="text-4xl md:text-6xl text-amber-800 mb-6 drop-shadow-md font-bold">
                Selamat Datang
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 font-light max-w-2xl leading-relaxed drop-shadow-sm font-sans">
                Mari melangkah masuk ke dalam dimensi perjalanan saya. Sebuah proses yang cerah, penuh harapan, dan terus bertumbuh.
              </p>
            </motion.div>
          )}

          {step > 0 && step <= milestones.length && (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, scale: 0.5 }} // Appears from far away
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2 }} // Flies past camera
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="flex flex-col items-center p-10 md:p-14 rounded-[2rem] bg-white/40 backdrop-blur-md shadow-2xl border border-white/60 max-w-3xl w-full mx-4"
            >
              <div className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-sans tracking-[0.2em] uppercase font-bold mb-6 shadow-sm border border-amber-200">
                {milestones[step - 1].date} • {milestones[step - 1].company}
              </div>
              <h2 className="text-3xl md:text-5xl text-slate-800 mb-8 leading-tight font-semibold drop-shadow-sm">
                {milestones[step - 1].role}
              </h2>
              <p className="text-lg md:text-xl text-slate-700 font-sans font-light max-w-2xl leading-relaxed">
                {milestones[step - 1].description}
              </p>
            </motion.div>
          )}

          {step > milestones.length && (
            <motion.div
              key="outro"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="flex flex-col items-center p-12 rounded-3xl bg-white/40 backdrop-blur-md shadow-2xl border border-white/60 max-w-2xl"
            >
              <h2 className="text-4xl md:text-6xl text-amber-800 mb-6 drop-shadow-md font-bold">
                Perjalanan Berlanjut
              </h2>
              <p className="text-xl md:text-2xl text-slate-700 font-light max-w-2xl leading-relaxed drop-shadow-sm font-sans">
                Terima kasih telah menyelami perjalanan ini bersama saya.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center text-amber-800/60 animate-pulse pointer-events-none"
        >
          <span className="text-sm uppercase tracking-[0.2em] font-sans font-medium mb-2 drop-shadow-sm">Klik di mana saja untuk maju</span>
          <ChevronRight size={28} className="rotate-90 drop-shadow-sm" />
        </motion.div>
      </div>
    </motion.div>
  );
}
