import React from "react";
import NavItem from "./NavItem";
import MenuConfig from "../../MenuConfig";

interface NavigationProps {}
const Navigation: React.FC<NavigationProps> = () => {
  return (
    <>
      <ul>
        {MenuConfig.map<any>((menu) => (
          <NavItem key={menu.name} items={menu} />
        ))}
      </ul>
    </>
  );
};

export default Navigation;
