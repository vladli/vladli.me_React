import React from "react";
import useDarkTheme from "../hooks/useDarkTheme";
import Button from "./Buttons/Button";

const DarkModeSwitch = () => {
  const [colorTheme, setTheme] = useDarkTheme();
  const [darkSide, setDarkSide] = React.useState(
    colorTheme === "light" ? true : false
  );
  const toggleDarkMode = (checked: any) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <div>
      <Button variant="contained" onClick={toggleDarkMode}>
        Dar
      </Button>
    </div>
  );
};

export default DarkModeSwitch;
