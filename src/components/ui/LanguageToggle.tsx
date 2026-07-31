"use client";

import { useLanguage, Language } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const LANGUAGES: { id: Language; name: string; flag: string }[] = [
  { id: "id", name: "Indonesia", flag: "🇮🇩" },
  { id: "en", name: "English", flag: "🇬🇧" },
  { id: "es", name: "Español", flag: "🇪🇸" },
  { id: "fr", name: "Français", flag: "🇫🇷" },
  { id: "de", name: "Deutsch", flag: "🇩🇪" },
  { id: "zh", name: "中文 (Mandarin)", flag: "🇨🇳" },
  { id: "ja", name: "日本語 (Japanese)", flag: "🇯🇵" },
  { id: "ar", name: "العربية (Arabic)", flag: "🇸🇦" },
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLang = LANGUAGES.find((l) => l.id === language) || LANGUAGES[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label="Ubah Bahasa"
        title="Ubah Bahasa / Change Language"
      >
        <Globe className="h-5 w-5 text-text-muted hover:text-text-main transition-colors" />
        <span className="text-xs font-bold text-text-muted uppercase hidden sm:inline-block">
          {activeLang.id}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 mt-2 w-[220px] origin-top-right rounded-2xl bg-bg-card border border-black/5 dark:border-white/5 shadow-xl shadow-black/5 dark:shadow-white/5 p-2 z-50 backdrop-blur-xl"
          >
            <div className="mb-2 px-2 pt-1">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">
                Pilih Bahasa
              </span>
            </div>
            
            <div className="grid grid-cols-1 gap-1">
              {LANGUAGES.map((lang) => {
                const isSelected = language === lang.id;
                return (
                  <button
                    key={lang.id}
                    onClick={() => {
                      setLanguage(lang.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between p-2 rounded-xl transition-all duration-300 cursor-pointer text-left ${
                      isSelected
                        ? "bg-primary/10 border border-primary/30 text-primary font-bold"
                        : "hover:bg-black/5 dark:hover:bg-white/5 border border-transparent text-text-main"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-xs font-medium">{lang.name}</span>
                    </div>
                    {isSelected && (
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(248,157,10,0.8)]" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
