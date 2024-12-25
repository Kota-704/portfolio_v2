import React, { createContext, useContext, useState, useEffect } from "react";

type TranslationContextProps = {
  t: (key: string) => string;
  toggleLanguage: () => void;
  language: "en" | "ja";
};

const TranslationContext = createContext<TranslationContextProps | null>(null);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"en" | "ja">("en");
  const [translations, setTranslations] = useState<Record<string, unknown>>({});

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

  const t = (key: string): string =>
    (key
      .split(".")
      .reduce(
        (o, i) =>
          (o as Record<string, unknown>)?.[i] as Record<string, unknown>,
        translations
      ) as unknown as string) || key;

  return (
    <TranslationContext.Provider value={{ t, toggleLanguage, language }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
