import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { AnimatePresence, m } from "framer-motion";

import ItemChild from "./ItemChild";
import clsx from "clsx";

type Props = {
  items: ItemsProps;
  setMobileNav: any;
};

type ItemsProps = {
  name: string;
  link: string;
  icon?: string;
  submenu?: { name: string; link: string; icon?: string }[];
};

const NavItem = ({ items, setMobileNav }: Props) => {
  const { name, link, icon, submenu } = items;
  const isActive: boolean = useLocation().pathname === link;
  const location = useLocation().pathname;
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const navigateTo = (link: string) => {
    navigate(link);
    setMobileNav(false);
  };
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
        <li
          key={link}
          className={clsx(isActive && `bordered`)}
          onClick={() => navigateTo(link)}
        >
          <div>
            {icon && <Icon icon={icon} />}
            {name}
          </div>
        </li>
      ) : (
        <>
          <li key={link} onClick={() => setOpen(!open)}>
            <div>
              <m.div
                variants={{ open: { rotate: 90 }, closed: { rotate: 0 } }}
                animate={open ? "open" : "closed"}
                transition={{ duration: 0.2 }}
              >
                <Icon icon="material-symbols:arrow-forward-ios-rounded" />
              </m.div>
              {name}
            </div>
          </li>
          <AnimatePresence>
            {open && (
              <m.ul
                variants={itemVariants}
                animate={open ? "open" : "closed"}
                initial="closed"
                exit="closed"
              >
                <ItemChild items={submenu} {...{ setMobileNav }} />
              </m.ul>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default NavItem;
