import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../src/assets/locales/en/translation.json";
import translationAR from "../src/assets/locales/ar/translation.json";
import translationFR from "../src/assets/locales/fr/translation.json";
import translationSP from "../src/assets/locales/sp/translation.json";

const fallbackLng = ["en"];
const availableLanguages = ["en", "ar", "fr", "sp"];

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
  fr: {
    translation: translationFR,
  },
  sp: {
    translation: translationSP,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true,
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
