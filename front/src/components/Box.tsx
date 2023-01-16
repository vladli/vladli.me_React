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
    "flex flex-col rounded-lg border shadow-md",
    "border-gray-200 bg-slate-400",
    "dark:border-gray-700 dark:bg-gray-800",
    className
  );
  return <div className={divClass}>{children}</div>;
};

export default Box;
