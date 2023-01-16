import { link } from "fs";
import { PATH_DASHBOARD, PATH_PAGE } from "./router/paths";

const MenuItems = [
  {
    name: "Main",
    link: PATH_PAGE.root,
    icon: undefined,
  },
  {
    name: "Dashboard",
    link: "",
    icon: undefined,
    submenu: [
      {
        name: "Dashboard",
        link: PATH_DASHBOARD.root,
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
      },
    ],
  },
  {
    name: "Login",
    link: "/auth/login",
    icon: undefined,
  },
];

export default MenuItems;
