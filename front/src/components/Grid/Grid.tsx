import Item from "./Item";

type Props = {
  children: React.ReactNode;
};

const Grid = ({ children }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:justify-around">
      {children}
    </div>
  );
};

Grid.Item = Item;

export default Grid;
