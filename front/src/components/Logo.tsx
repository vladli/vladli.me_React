import clsx from "clsx";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <div className={clsx("select-none", className)}>
      <div className="btn-ghost btn text-2xl normal-case">
        <span className="text-primary">vladli</span>.ME
      </div>
    </div>
  );
};

export default Logo;
