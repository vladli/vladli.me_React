import React from "react";

interface ICardHeader {
  children: React.ReactNode;
}

const CardHeader: React.FC<ICardHeader> = ({ children }) => {
  return (
    <div className="m-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {children}
    </div>
  );
};

export default CardHeader;
