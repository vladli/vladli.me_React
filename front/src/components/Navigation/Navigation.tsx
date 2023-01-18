import NavItem from "./NavItem";
import MenuConfig from "../../MenuConfig";

const Navigation = () => {
  return (
    <ul>
      {MenuConfig.map<any>((menu) => (
        <NavItem key={menu.name} items={menu} />
      ))}
    </ul>
  );
};

export default Navigation;
