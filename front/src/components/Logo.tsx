import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//@ts-ignore
import LogoImage from "../assets/logo.svg";
import { PATH_PAGE } from "../router/paths";

const Image = styled.img`
  width: 100%;
  height: ${(props) => props.height}rem;
`;

const Logo = ({ height = 4 }: { height?: number }) => {
  //const navigate = useNavigate();
  return (
    <div
      className={`cursor-pointer select-none`}
      //onClick={() => navigate(PATH_PAGE.root)}
    >
      <Image src={LogoImage} alt="Logo" height={height} />
    </div>
  );
};

export default Logo;
