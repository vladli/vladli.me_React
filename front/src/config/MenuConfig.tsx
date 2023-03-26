import {
  PATH_ADMIN,
  PATH_BEGINNER_PROJECTS,
  PATH_DASHBOARD,
  PATH_PAGE,
} from "../router/paths";
import { ROLES } from "./userRoles";
//icons
import { MdAutoAwesomeMotion, MdDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { RiUserSearchFill } from "react-icons/ri";
import { SiTestcafe } from "react-icons/si";
import { FaUserPlus } from "react-icons/fa";
import { BsCalculator } from "react-icons/bs";

function getMenu(userRole: string) {
  const MenuItems = [
    {
      name: "Main",
      link: PATH_PAGE.root.url,
      icon: <MdAutoAwesomeMotion />,
    },
    {
      name: "Dashboard",
      link: "",
      icon: undefined,
      submenu: [
        {
          name: "Dashboard",
          link: PATH_DASHBOARD.root.url,
          icon: <MdDashboard />,
        },
      ],
    },
    {
      name: "Beginner Projects",
      link: "",
      icon: undefined,
      submenu: [
        {
          name: "Calculator",
          link: PATH_BEGINNER_PROJECTS.calculator.url,
          icon: <BsCalculator />,
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
                icon: <HiUserGroup />,
              },
              {
                name: "Find User",
                link: PATH_ADMIN.findUser.url,
                icon: <RiUserSearchFill />,
              },
              {
                name: "Add User",
                link: PATH_ADMIN.addUser.url,
                icon: <FaUserPlus />,
              },
            ],
          },
        ]
      : []),
    {
      name: "TestPage",
      link: PATH_DASHBOARD.root.url + "/test",
      icon: <SiTestcafe />,
    },
  ].filter(Boolean);
  return MenuItems;
}

export default getMenu;
