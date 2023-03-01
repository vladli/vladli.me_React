import React from "react";

const useDarkTheme = () => {
  const [theme, setTheme] = React.useState(localStorage.theme);
  const colorTheme = theme === "halloween" ? "cmyk" : "halloween";
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme] as const;
};

export default useDarkTheme;
