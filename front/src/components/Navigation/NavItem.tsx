import React from "react";
import { useLocation, useMatch } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { Icon } from "@iconify/react";

type NavItemProps = {
  name: string;
  link?: string;
  icon?: string;
};

const StyledText = styled.li<any>(({ active }) => [
  tw`cursor-pointer pl-6 pb-4 pt-5 text-sm leading-3 tracking-normal  focus:text-black focus:outline-none`,
  active ? tw`text-indigo-700` : tw`text-black`,
]);

const NavItem: React.FC<NavItemProps> = ({ name, link, icon }) => {
  const location = useLocation();
  console.log(location.pathname === link);
  return (
    <StyledText active={location.pathname === link}>
      <div className="flex items-center">
        {icon ? <Icon icon={icon} /> : undefined}
        <span className="ml-2">{name}</span>
      </div>
    </StyledText>
  );
};

export default NavItem;
