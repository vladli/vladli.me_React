import React from "react";

import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Box = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-lg border shadow-md",
        "bg-light-secondaryBg border-neutral-200",
        "dark:bg-dark-mainBg dark:border-neutral-800",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
