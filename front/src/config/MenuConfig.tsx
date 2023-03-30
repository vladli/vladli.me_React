import { PATH_ADMIN, PATH_BEGINNER_PROJECTS, PATH_PAGE } from "../router/paths";
import { useTranslation } from "react-i18next";
import { ROLES } from "./userRoles";
//icons
import { MdAutoAwesomeMotion, MdChecklist } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { RiUserSearchFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import { BsCalculator } from "react-icons/bs";

function getMenu(userRole: string) {
  const { t } = useTranslation();
  const MenuItems = [
    {
      name: t("main:title"),
      link: PATH_PAGE.root.url,
      icon: <MdAutoAwesomeMotion />,
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
        {
          name: t("beginnerProjects:Todos.title"),
          link: PATH_BEGINNER_PROJECTS.todos.url,
          icon: <MdChecklist />,
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
  ].filter(Boolean);
  return MenuItems;
}

export default getMenu;
