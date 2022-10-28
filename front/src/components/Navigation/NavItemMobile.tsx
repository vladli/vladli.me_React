import { type } from "os";
import React from "react";

type NavItemMobileProps = {
  name: string;
  link?: string;
  icon?: string;
};
const NavItemMobile: React.FC<NavItemMobileProps> = ({ name, link, icon }) => {
  return (
    <li className="cursor-pointer py-2 pl-6 text-sm leading-3 tracking-normal text-gray-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
      <div className="flex items-center">
        <div className="h-6 w-6 md:h-8 md:w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-code"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="7 8 3 12 7 16" />
            <polyline points="17 8 21 12 17 16" />
            <line x1={14} y1={4} x2={10} y2={20} />
          </svg>
        </div>
        <span className="ml-2 text-base md:text-2xl xl:text-base">{name}</span>
      </div>
    </li>
  );
};

export default NavItemMobile;
