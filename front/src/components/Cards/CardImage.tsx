/** @jsxImportSource @emotion/react */
import React from "react";
import { BlurhashCanvas } from "react-blurhash";
interface ICardImage extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: string;
  blured?: string;
  width?: number;
}

const CardImage: React.FC<ICardImage> = ({
  image,
  blured,
  loading = "lazy",
  ...rest
}) => {
  const [loaded, setloaded] = React.useState(true);
  return (
    <div className="max-w-sm h-[220px]">
      {loaded && blured && (
        <BlurhashCanvas hash={blured} className="rounded-t-lg w-full h-full" />
      )}
      <img
        src={image}
        className="rounded-t-lg w-full h-full"
        alt=""
        {...rest}
        onLoad={() => setloaded(false)}
      />
    </div>
  );
};

export default CardImage;
