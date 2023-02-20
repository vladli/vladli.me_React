import { PATH_ADMIN, PATH_DASHBOARD, PATH_PAGE } from "../router/paths";
import { ROLES } from "./userRoles";

function getMenu(userRole: string) {
  const MenuItems = [
    {
      name: "Main",
      link: PATH_PAGE.root.url,
      icon: "material-symbols:pages-outline-sharp",
    },
    {
      name: "Dashboard",
      link: "",
      icon: undefined,
      submenu: [
        {
          name: "Dashboard",
          link: PATH_DASHBOARD.root.url,
          icon: "material-symbols:dashboard",
        },
      ],
    },
    ...([ROLES.Admin].includes(userRole)
      ? [
          {
            name: "Admin",
            link: "",
            icon: undefined,
            submenu: [
              {
                name: "Users",
                link: PATH_ADMIN.users.url,
                icon: "mdi:users-group",
              },
              {
                name: "Find User",
                link: PATH_ADMIN.findUser.url,
                icon: "mdi:users-group",
              },
            ],
          },
        ]
      : []),
    {
      name: "TestPage",
      link: PATH_DASHBOARD.root.url + "/test",
      icon: "material-symbols:engineering-outline",
    },
  ].filter(Boolean);
  return MenuItems;
}

export default getMenu;
