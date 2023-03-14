import clsx from "clsx";

type Props = {
  horizontal?: boolean;
  children?: string;
};

const Divider = ({ horizontal, children }: Props) => {
  const classes = clsx("divider", horizontal && "divider-horizontal");

  return <div className={classes}>{children}</div>;
};

export default Divider;
