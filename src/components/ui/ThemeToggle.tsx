"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Palette, ChevronDown, Check, Edit3, RotateCcw } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { applyCustomThemeColor, removeCustomThemeColor } from "@/lib/colorUtils";

const emptySubscribe = () => () => {};

const PRESET_PALETTES = [
  { name: "Velvet Maroon", hex: "#250711" },
  { name: "Royal Emerald", hex: "#022C22" },
  { name: "Sapphire Indigo", hex: "#0F172A" },
  { name: "Warm Espresso", hex: "#1C100B" },
  { name: "Deep Plum", hex: "#1E0A2A" },
  { name: "Imperial Crimson", hex: "#2B080C" },
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
      desc: "Palet & Color Picker ✏️",
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
            className="absolute right-0 mt-2 w-72 rounded-2xl bg-bg-card border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-xl z-[10000] p-3 space-y-3"
          >
            <div className="px-2 py-1 border-b border-black/5 dark:border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
                Mode Tampilan & Warna
              </span>
              {theme === "custom" && (
                <button
                  onClick={() => handleCustomHexChange("#250711")}
                  className="text-[10px] text-text-muted hover:text-primary flex items-center gap-1 transition-colors"
                  title="Reset ke Velvet Maroon"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              )}
            </div>

            {/* Base Theme Modes */}
            <div className="space-y-1">
              {themeOptions.map((opt) => {
                const OptionIcon = opt.icon;
                const isSelected = theme === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setTheme(opt.id);
                      if (opt.id !== "custom") {
                        setIsOpen(false);
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

                    {isSelected && (
                      <Check className="h-4 w-4 text-primary shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Custom Palette & Eyedropper Section */}
            <div className="pt-2 border-t border-black/5 dark:border-white/5 space-y-2.5">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-bold text-text-main flex items-center gap-1.5">
                  <Edit3 className="w-3.5 h-3.5 text-primary" />
                  Preset Palet & Color Picker ✏️
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-text-muted font-bold">
                  {customHex}
                </span>
              </div>

              {/* Preset Swatches */}
              <div className="grid grid-cols-6 gap-1.5 p-1 bg-black/5 dark:bg-white/5 rounded-xl">
                {PRESET_PALETTES.map((palette) => (
                  <button
                    key={palette.hex}
                    onClick={() => handleCustomHexChange(palette.hex)}
                    className={`w-7 h-7 rounded-lg transition-transform hover:scale-110 relative flex items-center justify-center shadow-sm cursor-pointer ${
                      customHex.toLowerCase() === palette.hex.toLowerCase() && theme === "custom"
                        ? "ring-2 ring-primary scale-105"
                        : ""
                    }`}
                    style={{ backgroundColor: palette.hex }}
                    title={palette.name}
                  >
                    {customHex.toLowerCase() === palette.hex.toLowerCase() && theme === "custom" && (
                      <Check className="w-3.5 h-3.5 text-white drop-shadow" />
                    )}
                  </button>
                ))}
              </div>

              {/* Live Input Color & Hex Box */}
              <div className="flex items-center gap-2 pt-1">
                {/* Native Color Picker */}
                <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shrink-0 cursor-pointer shadow-sm group">
                  <input
                    type="color"
                    value={customHex}
                    onChange={(e) => handleCustomHexChange(e.target.value)}
                    className="absolute -inset-2 w-14 h-14 cursor-pointer opacity-0"
                    title="Pilih Warna Kustom"
                  />
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: customHex }}
                  >
                    <Edit3 className="w-4 h-4 text-white drop-shadow opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Hex Text Input */}
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={customHex}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val.startsWith("#") || val === "") {
                        setCustomHex(val);
                        if (/^#[0-9A-F]{6}$/i.test(val)) {
                          handleCustomHexChange(val);
                        }
                      }
                    }}
                    placeholder="#250711"
                    className="w-full px-3 py-1.5 text-xs font-mono bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl text-text-main focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
