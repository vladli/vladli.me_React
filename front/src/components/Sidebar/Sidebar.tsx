import Item from "./Item";
import MenuConfig from "../../config/MenuConfig";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ setMobileNav }: any) => {
  const { isAuthenticated, user, role } = useAuth();
  return (
    <ul className="menu w-56 bg-base-100 font-semibold">
      {MenuConfig(role).map<any>((menu, index) => (
        <Item key={index} items={menu} {...{ setMobileNav }} />
      ))}
    </ul>
  );
};

export default Sidebar;
