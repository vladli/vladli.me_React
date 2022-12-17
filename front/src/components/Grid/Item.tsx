import React, { ReactNode } from "react";

export interface IItem {
  children: ReactNode;
}

const Item: React.FC<IItem> = ({ children }) => {
  return <div>{children}</div>;
};

export default Item;
