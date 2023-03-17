import clsx from "clsx";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <div className={clsx("select-none", className)}>
      <a className="btn-ghost btn text-2xl normal-case">
        <span className="text-primary">vladli</span>.ME
      </a>
    </div>
  );
};

export default Logo;
