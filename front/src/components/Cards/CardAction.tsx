import React from "react";
import Divider from "../Divider";

interface ICardAction {
  children: React.ReactNode;
}

const CardAction: React.FC<ICardAction> = ({ children }) => {
  return (
    <>
      <Divider className="my-4 " />
      <div className="inline-flex select-none items-center px-4 pb-4">
        {children}
      </div>
    </>
  );
};

export default CardAction;
