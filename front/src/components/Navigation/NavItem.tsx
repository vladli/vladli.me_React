/** @jsxImportSource @emotion/react */
import React from "react";
import { useLocation } from "react-router-dom";
import tw from "twin.macro";
import { Icon } from "@iconify/react";

type NavItemProps = {
  name: string;
  link?: string;
  icon?: string;
};

const styles = {
  container: (active: any) => [
    tw`cursor-pointer pl-6 py-3 leading-3 tracking-normal bg-gray-700 rounded-[10px] 
    w-56 m-auto mb-1 mx-2
    hover:opacity-80
    focus:text-black focus:outline-none`,
    active ? tw`text-sky-500` : tw`text-white`,
  ],
  item: [tw`flex items-center text-base font-semibold`],
};

const NavItem: React.FC<NavItemProps> = ({ name, link, icon }) => {
  const active = useLocation().pathname === link;
  return (
    <li css={styles.container(active)}>
      <div css={styles.item}>
        {icon ? <Icon icon={icon} /> : undefined}
        <span className="ml-2">{name}</span>
      </div>
    </li>
  );
};

export default NavItem;
