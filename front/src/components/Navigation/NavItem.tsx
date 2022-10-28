import { type } from "os";
import React from "react";

type NavItemProps = {
  name: string;
  link?: string;
  icon?: string;
};
const NavItem: React.FC<NavItemProps> = ({ name, link, icon }) => {
  return (
    <li className="cursor-pointer pl-6 pb-4 pt-5 text-sm leading-3 tracking-normal text-white text-indigo-700 focus:text-indigo-700 focus:outline-none">
      <div className="flex items-center">
        <span className="ml-2">{name}</span>
      </div>
    </li>
  );
};

export default NavItem;
