import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ar from "./locales/ar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },

    fallbackLng: "en",

    supportedLngs: ["en", "ar"],

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "flower-store-language",
    },

    interpolation: {
      escapeValue: false,
    },
  });

function syncDocumentLanguage(language) {
  const currentLanguage = language || i18n.resolvedLanguage || "en";

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage.startsWith("ar")
    ? "rtl"
    : "ltr";
}

// Apply the direction immediately if initialization has already completed.
if (i18n.isInitialized) {
  syncDocumentLanguage(i18n.resolvedLanguage);
}

i18n.on("initialized", () => {
  syncDocumentLanguage(i18n.resolvedLanguage);
});

i18n.on("languageChanged", syncDocumentLanguage);

export default i18n;
