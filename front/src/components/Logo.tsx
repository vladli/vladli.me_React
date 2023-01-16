import React from "react";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import LogoImage from "../assets/logo.svg";
import { PATH_PAGE } from "../router/paths";

const Logo = ({ size = 4 }: { size?: number }) => {
  //const navigate = useNavigate();
  return (
    <div
      className={`cursor-pointer select-none`}
      //onClick={() => navigate(PATH_PAGE.root)}
    >
      <img src={LogoImage} alt="Logo" className={`h-[${size}rem] w-full`} />
    </div>
  );
};

export default Logo;
