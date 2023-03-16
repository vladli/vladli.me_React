import clsx from "clsx";
import { forwardRef } from "react";

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

const Box = forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("card", "bg-base-100 shadow-xl", className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export default Box;
