import Divider from "../Divider";

type Props = {
  children: React.ReactNode;
};

const CardAction = ({ children }: Props) => {
  return (
    <>
      <Divider className="my-4 " />
      <div className="card-actions">{children}</div>
    </>
  );
};

export default CardAction;
