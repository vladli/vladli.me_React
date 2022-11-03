import React from "react";

interface ICardHeader {
  children: React.ReactNode;
}

const CardHeader: React.FC<ICardHeader> = ({ children }) => {
  return (
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {children}
    </h5>
  );
};

export default CardHeader;
