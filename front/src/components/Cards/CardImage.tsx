/** @jsxImportSource @emotion/react */
import React from "react";
import { BlurhashCanvas } from "react-blurhash";
import tw from "twin.macro";
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
  const [loaded, setloaded] = React.useState(false);
  return (
    <div className="max-w-sm h-[220px] select-none">
      {!loaded && blured && (
        <BlurhashCanvas
          hash={blured}
          className={`rounded-t-lg w-full h-full ${
            loaded ? "hidden" : "visible"
          }`}
        />
      )}
      <img
        src={image}
        className={`rounded-t-lg w-full h-full ${
          !loaded ? "hidden" : "visible"
        }`}
        alt=""
        {...rest}
        onLoad={() => setloaded(true)}
      />
    </div>
  );
};

export default CardImage;
