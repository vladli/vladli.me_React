/** @jsxImportSource @emotion/react */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import tw from "twin.macro";
import { Icon } from "@iconify/react";

type NavItemChildProps = {
  items: ItemsProps;
  open?: any;
};

type ItemsProps = {
  name: string;
  link?: string;
  icon?: string;
}[];

const styles = {
  container: (isActive: boolean) => [
    tw`text-white cursor-pointer pl-12 py-3 leading-3 tracking-normal rounded-[10px] 
    w-56 m-auto mb-1 mx-2 
    hover:bg-gray-500`,
    isActive && tw`bg-gray-600`,
  ],
  item: [tw`flex items-center text-base font-semibold select-none`],
};

const NavItem: React.FC<NavItemChildProps> = ({ items }) => {
  const isActive = useLocation().pathname;
  let active = false;
  React.useEffect(() => {
    if (active) {
      console.log(active);
    }
  }, [active]);

  return (
    <>
      {items.map((item: any) => {
        active = isActive === item.link;
        return (
          <li key={item.name} css={styles.container(active)}>
            <div css={styles.item}>
              {item.icon && <Icon icon={item.icon} />}
              <span className="ml-2">{item.name}</span>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default NavItem;
