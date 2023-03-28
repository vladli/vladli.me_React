import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

const Box = forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...rest }, ref) => {
    const classes = twMerge("bg-base-100 shadow-xl", className);
    return (
      <div ref={ref} className={classes} {...rest}>
        {children}
      </div>
    );
  }
);

export default Box;
