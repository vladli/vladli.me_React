import tw from "twin.macro";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import React from "react";
import { m } from "framer-motion";
import classNames from "classnames";

type Color = "blue" | "gray" | undefined;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined";
  size?: "small" | "medium" | "large" | "full";
  type?: "button" | "submit";
  color?: Color;
  gradientMono?: "blue" | "green" | "red" | "purple" | undefined;
  gradientDuo?: "blue" | "green" | "red" | "purple" | undefined;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const colorVariants = (variant = "contained", color: Color) => {
  let colors;
  if (variant === "contained") {
    switch (color) {
      case "blue":
        return tw`bg-primary-600 hover:bg-primary-700`;
      case "gray":
        return tw`bg-neutral-600 hover:bg-neutral-700`;
    }
  } else if (variant === "outlined") {
    switch (color) {
      case "blue":
        return tw`hover:border-primary-600 hover:text-primary-600 border border-primary-700`;
      case "gray":
        return tw`hover:border-neutral-600 hover:text-neutral-600 border border-neutral-700`;
    }
  }
  return colors;
};

const gradientMonoVariants = {
  blue: tw`bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br`,
  green: tw`bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br`,
  red: tw`bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br`,
  purple: tw`bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br`,
};

const gradientDuoVariants = {
  blue: tw`bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl`,
  green: tw`bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl`,
  red: tw`bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl`,
  purple: tw`bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl`,
};

const textSize = {
  small: tw`text-xs`,
  medium: tw`text-sm`,
  large: tw`text-base`,
  full: tw`w-[100%] justify-center`,
};

const ButtonStyled = styled.button<ButtonProps>`
  ${({ variant, color }) =>
    color ? colorVariants(variant, color) : colorVariants("contained", "blue")}
  ${({ size }) => (size ? textSize[size] : textSize["medium"])}
  ${({ disabled }) =>
    disabled && tw`cursor-not-allowed bg-neutral-800 hover:bg-neutral-800`}
`;
const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,

  className,
  type = "button",
  disabled,
  ...rest
}) => {
  return (
    <m.div whileTap={!disabled ? { scale: 0.97 } : undefined}>
      <ButtonStyled
        {...rest}
        type={type}
        disabled={disabled}
        className={classNames(
          "inline-flex select-none items-center font-semibold",
          "rounded p-2 text-white transition duration-150 ease-in-out",
          className
        )}
      >
        {leftIcon && <Icon icon={leftIcon} width={16} />}
        <span className="px-2">{children}</span>
        {rightIcon && <Icon icon={rightIcon} width={16} />}
      </ButtonStyled>
    </m.div>
  );
};

export default Button;
