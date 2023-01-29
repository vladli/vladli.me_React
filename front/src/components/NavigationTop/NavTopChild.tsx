import React from "react";
import { Link } from "react-router-dom";

const NavTopChild = ({ items }: any) => {
  return (
    <div className="z-10 rounded-lg bg-gray-700 p-2">
      {items.map((item: any) => (
        <Link key={item.name} to={item.link}>
          <div className="">{item.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default NavTopChild;
