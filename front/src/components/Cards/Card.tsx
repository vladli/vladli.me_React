import React, { ReactNode } from "react";
import Divider from "../Divider";

interface ICard {
  children: ReactNode;
}

const Card: React.FC<ICard> = ({ children }) => {
  let child = React.Children.toArray(children);
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      {child[0]} {/*CardImage */}
      <div className="p-5">
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {child[1]} {/*Head */}
          {child[2]} {/*Body */}
          <Divider />
          {child[3]} {/*CardAction */}
        </div>
      </div>
    </div>
  );
};

export default Card;
