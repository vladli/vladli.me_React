import Swap from "./Swap";
import { useTheme } from "context/ThemeContext";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [darkSide, setDarkSide] = useState(theme === "cmyk" ? false : true);
  const toggleDarkMode = () => {
    setTheme(theme === "cmyk" ? "halloween" : "cmyk");
  };
  useEffect(() => {
    setDarkSide(theme === "cmyk" ? false : true);
  }, [theme]);
  return (
    <Swap
      onElement={<MdLightMode size={32} />}
      offElement={<MdDarkMode size={32} />}
      rotate
      active={darkSide}
      action={toggleDarkMode}
    />
  );
};

export default DarkModeSwitch;
