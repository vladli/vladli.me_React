import React from "react";

interface ICardImage extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: string;
}

const CardImage: React.FC<ICardImage> = ({ image, ...rest }) => {
  return <img className="rounded-t-lg" src={image} alt="" {...rest} />;
};

export default CardImage;
