import React from "react";

const useDarkTheme = () => {
  const [theme, setTheme] = React.useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme] as const;
};

export default useDarkTheme;
