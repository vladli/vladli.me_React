import classNames from "classnames";

const Divider = ({
  vertical,
  className,
}: {
  vertical?: boolean;
  className?: string;
}) => {
  if (vertical) {
    return (
      <div
        className={classNames(
          "w-px border-0 bg-gray-200 dark:bg-neutral-800",
          className
        )}
      />
    );
  } else {
    return (
      <hr
        className={classNames(
          "h-px border-0 bg-gray-200 dark:bg-neutral-800",
          className
        )}
      />
    );
  }
};

export default Divider;
