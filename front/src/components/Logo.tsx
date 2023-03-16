import clsx from "clsx";
import { forwardRef } from "react";

//@ts-ignore
import LogoImage from "../assets/logo.svg";

type Props = React.HtmlHTMLAttributes<HTMLImageElement> & {
  size?: number;
  className?: string;
};

const Logo = forwardRef<HTMLImageElement, Props>(
  ({ size = 4, className }, ref) => {
    return (
      <div className={clsx("select-none", className)}>
        <img
          ref={ref}
          className="w-full"
          style={{ height: size + "rem" }}
          src={LogoImage}
          alt="Logo"
        />
      </div>
    );
  }
);

export default Logo;
