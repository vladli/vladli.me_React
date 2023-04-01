import { useState } from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "./Dropdown/Dropdown";

const getFlag = (country: any) => {
  switch (country) {
    case "en":
      return "🇺🇸";
    case "kr":
      return "🇰🇷";
    case "ru":
      return "🇷🇺";
    default:
      return "🇺🇸";
  }
};

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const defaultLanguage =
    localStorage.getItem("lang") !== null ? localStorage.getItem("lang") : "en";
  const [language, setLanguage] = useState(defaultLanguage);
  const changeLanguage = (lang: string) => () => {
    (document.activeElement as HTMLElement).blur();
    setLanguage(lang);
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle color="ghost">{getFlag(language)}</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={changeLanguage("en")}>🇺🇸</Dropdown.Item>
        <Dropdown.Item onClick={changeLanguage("kr")}>🇰🇷</Dropdown.Item>
        <Dropdown.Item onClick={changeLanguage("ru")}>🇷🇺</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSwitch;
