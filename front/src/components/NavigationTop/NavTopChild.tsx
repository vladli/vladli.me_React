import React from "react";
import { Link } from "react-router-dom";

const NavTopChild = ({ items }: any) => {
  return (
    <div className="z-10  rounded-lg bg-menuBgDark p-2">
      {items.map((item: any) => (
        <Link key={item.name} to={item.link}>
          <div className="rounded-lg pl-2 hover:bg-bgDark">{item.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default NavTopChild;
