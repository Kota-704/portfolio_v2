"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "ja";

interface Work {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface Translations {
  language: string;
  header: {
    toggleLanguage: string;
  };
  about: {
    p1: string;
    p2: string;
    p3: string;
  };
  works: Work[];
  skill: {
    frontend: string;
    backend: string;
    database: string;
    tools: string;
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
    language: "en",
    header: { toggleLanguage: "" },
    about: { p1: "", p2: "", p3: "" },
    works: [],
    skill: { frontend: "", backend: "", database: "", tools: "" },
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
