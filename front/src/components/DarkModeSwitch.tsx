import { Icon } from "@iconify/react";
import { m } from "framer-motion";
import React from "react";
import useDarkTheme from "../hooks/useDarkTheme";

const DarkModeSwitch = () => {
  const [colorTheme, setTheme] = useDarkTheme();
  const [, setDarkSide] = React.useState(colorTheme === "light" ? true : false);
  const toggleDarkMode = (checked: any) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <m.div
      className="cursor-pointer select-none"
      variants={{ light: { rotate: 0 }, dark: { rotate: 180 } }}
      animate={colorTheme === "light" ? "light" : "dark"}
      transition={{ duration: 0.3 }}
      onClick={toggleDarkMode}
    >
      <Icon icon="mdi:theme-light-dark" width={30} color="white" />
    </m.div>
  );
};

export default DarkModeSwitch;
