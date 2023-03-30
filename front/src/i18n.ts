import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";

if (localStorage.getItem("lang") === null) {
  localStorage.setItem("lang", "en");
}

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: false,
    ns: ["admin", "auth", "beginnerProjects", "main"],
    load: "languageOnly",
    fallbackLng: "en",
    lng: localStorage.getItem("lang")!,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
