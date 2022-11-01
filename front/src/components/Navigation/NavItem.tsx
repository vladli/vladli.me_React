/** @jsxImportSource @emotion/react */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import tw from "twin.macro";
import { Icon } from "@iconify/react";

type NavItemProps = {
  name: string;
  link: string;
  icon?: string;
  childrens?: any;
};

const styles = {
  container: (isActive: boolean) => [
    tw`text-white cursor-pointer pl-6 py-3 leading-3 tracking-normal rounded-[10px] 
    w-56 m-auto mb-1 mx-2
    hover:bg-gray-500`,
    isActive && tw`bg-gray-600`,
  ],
  item: [tw`flex items-center text-base font-semibold`],
};

const NavItem: React.FC<NavItemProps> = ({ name, link, icon, childrens }) => {
  const isActive: boolean = useLocation().pathname === link;
  console.log(childrens);
  if (childrens !== undefined) {
    return (
      <li css={styles.container(isActive)}>
        <Link to={link}>
          <div>
            <div css={styles.item}>
              {icon && <Icon icon={icon} />}
              <span className="ml-2">{name}</span>
            </div>
          </div>
        </Link>
      </li>
    );
  } else {
    return (
      <li css={styles.container(isActive)}>
        <Link to={link}>
          <div>
            <div css={styles.item}>
              {icon && <Icon icon={icon} />}
              <span className="ml-2">{name}</span>
            </div>
          </div>
        </Link>
      </li>
    );
  }
};

export default NavItem;
