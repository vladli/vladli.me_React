/** @jsxImportSource @emotion/react */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import tw from "twin.macro";
import { Icon } from "@iconify/react";

type NavItemChildProps = {
  items: ItemsProps;
};

type ItemsProps = {
  name: string;
  link?: string;
  icon?: string;
};

const styles = {
  container: (isActive: boolean) => [
    tw`text-white cursor-pointer pl-12 py-3 leading-3 tracking-normal rounded-[10px] 
    w-56 m-auto mb-1 mx-2 
    hover:bg-gray-500`,
    isActive && tw`bg-gray-600`,
  ],
  item: [tw`flex items-center text-base font-semibold select-none`],
};

const NavItem: React.FC<NavItemChildProps> = ({ items }) => {
  const { name, link, icon } = items;
  const isActive: boolean = useLocation().pathname === link;
  return (
    <li css={styles.container(isActive)}>
      <div css={styles.item}>
        {icon && <Icon icon={icon} />}
        <span className="ml-2">{name}</span>
      </div>
    </li>
  );
};

export default NavItem;
