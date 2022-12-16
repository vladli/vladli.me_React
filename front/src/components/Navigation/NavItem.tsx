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
    w-56 mb-1 mx-2
    hover:bg-gray-500`,
    isActive && tw`bg-gray-600`,
  ],
  subcontainer: [
    tw`text-white cursor-pointer pl-6 py-3 leading-3 tracking-normal rounded-[10px] 
    w-56 m-2
    hover:bg-gray-500`,
  ],
  item: [tw`flex items-center text-base font-semibold select-none `],
};

const NavItem: React.FC<NavItemProps> = ({ items }) => {
  const { name, link, icon, submenu } = items;
  const isActive: boolean = useLocation().pathname === link;
  const location = useLocation().pathname;
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (submenu) {
      submenu.forEach((item: ItemsProps) => {
        if (item.link === location) {
          return setOpen(true);
        }
      });
    }
  }, [location, submenu]);

  return (
    <>
      {!submenu ? (
        <Link to={link}>
          <li css={styles.container(isActive)}>
            <div css={styles.item}>
              {icon && <Icon icon={icon} />}
              <span className="ml-2">{name}</span>
            </div>
          </li>
        </Link>
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
            <ul className="animate-openmenu">
              <NavItemChild items={submenu} />
            </ul>
          )}
        </>
      )}
    </>
  );
};

export default NavItem;
