import { link } from "fs";
import { PATH_DASHBOARD, PATH_PAGE } from "./router/paths";

const MenuItems = [
  {
    name: "Main",
    link: PATH_PAGE.root,
    icon: "grommet-icons:domain",
  },
  {
    name: "Dashboard",
    link: "",
    icon: undefined,
    submenu: [
      {
        name: "Dashboard",
        link: PATH_DASHBOARD.root,
        icon: "material-symbols:dashboard",
      },
    ],
  },
  {
    name: "Admin",
    link: "",
    icon: undefined,
    submenu: [
      {
        name: "Users",
        link: "/admin/users",
        icon: "mdi:users-group",
      },
    ],
  },
  {
    name: "Login",
    link: "/auth/login",
    icon: "material-symbols:login",
  },
];

export default MenuItems;
