import React from "react";

interface ICardAction {
  children: React.ReactNode;
}

const CardAction: React.FC<ICardAction> = ({ children }) => {
  return <div>{children}</div>;
};

export default CardAction;
