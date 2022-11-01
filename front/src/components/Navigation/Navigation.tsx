import styled from "styled-components";
import tw from "twin.macro";
import React from "react";
import NavItem from "./NavItem";
import NavItemChild from "./NavItemChild";
import { Link } from "react-router-dom";
import { PATH_AUTH } from "../../router/paths";
import MenuConfig from "../../MenuConfig";

interface NavigationProps {}
const Navigation: React.FC<NavigationProps> = () => {
  return (
    <>
      {/* Navigation */}
      <ul>
        {MenuConfig.map<any>((menu) => {
          return <NavItem key={menu.name} items={menu} />;
        })}
      </ul>
    </>
  );
};

export default Navigation;
