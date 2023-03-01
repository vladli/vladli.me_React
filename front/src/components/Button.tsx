import tw from "twin.macro";
import { Icon } from "@iconify/react";
import * as React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ComponentColor, ComponentShape, ComponentSize } from "./@types";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> & {
  href?: string;
  shape?: ComponentShape;
  size?: ComponentSize;
  variant?: "outline" | "link";
  color?: ComponentColor;
  fullWidth?: boolean;
  responsive?: boolean;
  animation?: boolean;
  loading?: boolean;
  active?: boolean;
  leftIcon?: string;
  rightIcon?: string;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      href,
      shape,
      size,
      variant,
      color = "primary",
      leftIcon,
      rightIcon,
      fullWidth,
      responsive,
      animation = true,
      loading,
      active,
      disabled,
      className,
      type,
      ...rest
    } = props;
    const classes = twMerge(
      "btn",
      className,
      clsx({
        [`btn-${size}`]: size,
        [`btn-${shape}`]: shape,
        [`btn-${variant}`]: variant,
        [`btn-${color}`]: color,
        "btn-block": fullWidth,
        "btn-xs md:btn-sm lg:btn-md xl:btn-lg": responsive,
        "no-animation": !animation,
        "btn-active": active,
        "btn-disabled": disabled,
        loading: loading,
      })
    );
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={classes}
        {...rest}
      >
        {leftIcon && <Icon icon={leftIcon} width={16} />}
        <span className="px-2">{children}</span>
        {rightIcon && <Icon icon={rightIcon} width={16} />}
      </button>
    );
  }
);

export default Button;
Button.displayName = "Button";
