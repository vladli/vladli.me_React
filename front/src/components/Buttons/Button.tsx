import tw from "twin.macro";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined";
  size?: "small" | "medium" | "large";
  gradientMono?: "blue" | "green" | "red" | "purple" | undefined;
  gradientDuo?: "blue" | "green" | "red" | "purple" | undefined;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  children: React.ReactNode;
  [key: string]: any;
}

const containerVariants = {
  // Named class sets
  contained: tw`bg-indigo-700 hover:bg-indigo-600 `,
  outlined: tw`hover:border-indigo-600 hover:text-indigo-600 border border-indigo-700 `,
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
};

const ButtonStyled = styled.button<ButtonProps>(
  ({
    variant = "contained",
    size = "medium",
    disabled = false,
    gradientMono = undefined,
    gradientDuo = undefined,
  }) => [
    tw`transition duration-150 ease-in-out rounded px-4 py-2 text-white`,
    textSize[size],
    disabled ? tw`cursor-not-allowed` : undefined,
    !gradientMono && !gradientDuo && containerVariants[variant],
    gradientMono && gradientMonoVariants[gradientMono],
    gradientDuo && gradientDuoVariants[gradientDuo],
  ]
);

const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  disabled,
  ...rest
}) => {
  return (
    <ButtonStyled
      {...rest}
      className="inline-flex select-none items-center font-semibold"
      disabled={disabled}
    >
      {leftIcon && <Icon icon={leftIcon} width={16} />}
      <span className="px-2">{children}</span>
      {rightIcon && <Icon icon={rightIcon} width={16} />}
    </ButtonStyled>
  );
};

export default Button;
