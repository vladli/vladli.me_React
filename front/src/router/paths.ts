function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOT_PAGE = "/";
const ROOT_AUTH = "/auth";
const ROOT_ADMIN = "/admin";

const ROOT_BEGINNER_PROJECTS = "/beginner-projects";
// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: path(ROOT_AUTH, "/login"),
  register: path(ROOT_AUTH, "/register"),
};

export const PATH_ADMIN = {
  addUser: path(ROOT_ADMIN, "/add-user"),
  users: path(ROOT_ADMIN, "/users"),
  findUser: path(ROOT_ADMIN, "/find-user"),
};

export const PATH_PAGE = {
  root: ROOT_PAGE,
  page404: "/404",
};

export const PATH_BEGINNER_PROJECTS = {
  calculator: path(ROOT_BEGINNER_PROJECTS, "/calculator"),
  todos: path(ROOT_BEGINNER_PROJECTS, "/todos"),
  weather: path(ROOT_BEGINNER_PROJECTS, "/weather"),
  ticTacToe: path(ROOT_BEGINNER_PROJECTS, "/tic-tac-toe"),
};
