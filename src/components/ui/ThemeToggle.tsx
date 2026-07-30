"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Compass, ChevronDown, Check } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

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
      desc: "Obsidian & Process Flow",
      icon: Moon,
      color: "text-primary",
    },
    {
      id: "blueprint",
      name: "Executive Blueprint",
      desc: "System Architecture View",
      icon: Compass,
      color: "text-sky-400",
    },
  ];

  const currentOption = themeOptions.find((t) => t.id === theme) || themeOptions[0];
  const CurrentIcon = currentOption.icon;

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
          {currentOption.name.split(" ")[0]}
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
                Pilih Mode Tampilan
              </span>
            </div>

            {themeOptions.map((opt) => {
              const OptionIcon = opt.icon;
              const isSelected = theme === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    setTheme(opt.id);
                    setIsOpen(false);
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
