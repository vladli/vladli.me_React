import { Icon } from "@iconify/react";
import classNames from "classnames";
import { m } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import TopMenu from "../../config/TopMenu";
import NavTopChild from "./NavTopChild";

const NavigationTop = ({ className }: { className?: string }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <nav
      className={classNames(
        "absolute right-4 mt-2 flex select-none flex-row space-x-8 p-4",
        className
      )}
    >
      {TopMenu.map((item) =>
        !item.submenu ? (
          <div key={item.name} className="px-2">
            <Link to={item.link}>{item.name}</Link>
          </div>
        ) : (
          <div key={item.name}>
            <div className="flex items-center">
              <span
                className="cursor-pointer pr-1"
                onClick={() => setOpen(!open)}
              >
                {item.name}
              </span>
              <m.div
                variants={{ open: { rotate: 90 }, closed: { rotate: 0 } }}
                animate={open ? "open" : "closed"}
                transition={{ duration: 0.2 }}
              >
                <Icon icon="material-symbols:arrow-forward-ios-rounded" />
              </m.div>
            </div>
            {open && <NavTopChild items={item.submenu} />}
          </div>
        )
      )}
    </nav>
  );
};

export default NavigationTop;
