import React from "react";
import { BlurhashCanvas } from "react-blurhash";

interface IImage extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: string;
  blured?: string;
  width?: number;
}

const Image: React.FC<IImage> = ({
  image,
  blured,
  height,
  width,
  loading = "lazy",
  ...rest
}) => {
  const [loaded, setloaded] = React.useState(true);
  return (
    <div className="select-none" style={{ height: height, width: width }}>
      {loaded && blured && (
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
        onLoad={() => setloaded(false)}
      />
    </div>
  );
};

export default Image;
