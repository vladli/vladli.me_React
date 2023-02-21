import Item from "./Item";
import MenuConfig from "../../config/MenuConfig";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { isAuthenticated, user, role } = useAuth();

  return (
    <div className="w-56">
      {isAuthenticated && (
        <div className="mx-2 flex flex-col items-center truncate rounded-lg border border-neutral-700 p-2 text-white">
          <p>{user?.email}</p>
          <p>{role}</p>
        </div>
      )}
      <ul className="mt-2">
        {MenuConfig(role).map<any>((menu, index) => (
          <Item key={index} items={menu} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
