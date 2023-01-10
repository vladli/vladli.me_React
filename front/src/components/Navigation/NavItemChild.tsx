import React from "react";
import { Link, useLocation } from "react-router-dom";
import tw from "twin.macro";
import { Icon } from "@iconify/react";
import { m } from "framer-motion";
import classNames from "classnames";

type NavItemChildProps = {
  items: ItemsProps;
  open?: any;
};

type ItemsProps = {
  name: string;
  link?: string;
  icon?: string;
}[];

const NavItem: React.FC<NavItemChildProps> = ({ items }) => {
  const isActive = useLocation().pathname;
  const divClassBase = `text-white cursor-pointer pl-12 py-3 leading-3 tracking-normal rounded-[10px] 
  w-56 m-auto mb-1 mx-2 
  hover:bg-gray-500`;

  return (
    <>
      {items.map((item: any) => {
        const active = isActive === item.link;
        let divClass = classNames(divClassBase, active && ` bg-gray-600`);
        return (
          <Link key={item.name} to={item.link}>
            <m.li whileTap={{ scale: 0.97 }} className={divClass}>
              <div className="flex select-none items-center text-base font-semibold">
                {item.icon && <Icon icon={item.icon} />}
                <span className="ml-2">{item.name}</span>
              </div>
            </m.li>
          </Link>
        );
      })}
    </>
  );
};

export default NavItem;
