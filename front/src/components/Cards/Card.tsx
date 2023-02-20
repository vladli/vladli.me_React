import classNames from "classnames";

import CardAction from "./CardAction";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: Props) => {
  return (
    <div
      className={classNames(
        "flex flex-col rounded-lg border shadow-md",
        "border-neutral-200 bg-light-secondaryBg",
        "dark:border-neutral-800 dark:bg-dark-mainBg",
        className
      )}
    >
      {children}
    </div>
  );
};

Card.Action = CardAction;
Card.Body = CardBody;
Card.Header = CardHeader;
Card.Image = CardImage;

export default Card;
