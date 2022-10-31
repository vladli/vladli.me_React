import React from "react";
//@ts-ignore
import LogoImage from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="w-32 cursor-pointer" onClick={() => alert("a")}>
      <img src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
