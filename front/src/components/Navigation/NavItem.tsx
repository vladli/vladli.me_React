/** @jsxImportSource @emotion/react */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import tw from "twin.macro";
import { Icon } from "@iconify/react";
import { m } from "framer-motion";

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

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 34,
      },
    },
    closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };
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
          <m.li whileTap={{ scale: 0.97 }} css={styles.container(isActive)}>
            <div css={styles.item}>
              {icon && <Icon icon={icon} />}
              <span className="ml-2">{name}</span>
            </div>
          </m.li>
        </Link>
      ) : (
        <>
          <m.div
            whileTap={{ scale: 0.97 }}
            css={styles.subcontainer}
            onClick={() => setOpen(!open)}
          >
            <div css={styles.item}>
              <m.div
                variants={{ open: { rotate: 90 }, closed: { rotate: 0 } }}
                animate={open ? "open" : "closed"}
                transition={{ duration: 0.2 }}
              >
                <Icon icon="eva:arrow-ios-forward-fill" />
              </m.div>
              <span className="ml-2">{name}</span>
            </div>
          </m.div>
          {open && (
            <m.ul
              variants={itemVariants}
              animate={open ? "open" : "closed"}
              initial="closed"
            >
              <NavItemChild items={submenu} />
            </m.ul>
          )}
        </>
      )}
    </>
  );
};

export default NavItem;
