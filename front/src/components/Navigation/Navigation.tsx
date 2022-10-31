import styled from "styled-components";
import tw from "twin.macro";
import React from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

interface NavigationProps {}
const Navigation: React.FC<NavigationProps> = () => {
  return (
    <>
      {/* Navigation */}
      <ul className="flex list-none flex-col md:min-w-full md:flex-col">
        <NavItem name="Dashboard" link="/" icon="bxs:user-account" />
        <NavItem name="Login" />
      </ul>
    </>
  );
};

export default Navigation;
