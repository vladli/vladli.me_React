import {
  PATH_ADMIN,
  PATH_AUTH,
  PATH_DASHBOARD,
  PATH_PAGE,
} from "../router/paths";

const TopMenu = [
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
        name: "1",
        link: PATH_ADMIN.users,
        icon: "material-symbols:dashboard",
      },
      {
        name: "2",
        link: PATH_DASHBOARD.root,
        icon: "material-symbols:dashboard",
      },
    ],
  },
];

export default TopMenu;
