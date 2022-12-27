import classNames from "classnames";

import CardAction from "./CardAction";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
interface ICard {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: ICard) => {
  let divClass = classNames(
    "flex flex-col rounded-lg border border-gray-200 bg-white shadow-md",
    "dark:border-gray-700 dark:bg-gray-800",
    className
  );
  return <div className={divClass}>{children}</div>;
};

Card.Action = CardAction;
Card.Body = CardBody;
Card.Header = CardHeader;
Card.Image = CardImage;

export default Card;
