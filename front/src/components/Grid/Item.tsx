import React, { ReactNode } from "react";

export interface IItem {
  children: ReactNode;
}

const Item: React.FC<IItem> = ({ children }) => {
  return <div className="justify-center">{children}</div>;
};

export default Item;
