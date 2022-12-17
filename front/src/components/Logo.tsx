import React from "react";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import LogoImage from "../assets/logo.svg";
import { ROOT_PAGE } from "../router/paths";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-28 cursor-pointer select-none"
      onClick={() => navigate(ROOT_PAGE)}
    >
      <img src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
