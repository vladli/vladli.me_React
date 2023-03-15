import { Icon } from "@iconify/react";
import Swap from "./Swap";
import { useTheme } from "context/ThemeContext";
import { useEffect, useState } from "react";

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
      onElement={<Icon icon="material-symbols:light-mode" width={32} />}
      offElement={<Icon icon="material-symbols:dark-mode" width={32} />}
      rotate
      active={darkSide}
      action={toggleDarkMode}
    />
  );
};

export default DarkModeSwitch;
