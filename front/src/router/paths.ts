function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOT_PAGE = "/";
const ROOT_AUTH = "/auth";
const ROOT_DASHBOARD = "/dashboard";
const ROOT_ADMIN = "/admin";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: { url: path(ROOT_AUTH, "/login"), title: "Login Page" },
  register: { url: path(ROOT_AUTH, "/register"), title: "Register ROOT_PAGE" },
};

export const PATH_ADMIN = {
  users: { url: path(ROOT_ADMIN, "/users"), title: "All users" },
};

export const PATH_DASHBOARD = {
  root: { url: ROOT_DASHBOARD, title: "Dashboard" },
};

export const PATH_PAGE = {
  root: { url: ROOT_PAGE, title: "Main page" },
  page404: { url: "/404", title: "404" },
};
