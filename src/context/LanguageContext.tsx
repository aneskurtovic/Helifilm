"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language } from "@/data/translations";

type TranslationSet = (typeof translations)[Language];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSet;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("helifilm-lang") as Language;
    if (saved === "en" || saved === "bs") {
      setLanguageState(saved);
      return;
    }

    const BALKAN_COUNTRIES = new Set(["BA", "RS", "ME", "HR"]);

    const applyBrowserFallback = () => {
      const lang = navigator.language?.toLowerCase() || "";
      if (lang.startsWith("bs") || lang.startsWith("hr") || lang.startsWith("sr")) {
        setLanguageState("bs");
      }
    };

    fetch("https://ipapi.co/country/", { signal: AbortSignal.timeout(3000) })
      .then((r) => r.text())
      .then((country) => {
        if (BALKAN_COUNTRIES.has(country.trim())) {
          setLanguageState("bs");
        }
      })
      .catch(applyBrowserFallback);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("helifilm-lang", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
