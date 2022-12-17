import { ReactNode } from "react";
import Item from "./Item";
interface IGrid {
  children: ReactNode;
}

const Grid = ({ children }: IGrid) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {children}
    </div>
  );
};

Grid.Item = Item;

export default Grid;
