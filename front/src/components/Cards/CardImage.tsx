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
  const [loaded, setloaded] = React.useState(false);
  return (
    <div className="h-[220px] max-w-sm select-none">
      {!loaded && blured && (
        <BlurhashCanvas
          hash={blured}
          className={`h-full w-full rounded-t-lg ${
            loaded ? "hidden" : "visible"
          }`}
        />
      )}
      <img
        src={image}
        className={`h-full w-full rounded-t-lg ${
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
