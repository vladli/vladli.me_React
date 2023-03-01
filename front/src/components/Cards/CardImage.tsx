import React from "react";
import { BlurhashCanvas } from "react-blurhash";

type Props = {
  image: string;
  blured?: string;
  width?: number;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const CardImage = ({ image, blured, loading = "lazy", ...rest }: Props) => {
  const [loaded, setloaded] = React.useState(false);
  return (
    <figure className="h-[220px] max-w-sm select-none">
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
    </figure>
  );
};

export default CardImage;
