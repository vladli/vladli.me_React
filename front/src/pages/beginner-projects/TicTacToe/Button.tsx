import clsx from "clsx";
import Button from "components/Button";

type Props = {
  color: any;
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const BoardButton = ({ value, color, onClick, ...rest }: Props) => {
  return (
    <Button
      className={clsx({
        "btn-primary": !color,
        "btn-success": color,
      })}
      onClick={onClick}
      {...rest}
    >
      {value}
    </Button>
  );
};

export default BoardButton;
