import Divider from "../Divider";

type Props = {
  children: React.ReactNode;
};

const CardAction = ({ children }: Props) => {
  return (
    <>
      <Divider className="my-4 " />
      <div className="inline-flex select-none items-center px-4 pb-4">
        {children}
      </div>
    </>
  );
};

export default CardAction;
