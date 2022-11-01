/** @jsxImportSource @emotion/react */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import tw from "twin.macro";
import { Icon } from "@iconify/react";
import NavItemChild from "./NavItemChild";

type NavItemProps = {
  items: ItemsProps;
};

type ItemsProps = {
  name: string;
  link: string;
  icon?: string;
  submenu?: any;
};

const styles = {
  container: (isActive: boolean) => [
    tw`text-white cursor-pointer pl-6 py-3 leading-3 tracking-normal rounded-[10px] 
    w-56 m-auto mb-1 mx-2
    hover:bg-gray-500`,
    isActive && tw`bg-gray-600`,
  ],
  subcontainer: [
    tw`text-white cursor-pointer pl-6 py-3 leading-3 tracking-normal rounded-[10px] 
    w-56 m-auto mb-1 mx-2  
    hover:bg-gray-500`,
  ],
  item: [tw`flex items-center text-base font-semibold select-none`],
};

const NavItem: React.FC<NavItemProps> = ({ items }) => {
  const { name, link, icon, submenu } = items;
  const isActive: boolean = useLocation().pathname === link;
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {!submenu ? (
        <li css={styles.container(isActive)}>
          <Link to={link}>
            <div css={styles.item}>
              {icon && <Icon icon={icon} />}
              <span className="ml-2">{name}</span>
            </div>
          </Link>
        </li>
      ) : (
        <>
          <div css={styles.subcontainer} onClick={() => setOpen(!open)}>
            <div css={styles.item}>
              <Icon
                icon={
                  open
                    ? "eva:arrow-ios-downward-fill"
                    : "eva:arrow-ios-forward-fill"
                }
              />
              <span className="ml-2">{name}</span>
            </div>
          </div>
          {open && (
            <ul>
              {submenu.map((item: any) => {
                return <NavItemChild key={item.name} items={item} />;
              })}
            </ul>
          )}
        </>
      )}
    </>
  );
};

export default NavItem;
