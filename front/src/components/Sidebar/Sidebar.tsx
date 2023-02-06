import Item from "./Item";
import MenuConfig from "../../config/MenuConfig";

const Sidebar = () => {
  return (
    <ul className="w-56">
      {MenuConfig.map<any>((menu) => (
        <Item key={menu.name} items={menu} />
      ))}
    </ul>
  );
};

export default Sidebar;
