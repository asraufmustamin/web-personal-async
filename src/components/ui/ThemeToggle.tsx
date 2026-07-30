"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Lock, ChevronDown, Check, Info } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showLockedMsg, setShowLockedMsg] = useState(false);
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
        setShowLockedMsg(false);
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
      desc: "Locked Theme",
      icon: Lock,
      color: "text-rose-400",
    },
  ];

  const currentOption = themeOptions.find((t) => t.id === theme) || themeOptions[0];
  const CurrentIcon = currentOption.icon;

  const handleCustomClick = () => {
    setTheme("custom");
    setShowLockedMsg(true);
    // Don't close dropdown immediately so they can see the message
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown Button Trigger */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (isOpen) setShowLockedMsg(false); // reset msg on close
        }}
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
                Mode Tampilan & Warna
              </span>
            </div>

            <div className="space-y-1">
              {/* Light Mode */}
              <button
                onClick={() => { setTheme("light"); setIsOpen(false); }}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 cursor-pointer text-left ${
                  theme === "light"
                    ? "bg-primary/10 border border-primary/30"
                    : "hover:bg-black/5 dark:hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-lg ${theme === "light" ? "bg-primary text-white" : "bg-black/5 dark:bg-white/5 text-text-muted"}`}>
                    <Sun className="h-4 w-4" />
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${theme === "light" ? "text-primary" : "text-text-main"}`}>
                      Light Mode
                    </div>
                    <div className="text-[10px] text-text-muted">
                      Ivory & Warm Gold
                    </div>
                  </div>
                </div>
                {theme === "light" && <Check className="h-4 w-4 text-primary shrink-0" />}
              </button>

              {/* Dark Mode */}
              <button
                onClick={() => { setTheme("dark"); setIsOpen(false); }}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 cursor-pointer text-left ${
                  theme === "dark"
                    ? "bg-primary/10 border border-primary/30"
                    : "hover:bg-black/5 dark:hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-lg ${theme === "dark" ? "bg-primary text-white" : "bg-black/5 dark:bg-white/5 text-text-muted"}`}>
                    <Moon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${theme === "dark" ? "text-primary" : "text-text-main"}`}>
                      Dark Mode
                    </div>
                    <div className="text-[10px] text-text-muted">
                      Deep Obsidian & Gold
                    </div>
                  </div>
                </div>
                {theme === "dark" && <Check className="h-4 w-4 text-primary shrink-0" />}
              </button>

              {/* Custom Color Mode (Locked) */}
              <button
                onClick={handleCustomClick}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 cursor-pointer text-left ${
                  theme === "custom"
                    ? "bg-primary/10 border border-primary/30"
                    : "hover:bg-black/5 dark:hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className={`p-1.5 rounded-lg ${theme === "custom" ? "bg-primary text-white" : "bg-black/5 dark:bg-white/5 text-text-muted"}`}>
                    <Lock className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs font-bold flex items-center justify-between w-full ${theme === "custom" ? "text-primary" : "text-text-main"}`}>
                      Custom Color
                      {/* Little color dot badges indicating custom colors */}
                      <div className="flex items-center gap-0.5 ml-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#022C22] shadow-sm"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0F172A] shadow-sm"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#1C100B] shadow-sm"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#250711] shadow-sm"></div>
                      </div>
                    </div>
                    <div className="text-[10px] text-text-muted">
                      Terkunci di Velvet Maroon
                    </div>
                  </div>
                </div>
                {theme === "custom" && !showLockedMsg && <Check className="h-4 w-4 text-primary shrink-0" />}
              </button>
            </div>

            {/* Small Popup Message inside the card */}
            <AnimatePresence>
              {showLockedMsg && theme === "custom" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 p-2.5 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-xl flex items-start gap-2">
                    <Info className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <p className="text-[10px] text-text-muted leading-tight">
                      Fitur ganti warna sedang disiapkan! 🎨<br/>
                      Sementara ini nikmati tema <strong className="text-text-main">Velvet Maroon</strong>.
                    </p>
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
