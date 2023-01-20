import {
  PATH_ADMIN,
  PATH_AUTH,
  PATH_DASHBOARD,
  PATH_PAGE,
} from "../router/paths";

const MenuItems = [
  {
    name: "Main",
    link: PATH_PAGE.root,
    icon: "material-symbols:pages-outline-sharp",
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
        link: PATH_ADMIN.users,
        icon: "mdi:users-group",
      },
    ],
  },
  {
    name: "TestPage",
    link: PATH_DASHBOARD.root + "/test",
    icon: "material-symbols:engineering-outline",
  },
  {
    name: "Login",
    link: PATH_AUTH.login,
    icon: "material-symbols:login",
  },
];

export default MenuItems;
