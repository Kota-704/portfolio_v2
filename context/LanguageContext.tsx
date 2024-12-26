"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "ja";

interface Translations {
  header: {
    toggleLanguage: string;
  };
  about: {
    p1: string;
    p2: string;
    p3: string;
  };
  works: {
    works1_title: string;
  };
}

interface LanguageContextProps {
  language: Language;
  translations: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("en");
  const [translations, setTranslations] = useState<Translations>({
    header: { toggleLanguage: "" },
    about: { p1: "", p2: "", p3: "" },
    works: { works1_title: "" },
  });

  useEffect(() => {
    const loadTranslations = async () => {
      const response = await fetch(`/locales/${language}/common.json`);
      const data = await response.json();
      setTranslations(data);
    };
    loadTranslations();
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ja" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
