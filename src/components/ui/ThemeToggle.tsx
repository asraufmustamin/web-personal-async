"use client";

import * as React from "react";
import { Moon, Sun, Zap } from "lucide-react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("cyber");
    else setTheme("light");
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative flex items-center justify-center p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300 border border-black/5 dark:border-white/10 group cursor-pointer"
      aria-label="Switch Theme (Light, Dark, Cyber Interactive)"
      title={`Tema Saat Ini: ${theme === "cyber" ? "Cyber Interactive" : theme === "dark" ? "Dark Mode" : "Light Mode"}`}
    >
      <div className="flex items-center gap-1.5 px-1">
        {/* Sun Icon */}
        <Sun className={`h-4 w-4 transition-all duration-300 ${theme === "light" ? "text-amber-500 scale-110 font-bold" : "text-gray-400 opacity-50 scale-90"}`} />
        
        {/* Moon Icon */}
        <Moon className={`h-4 w-4 transition-all duration-300 ${theme === "dark" ? "text-primary scale-110 font-bold" : "text-gray-400 opacity-50 scale-90"}`} />
        
        {/* Cyber Interactive Icon */}
        <Zap className={`h-4 w-4 transition-all duration-300 ${theme === "cyber" ? "text-cyan-400 scale-110 animate-pulse font-bold" : "text-gray-400 opacity-50 scale-90"}`} />
      </div>

      {/* Cyber Badge Tooltip */}
      {theme === "cyber" && (
        <span className="absolute -bottom-7 right-0 text-[9px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 whitespace-nowrap shadow-sm">
          Interactive Cyber
        </span>
      )}
    </button>
  );
}
