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
  const divClassBase = `cursor-pointer pl-12 py-3 leading-3 tracking-normal rounded-[10px] w-56 m-auto mb-1 mx-2 
  text-white 
  hover:bg-sky-500 dark:hover:bg-zinc-600`;

  return (
    <>
      {items.map((item: any) => {
        const active = isActive === item.link;
        let divClass = classNames(
          divClassBase,
          active && ` bg-sky-600 dark:bg-zinc-700`
        );
        return (
          <m.li key={item.name} whileTap={{ scale: 0.97 }} className={divClass}>
            <Link to={item.link}>
              <div className="flex select-none items-center text-base font-semibold">
                {item.icon && <Icon icon={item.icon} />}
                <span className="ml-2">{item.name}</span>
              </div>
            </Link>
          </m.li>
        );
      })}
    </>
  );
};

export default NavItem;
