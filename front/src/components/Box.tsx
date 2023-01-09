import React from "react";
import classNames from "classnames";

const Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  let divClass = classNames(
    "flex flex-col rounded-lg border border-gray-200 bg-white shadow-md",
    "dark:border-gray-700 dark:bg-gray-800",
    className
  );
  return <div className={divClass}>{children}</div>;
};

export default Box;
