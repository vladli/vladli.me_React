import clsx from "clsx";
import { forwardRef, useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { twMerge } from "tailwind-merge";

type Props = {
  image: string;
  blured?: string;
  width?: number;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Image = forwardRef<HTMLImageElement, Props>(
  ({ image, blured, height, width, loading = "lazy", ...rest }) => {
    const [loaded, setloaded] = useState(true);
    return (
      <div className="select-none" style={{ height: height, width: width }}>
        {loaded && blured && (
          <BlurhashCanvas
            hash={blured}
            className={twMerge(
              "h-full w-full rounded-t-lg",
              clsx({
                hidden: !loaded,
              })
            )}
          />
        )}
        <img
          src={image}
          className={twMerge(
            "h-full w-full rounded-t-lg",
            clsx({
              hidden: !loaded,
            })
          )}
          alt=""
          {...rest}
          onLoad={() => setloaded(false)}
        />
      </div>
    );
  }
);

export default Image;
