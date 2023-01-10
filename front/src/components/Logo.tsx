import React from "react";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import LogoImage from "../assets/logo.svg";
import { PATH_PAGE } from "../router/paths";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-28 cursor-pointer select-none"
      onClick={() => navigate(PATH_PAGE.root)}
    >
      <img src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
