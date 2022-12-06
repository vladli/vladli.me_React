import React, { ReactNode } from "react";
interface ICard {
  children: ReactNode;
}

const Card: React.FC<ICard> = ({ children }) => {
  return (
    <div className="flex flex-col min-w-[300px] max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      {children}
    </div>
  );
};

export default Card;
