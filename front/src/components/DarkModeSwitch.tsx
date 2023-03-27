import Swap from "./Swap";
import { useTheme } from "context/ThemeContext";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [darkSide, setDarkSide] = useState(theme === "winter" ? false : true);
  const toggleDarkMode = () => {
    setTheme(theme === "winter" ? "halloween" : "winter");
  };
  useEffect(() => {
    setDarkSide(theme === "winter" ? false : true);
  }, [theme]);
  return (
    <div className="btn-ghost btn" onClick={toggleDarkMode}>
      <Swap
        onElement={<MdLightMode size={28} />}
        offElement={<MdDarkMode size={28} />}
        rotate
        active={darkSide}
      />
    </div>
  );
};

export default DarkModeSwitch;
