import { Link } from "react-router-dom";

const NavTopChild = ({ items }: any) => {
  return (
    <div className="z-10 rounded-lg bg-dark-mainBg p-2">
      {items.map((item: any) => (
        <Link key={item.name} to={item.link}>
          <div className="rounded-lg pl-2 hover:bg-neutral-800">
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavTopChild;
