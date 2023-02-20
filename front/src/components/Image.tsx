import React from "react";
import { BlurhashCanvas } from "react-blurhash";

type Props = {
  image: string;
  blured?: string;
  width?: number;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Image = ({
  image,
  blured,
  height,
  width,
  loading = "lazy",
  ...rest
}: Props) => {
  const [loaded, setloaded] = React.useState(true);
  return (
    <div className="select-none" style={{ height: height, width: width }}>
      {loaded && blured && (
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
        onLoad={() => setloaded(false)}
      />
    </div>
  );
};

export default Image;
