import { ReactNode } from "react";
import CardAction from "./CardAction";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
interface ICard {
  children: ReactNode;
}

const Card = ({ children }: ICard) => {
  return (
    <div className="min-w-[300px] max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      {children}
    </div>
  );
};

Card.Action = CardAction;
Card.Body = CardBody;
Card.Header = CardHeader;
Card.Image = CardImage;

export default Card;
