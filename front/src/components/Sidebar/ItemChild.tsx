import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { m } from "framer-motion";
import classNames from "classnames";

type Props = {
  items: ItemsProps;
  open?: any;
};

type ItemsProps = {
  name: string;
  link?: string;
  icon?: string;
}[];

const NavItem = ({ items }: Props) => {
  const navigate = useNavigate();
  const isActive = useLocation().pathname;

  return (
    <>
      {items.map((item: any) => {
        const active = isActive === item.link;

        return (
          <m.li
            key={item.name}
            whileTap={{ scale: 0.97 }}
            className={classNames(active && `bordered`)}
            onClick={() => navigate(item.link)}
          >
            <div className="pl-8">
              {item.icon && <Icon icon={item.icon} />}
              {item.name}
            </div>
          </m.li>
        );
      })}
    </>
  );
};

export default NavItem;
