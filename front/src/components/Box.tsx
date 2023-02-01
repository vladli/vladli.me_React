import React from "react";
import classNames from "classnames";

const Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col rounded-lg border shadow-md",
        "border-gray-200 bg-slate-400",
        "dark:border-gray-800 dark:bg-dark-mainBg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
