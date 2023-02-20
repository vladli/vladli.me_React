type Props = {
  children: React.ReactNode;
};
const CardBody = ({ children }: Props) => {
  return (
    <p className="m-4 break-words font-normal text-gray-700 dark:text-gray-400">
      {children}
    </p>
  );
};

export default CardBody;
