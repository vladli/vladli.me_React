import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "AMaKc2V2QnWNSG6rEXw_vA";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "ru",

    ns: ["default", "UI"],
    defaultNS: "UI",

    supportedLngs: ["en", "ru", "ko"],

    backend: {
      loadPath: loadPath,
    },
    interpolation: {
      escapeValue: false,
    },
  });
