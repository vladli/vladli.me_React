import { createContext, useContext, useEffect, useState } from "react";

type ContextState = {
  theme: string;
  setTheme: any;
};

const ThemeContext = createContext<ContextState | undefined>(undefined);

const ThemeProvider = ({ children }: { children?: React.ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "halloween" ? "winter" : "halloween";

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("Auth context must be use inside AuthProvider");

  return { ...context };
};

export default ThemeContext;
export { ThemeProvider, useTheme };
