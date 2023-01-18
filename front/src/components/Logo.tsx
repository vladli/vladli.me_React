import styled from "styled-components";

//@ts-ignore
import LogoImage from "../assets/logo.svg";

const Image = styled.img`
  width: 100%;
  height: ${(props) => props.height}rem;
`;

const Logo = ({ height = 4 }: { height?: number }) => {
  return (
    <div className="select-none">
      <Image src={LogoImage} alt="Logo" height={height} />
    </div>
  );
};

export default Logo;
