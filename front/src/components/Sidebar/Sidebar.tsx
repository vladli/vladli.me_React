import {useState} from "react";

import Item from "./Item";
import MenuConfig from "../../config/MenuConfig";
import { useAuth } from "../../context/AuthContext";
import Logo from "components/Logo";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "router/paths";
import DarkModeSwitch from "components/DarkModeSwitch";
import UserInfo from "./UserInfo";

const Sidebar = ({ setMobileNav }: any) => {
  const { isAuthenticated, role } = useAuth();
  return (
    <div className="menu w-56 bg-base-100">
      <div className="hidden p-2 lg:flex">
        <div className="flex-none">
          <Link to={PATH_DASHBOARD.root.url}>
            <Logo />
          </Link>
        </div>
        <DarkModeSwitch />
      </div>
      {isAuthenticated && <UserInfo />}
      <ul className="font-semibold">
        {MenuConfig(role).map<any>((menu, index) => (
          <Item key={index} items={menu} {...{ setMobileNav }} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
