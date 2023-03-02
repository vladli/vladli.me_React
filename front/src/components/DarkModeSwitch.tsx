import { Icon } from "@iconify/react";

import React from "react";
import useDarkTheme from "../hooks/useDarkTheme";
import Swap from "./Swap";

const DarkModeSwitch = () => {
  const [colorTheme, setTheme] = useDarkTheme();
  const [darkSide, setDarkSide] = React.useState(
    colorTheme === "cmyk" ? true : false
  );
  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkSide(colorTheme === "cmyk" ? true : false);
  };
  return (
    <Swap
      onElement={<Icon icon="material-symbols:light-mode" width={32} />}
      offElement={<Icon icon="material-symbols:dark-mode" width={32} />}
      rotate
      active={!darkSide}
      action={toggleDarkMode}
    />
  );
};

export default DarkModeSwitch;
