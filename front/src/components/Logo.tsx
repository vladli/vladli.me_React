import clsx from "clsx";
import styled from "styled-components";

//@ts-ignore
import LogoImage from "../assets/logo.svg";

const Image = styled.img`
  width: 100%;
  height: ${(props) => props.height}rem;
`;

type Props = {
  height?: number;
  className?: string;
};

const Logo = ({ height = 4, className }: Props) => {
  return (
    <div className={clsx("select-none", className)}>
      <Image src={LogoImage} alt="Logo" height={height} />
    </div>
  );
};

export default Logo;
