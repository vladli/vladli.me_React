import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { AnimatePresence, m } from "framer-motion";

import NavItemChild from "./NavItemChild";
import classNames from "classnames";

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
  subcontainer: `text-white cursor-pointer pl-6 py-3 leading-3 tracking-normal rounded-[10px] 
    w-56 m-2 
    hover:bg-gray-500`,

  item: "flex items-center text-base font-semibold select-none",
};

const NavItem: React.FC<NavItemProps> = ({ items }) => {
  const { name, link, icon, submenu } = items;
  const isActive: boolean = useLocation().pathname === link;
  const location = useLocation().pathname;
  const [open, setOpen] = React.useState(false);

  const containerClass = `text-white cursor-pointer pl-6 py-3 leading-3 tracking-normal rounded-[10px] 
  w-56 mb-1 mx-2
  hover:bg-gray-500`;

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
    closed: { opacity: 0, y: -5, transition: { duration: 0.2 } },
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
          <m.li
            whileTap={{ scale: 0.97 }}
            className={classNames(containerClass, isActive && `bg-gray-600`)}
          >
            <div className={styles.item}>
              {icon && <Icon icon={icon} />}
              <span className="ml-2">{name}</span>
            </div>
          </m.li>
        </Link>
      ) : (
        <>
          <m.div
            whileTap={{ scale: 0.97 }}
            className={styles.subcontainer}
            onClick={() => setOpen(!open)}
          >
            <div className={styles.item}>
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
          <AnimatePresence>
            {open && (
              <m.ul
                variants={itemVariants}
                animate={open ? "open" : "closed"}
                initial="closed"
                exit="closed"
              >
                <NavItemChild items={submenu} />
              </m.ul>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default NavItem;
