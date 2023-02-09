import React from "react";
import classNames from "classnames";

const Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
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
