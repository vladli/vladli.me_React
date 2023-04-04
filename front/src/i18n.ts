import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { z } from "zod";
import { makeZodI18nMap } from "zod-i18n-map";
import Backend from "i18next-http-backend";

if (localStorage.getItem("lang") === null) {
  localStorage.setItem("lang", "en");
}

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: false,
    ns: ["admin", "auth", "beginnerProjects", "main", "zod"],
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
z.setErrorMap(makeZodI18nMap({ ns: ["zod"] }));
export default i18n;
