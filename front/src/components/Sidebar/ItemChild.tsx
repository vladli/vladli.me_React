import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const isActive = useLocation().pathname;
  const divClassBase = `cursor-pointer pl-12 py-3 rounded-[10px] w-52 m-auto mb-1 mx-2 text-white 
  hover:bg-zinc-600`;

  return (
    <>
      {items.map((item: any) => {
        const active = isActive === item.link;

        return (
          <m.li
            key={item.name}
            whileTap={{ scale: 0.97 }}
            className={classNames(divClassBase, active && `bg-zinc-700`)}
            onClick={() => navigate(item.link)}
          >
            <div className="flex select-none items-center text-base font-semibold">
              {item.icon && <Icon icon={item.icon} />}
              <span className="ml-2">{item.name}</span>
            </div>
          </m.li>
        );
      })}
    </>
  );
};

export default NavItem;
