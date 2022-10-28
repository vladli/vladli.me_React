import tw from "twin.macro";
import styled from "styled-components";
interface ButtonProps {
  variant?: "contained" | "outlined";
  size?: "small" | "medium" | "large";
}

const containerVariants = {
  // Named class sets
  contained: tw`bg-indigo-700 hover:bg-indigo-600 text-white`,
  outlined: tw`bg-white text-indigo-700 hover:border-indigo-600 hover:text-indigo-600 border border-indigo-700 `,
};

const textSize = {
  small: tw`text-xs`,
  medium: tw`text-sm`,
  large: tw`text-base`,
};

const Button = styled.button<ButtonProps>(
  ({ variant = "contained", size = "medium" }) => [
    tw`mx-2 my-2 transition duration-150 ease-in-out rounded px-6 py-2`,
    containerVariants[variant],
    textSize[size],
  ]
);

export default Button;
