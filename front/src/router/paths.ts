function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOT_PAGE = "/";
const ROOT_AUTH = "/auth";
const ROOT_DASHBOARD = "/dashboard";
const ROOT_ADMIN = "/admin";

const ROOT_BEGINNER_PROJECTS = "/beginner-projects";
// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: { url: path(ROOT_AUTH, "/login"), title: "Login Page" },
  register: { url: path(ROOT_AUTH, "/register"), title: "Register ROOT_PAGE" },
};

export const PATH_ADMIN = {
  addUser: { url: path(ROOT_ADMIN, "/add-user"), title: "Add user" },
  users: { url: path(ROOT_ADMIN, "/users"), title: "All users" },
  findUser: { url: path(ROOT_ADMIN, "/find-user"), title: "Find user" },
};

export const PATH_DASHBOARD = {
  root: { url: ROOT_DASHBOARD, title: "Dashboard" },
};

export const PATH_PAGE = {
  root: { url: ROOT_PAGE, title: "Main page" },
  page404: { url: "/404", title: "404" },
};

export const PATH_BEGINNER_PROJECTS = {
  calculator: {
    url: path(ROOT_BEGINNER_PROJECTS, "/calculator"),
    title: "Calculator",
  },
  todos: {
    url: path(ROOT_BEGINNER_PROJECTS, "/todos"),
    title: "Calculator",
  },
};
