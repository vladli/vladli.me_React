import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentSize } from "components/@types";

export type BottomNavigationProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: ComponentSize;
};

const BottomNavigation = forwardRef<HTMLDivElement, BottomNavigationProps>(
  ({ size, className, children, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      "btm-nav",
      clsx({
        [`btm-nav-${size}`]: size,
      }),
      className
    );

    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    );
  }
);

export type BottomNavigationLabelProps = React.HTMLAttributes<HTMLSpanElement>;

const BottomNavigationLabel = forwardRef<
  HTMLSpanElement,
  BottomNavigationLabelProps
>(({ children, className, ...props }, ref): JSX.Element => {
  const classes = twMerge("btm-nav-label", className);
  return (
    <span {...props} className={classes} ref={ref}>
      {children}
    </span>
  );
});

BottomNavigation.displayName = "BottomNavigation";
export default Object.assign(BottomNavigation, {
  Label: BottomNavigationLabel,
});
