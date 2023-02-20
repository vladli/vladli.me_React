import React from "react";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Box = ({ children, className }: Props) => {
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

export default Box;
