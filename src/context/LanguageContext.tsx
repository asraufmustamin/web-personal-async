"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Dictionary } from "../locales/types";
import { id } from "../locales/id";
import { en } from "../locales/en";
import { es } from "../locales/es";
import { fr } from "../locales/fr";
import { de } from "../locales/de";
import { zh } from "../locales/zh";
import { ja } from "../locales/ja";
import { ar } from "../locales/ar";

export type Language = "id" | "en" | "es" | "fr" | "de" | "zh" | "ja" | "ar";

const dictionaries: Record<Language, Dictionary> = {
  id,
  en,
  es,
  fr,
  de,
  zh,
  ja,
  ar,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("async_language") as Language;
    if (savedLang && dictionaries[savedLang]) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("async_language", lang);
    if (lang === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  };

  useEffect(() => {
    if (language === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
    document.documentElement.lang = language;
  }, [language]);

  const contextValue = {
    language,
    setLanguage,
    t: mounted ? dictionaries[language] : dictionaries["id"], // Default to id during SSR
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
