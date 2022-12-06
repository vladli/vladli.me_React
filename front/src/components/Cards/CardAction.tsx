import React from "react";

interface ICardAction {
  children: React.ReactNode;
}

const CardAction: React.FC<ICardAction> = ({ children }) => {
  return (
    <div className="inline-flex items-center px-4 pb-4 select-none">
      {children}
    </div>
  );
};

export default CardAction;
