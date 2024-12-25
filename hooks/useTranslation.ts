import { useState, useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Translations = Record<string, any>;

export function useTranslation() {
  const [language, setLanguage] = useState<"en" | "ja">("en");
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    const loadTranslations = async () => {
      const response = await fetch(
        `/locales/${language}/common.json?timestamp=${Date.now()}`
      );
      if (!response.ok) {
        console.error(`Failed to load ${language} translations.`);
        return;
      }
      const data = await response.json();
      setTranslations(data);
    };

    loadTranslations();
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ja" : "en"));
  };

  return {
    t: (key: string) =>
      key.split(".").reduce((o, i) => o?.[i], translations) || key,
    toggleLanguage,
    language,
  };
}
