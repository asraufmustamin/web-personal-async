"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Palette, ChevronDown, Check, Edit3, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { applyCustomThemeColor, removeCustomThemeColor } from "@/lib/colorUtils";

const emptySubscribe = () => () => {};

const PRESET_PALETTES = [
  { name: "Velvet Maroon", hex: "#250711" },
  { name: "Royal Emerald", hex: "#022C22" },
  { name: "Sapphire Indigo", hex: "#0F172A" },
  { name: "Deep Plum", hex: "#1E0A2A" },
  { name: "Soft Ivory (Terang)", hex: "#F8F6F0" },
  { name: "Ice Blue (Terang)", hex: "#F0F8FF" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [customHex, setCustomHex] = useState(() => {
    if (typeof window !== "undefined") {
      // Changed to v2 to fix the cached blue color bug
      return localStorage.getItem("async_custom_theme_color_v2") || "#250711";
    }
    return "#250711";
  });
  const [customTextMode, setCustomTextMode] = useState<"light" | "dark" | undefined>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("async_custom_text_mode");
      if (saved === "light" || saved === "dark") return saved;
    }
    return undefined;
  });
  const [isCustomConfigOpen, setIsCustomConfigOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Apply custom theme overrides when theme === 'custom'
  useEffect(() => {
    if (!mounted) return;
    if (theme === "custom") {
      applyCustomThemeColor(customHex, customTextMode);
      if (typeof window !== "undefined") {
        localStorage.setItem("async_custom_theme_color_v2", customHex);
        if (customTextMode) {
          localStorage.setItem("async_custom_text_mode", customTextMode);
        } else {
          localStorage.removeItem("async_custom_text_mode");
        }
      }
    } else {
      removeCustomThemeColor();
    }
  }, [theme, customHex, customTextMode, mounted]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return <div className="w-28 h-10 bg-black/5 dark:bg-white/5 rounded-full animate-pulse" />;
  }

  const themeOptions = [
    {
      id: "light",
      name: "Light Mode",
      desc: "Ivory & Warm Gold",
      icon: Sun,
      color: "text-amber-500",
    },
    {
      id: "dark",
      name: "Dark Mode",
      desc: "Deep Obsidian & Gold",
      icon: Moon,
      color: "text-primary",
    },
    {
      id: "custom",
      name: "Custom Color",
      desc: "Rekomendasi & Warna Bebas",
      icon: Palette,
      color: "text-rose-400",
    },
  ];

  const currentOption = themeOptions.find((t) => t.id === theme) || themeOptions[0];
  const CurrentIcon = currentOption.icon;

  const handleCustomHexChange = (hex: string) => {
    setCustomHex(hex);
    if (theme !== "custom") {
      setTheme("custom");
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown Button Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-bg-card hover:bg-black/5 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 transition-all duration-300 shadow-sm cursor-pointer group"
        aria-label="Pilih Tema Tampilan"
        aria-expanded={isOpen}
      >
        <CurrentIcon className={`h-4 w-4 ${currentOption.color} transition-transform group-hover:scale-110`} />
        <span className="text-xs font-bold text-text-main hidden sm:inline-block">
          {theme === "custom" ? "Custom Color" : currentOption.name.split(" ")[0]}
        </span>
        <ChevronDown className={`h-3.5 w-3.5 text-text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-72 rounded-2xl bg-bg-card border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-xl z-[10000] overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isCustomConfigOpen ? (
                /* --- CUSTOM COLOR CONFIG (DRILL-DOWN) --- */
                <motion.div
                  key="config"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="p-3"
                >
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black/10 dark:border-white/10">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setIsCustomConfigOpen(false); }}
                      className="p-1.5 -ml-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg text-text-muted hover:text-text-main transition-colors"
                      title="Kembali ke Mode Tampilan"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <span className="text-xs font-bold text-text-main flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-rose-400" /> Konfigurasi Warna
                    </span>
                  </div>

                  <div className="space-y-3 bg-black/5 dark:bg-white/5 p-3 rounded-xl border border-black/5 dark:border-white/5">
                    {/* Curated Colors */}
                    <div>
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2 block">
                        Rekomendasi
                      </span>
                      <div className="flex items-center justify-between gap-2">
                        {PRESET_PALETTES.map((palette) => (
                          <button
                            key={palette.hex}
                            onClick={() => handleCustomHexChange(palette.hex)}
                            className={`w-6 h-6 rounded-full transition-all duration-300 relative flex items-center justify-center cursor-pointer ${
                              customHex.toLowerCase() === palette.hex.toLowerCase()
                                ? "scale-125 shadow-lg z-10"
                                : "hover:scale-110 opacity-70 hover:opacity-100 shadow-sm"
                            }`}
                            style={{ 
                              backgroundColor: palette.hex,
                              boxShadow: customHex.toLowerCase() === palette.hex.toLowerCase() ? `0 0 10px ${palette.hex}80` : ''
                            }}
                            title={palette.name}
                          >
                            {customHex.toLowerCase() === palette.hex.toLowerCase() && (
                              <motion.div 
                                initial={{ scale: 0 }} 
                                animate={{ scale: 1 }} 
                                className="absolute inset-0 rounded-full border border-white/40"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-black/10 dark:bg-white/10 w-full" />

                    {/* Custom Picker Button */}
                    <div>
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2 block">
                        Eksplorasi Warna
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="relative overflow-hidden group rounded-lg flex-1 border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                          <input
                            type="color"
                            value={customHex}
                            onChange={(e) => handleCustomHexChange(e.target.value)}
                            className="absolute inset-[-10px] w-[120%] h-[150%] cursor-pointer opacity-0 z-20"
                            title="Pilih Warna Bebas"
                          />
                          <div className="relative z-10 flex items-center justify-center gap-2 px-3 py-1.5 pointer-events-none">
                            <Palette className="w-3.5 h-3.5 text-text-muted group-hover:text-text-main transition-colors" />
                            <span className="text-[10px] font-bold text-text-muted group-hover:text-text-main transition-colors">
                              Pilih Warna Bebas
                            </span>
                          </div>
                        </div>
                        <div className="bg-black/5 dark:bg-white/5 px-2 py-1.5 rounded-lg border border-black/5 dark:border-white/5 text-center min-w-[60px]">
                          <span className="text-[10px] font-mono font-bold text-text-muted uppercase">
                            {customHex}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Text Color Toggle */}
                    <div className="mt-1">
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2 block">
                        Warna Teks
                      </span>
                      <div className="flex bg-black/5 dark:bg-white/5 p-1 rounded-lg">
                        <button
                          onClick={() => setCustomTextMode("light")}
                          className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all flex items-center justify-center gap-1 ${
                            customTextMode === "light" 
                              ? "bg-white text-black shadow-sm" 
                              : "text-text-muted hover:text-text-main"
                          }`}
                        >
                          ⚪ Putih
                        </button>
                        <button
                          onClick={() => setCustomTextMode(undefined)}
                          className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all flex items-center justify-center gap-1 ${
                            customTextMode === undefined 
                              ? "bg-primary text-white shadow-sm" 
                              : "text-text-muted hover:text-text-main"
                          }`}
                        >
                          ✨ Auto
                        </button>
                        <button
                          onClick={() => setCustomTextMode("dark")}
                          className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all flex items-center justify-center gap-1 ${
                            customTextMode === "dark" 
                              ? "bg-[#111] text-white shadow-sm" 
                              : "text-text-muted hover:text-text-main"
                          }`}
                        >
                          ⚫ Hitam
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* --- MAIN MENU (3 MODES) --- */
                <motion.div
                  key="main"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="p-2.5 space-y-1.5"
                >
                  <div className="px-2 py-1.5 border-b border-black/5 dark:border-white/5 mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-primary" /> Mode Tampilan
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {themeOptions.map((opt) => {
                      const OptionIcon = opt.icon;
                      const isSelected = theme === opt.id;
                      return (
                        <div key={opt.id} className="relative group">
                          <button
                            onClick={() => {
                              if (opt.id !== "custom") {
                                setTheme(opt.id);
                                setIsOpen(false);
                              } else {
                                if (theme !== "custom") setTheme("custom");
                                setIsCustomConfigOpen(true);
                              }
                            }}
                            className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all duration-300 cursor-pointer text-left ${
                              isSelected
                                ? "bg-primary/10 border border-primary/30"
                                : "hover:bg-black/5 dark:hover:bg-white/5 border border-transparent"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`p-1.5 rounded-lg transition-colors duration-300 ${isSelected ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-black/5 dark:bg-white/5 text-text-muted"}`}>
                                <OptionIcon className="h-4 w-4" />
                              </div>
                              <div>
                                <div className={`text-xs font-bold transition-colors ${isSelected ? "text-primary" : "text-text-main"}`}>
                                  {opt.name}
                                </div>
                                <div className="text-[10px] text-text-muted">
                                  {opt.desc}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-1">
                              {opt.id === "custom" && isSelected && (
                                <div className="p-1 rounded-md text-primary bg-primary/20 mr-1" title="Konfigurasi">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                                </div>
                              )}
                              {isSelected && opt.id !== "custom" && (
                                <Check className="h-4 w-4 text-primary shrink-0" />
                              )}
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
