import {
  PATH_ADMIN,
  PATH_BEGINNER_PROJECTS,
  PATH_DASHBOARD,
  PATH_PAGE,
} from "../router/paths";
import { useTranslation } from "react-i18next";
import { ROLES } from "./userRoles";
//icons
import { MdAutoAwesomeMotion, MdDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { RiUserSearchFill } from "react-icons/ri";
import { SiTestcafe } from "react-icons/si";
import { FaUserPlus } from "react-icons/fa";
import { BsCalculator } from "react-icons/bs";

function getMenu(userRole: string) {
  const { t } = useTranslation(["beginnerProjects", "admin"]);
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
      name: t("beginnerProjects:title"),
      link: "",
      icon: undefined,
      submenu: [
        {
          name: t("beginnerProjects:Calculator:title"),
          link: PATH_BEGINNER_PROJECTS.calculator.url,
          icon: <BsCalculator />,
        },
      ],
    },
    ...([ROLES.Admin].includes(userRole)
      ? [
          {
            name: t("admin:title"),
            link: "",
            icon: undefined,
            submenu: [
              {
                name: t("admin:AllUsers.title"),
                link: PATH_ADMIN.users.url,
                icon: <HiUserGroup />,
              },
              {
                name: t("admin:FindUser.title"),
                link: PATH_ADMIN.findUser.url,
                icon: <RiUserSearchFill />,
              },
              {
                name: t("admin:AddUser.title"),
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
