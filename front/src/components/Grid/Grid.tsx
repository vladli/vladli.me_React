import React, { ReactNode } from "react";

interface IGrid {
  children: ReactNode;
}

const Grid: React.FC<IGrid> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default Grid;
