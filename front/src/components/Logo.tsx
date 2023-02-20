import classNames from "classnames";
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
    <div className={classNames("select-none", className)}>
      <Image src={LogoImage} alt="Logo" height={height} />
    </div>
  );
};

export default Logo;
