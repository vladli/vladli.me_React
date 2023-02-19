import Item from "./Item";
import MenuConfig from "../../config/MenuConfig";
import { useAuth } from "../../context/AuthContext";
import React from "react";

const Sidebar = () => {
  const { role } = useAuth();

  return (
    <ul className="w-56">
      {MenuConfig(role).map<any>((menu, index) => (
        <Item key={index} items={menu} />
      ))}
    </ul>
  );
};

export default Sidebar;
