import classNames from "classnames";
import styled from "styled-components";

//@ts-ignore
import LogoImage from "../assets/logo.svg";

const Image = styled.img`
  width: 100%;
  height: ${(props) => props.height}rem;
`;

const Logo = ({
  height = 4,
  className,
}: {
  height?: number;
  className?: string;
}) => {
  const divClass = classNames("select-none", className);
  return (
    <div className={divClass}>
      <Image src={LogoImage} alt="Logo" height={height} />
    </div>
  );
};

export default Logo;
