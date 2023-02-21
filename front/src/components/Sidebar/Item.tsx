import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { AnimatePresence, m } from "framer-motion";

import ItemChild from "./ItemChild";
import classNames from "classnames";

type Props = {
  items: ItemsProps;
};

type ItemsProps = {
  name: string;
  link: string;
  icon?: string;
  submenu?: { name: string; link: string; icon?: string }[];
};

const styles = {
  subcontainer: `text-white cursor-pointer pl-6 py-3 rounded-[10px] 
    w-52 m-2 
    transition duration-200 ease-in-out
    hover:bg-zinc-600`,

  item: "flex items-center text-base font-medium select-none",
};

const NavItem = ({ items }: Props) => {
  const { name, link, icon, submenu } = items;
  const isActive: boolean = useLocation().pathname === link;
  const location = useLocation().pathname;
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

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
        <m.li
          key={link}
          whileTap={{ scale: 0.97 }}
          className={classNames(
            `mx-2 mb-1 w-52 cursor-pointer rounded-[10px] py-3 pl-6 text-white 
            transition duration-200 ease-in-out
            hover:bg-zinc-600`,
            isActive && `bg-zinc-700`
          )}
          onClick={() => navigate(link)}
        >
          <div className={styles.item}>
            {icon && <Icon icon={icon} />}
            <span className="ml-2">{name}</span>
          </div>
        </m.li>
      ) : (
        <>
          <m.li
            key={link}
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
                <Icon icon="material-symbols:arrow-forward-ios-rounded" />
              </m.div>
              <span className="ml-2">{name}</span>
            </div>
          </m.li>
          <AnimatePresence>
            {open && (
              <li key={link}>
                <m.ul
                  variants={itemVariants}
                  animate={open ? "open" : "closed"}
                  initial="closed"
                  exit="closed"
                >
                  <ItemChild items={submenu} />
                </m.ul>
              </li>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default NavItem;
