import React from "react";

import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Box = ({ children, className }: Props) => {
  return (
    <div className={clsx("card", "bg-base-100 shadow-xl", className)}>
      {children}
    </div>
  );
};

export default Box;
