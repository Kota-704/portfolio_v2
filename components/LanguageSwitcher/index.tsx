"use client";

import { useTranslation } from "../../hooks/useTranslation";

export default function LanguageSwitcher() {
  const { toggleLanguage, language } = useTranslation();

  return (
    <div className="flex items-center gap-4">
      <p>Current Language: {language.toUpperCase()}</p>
      <div
        onClick={toggleLanguage}
        className={`relative w-14 h-8 bg-gray-300 rounded-full cursor-pointer transition-colors ${
          language === "en" ? "bg-blue-500" : "bg-green-500"
        }`}
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
            language === "en" ? "translate-x-0" : "translate-x-6"
          }`}
        ></div>
      </div>
    </div>
  );
}
