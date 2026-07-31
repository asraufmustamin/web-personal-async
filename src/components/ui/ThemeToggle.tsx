"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Palette, ChevronDown, Check } from "lucide-react";
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
      return localStorage.getItem("async_custom_theme_color") || "#250711";
    }
    return "#250711";
  });
  
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
      applyCustomThemeColor(customHex);
      if (typeof window !== "undefined") {
        localStorage.setItem("async_custom_theme_color", customHex);
      }
    } else {
      removeCustomThemeColor();
    }
  }, [theme, customHex, mounted]);

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
      desc: "Pilih Warna Favorit",
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
            className="absolute right-0 mt-2 w-64 rounded-2xl bg-bg-card border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-xl z-[10000] p-2 space-y-1"
          >
            <div className="px-3 py-1.5 border-b border-black/5 dark:border-white/5 mb-1">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
                Mode Tampilan & Warna
              </span>
            </div>

            <div className="space-y-1">
              {themeOptions.map((opt) => {
                const OptionIcon = opt.icon;
                const isSelected = theme === opt.id;
                return (
                  <div key={opt.id} className="relative">
                    <button
                      onClick={() => {
                        if (opt.id !== "custom") {
                          setTheme(opt.id);
                          setIsOpen(false);
                        } else {
                          // if already custom, just toggle the dots view? 
                          // Or always select it and keep dropdown open
                          if (theme !== "custom") {
                            setTheme("custom");
                          }
                        }
                      }}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 cursor-pointer text-left ${
                        isSelected
                          ? "bg-primary/10 border border-primary/30"
                          : "hover:bg-black/5 dark:hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-lg ${isSelected ? "bg-primary text-white" : "bg-black/5 dark:bg-white/5 text-text-muted"}`}>
                          <OptionIcon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`text-xs font-bold ${isSelected ? "text-primary" : "text-text-main"}`}>
                            {opt.name}
                          </div>
                          <div className="text-[10px] text-text-muted">
                            {opt.desc}
                          </div>
                        </div>
                      </div>

                      {isSelected && opt.id !== "custom" && (
                        <Check className="h-4 w-4 text-primary shrink-0" />
                      )}
                    </button>

                    {/* Show simple color dots if Custom Color is selected */}
                    {opt.id === "custom" && isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="px-2 pb-2 pt-1"
                      >
                        <div className="flex items-center justify-between gap-1.5 p-1.5 bg-black/5 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/5">
                          {PRESET_PALETTES.map((palette) => (
                            <button
                              key={palette.hex}
                              onClick={() => handleCustomHexChange(palette.hex)}
                              className={`w-6 h-6 rounded-full transition-transform hover:scale-110 relative flex items-center justify-center shadow-sm cursor-pointer ${
                                customHex.toLowerCase() === palette.hex.toLowerCase()
                                  ? "ring-2 ring-primary ring-offset-1 ring-offset-bg-card scale-110"
                                  : "opacity-80 hover:opacity-100"
                              }`}
                              style={{ backgroundColor: palette.hex }}
                              title={palette.name}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
