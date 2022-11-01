function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOT_AUTH = "/auth";
const ROOT_DASHBOARD = "/dashboard";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOT_AUTH,
  login: path(ROOT_AUTH, "/login"),
  register: path(ROOT_AUTH, "/register"),
  loginUnprotected: path(ROOT_AUTH, "/login-unprotected"),
  registerUnprotected: path(ROOT_AUTH, "/register-unprotected"),
  verify: path(ROOT_AUTH, "/verify"),
  resetPassword: path(ROOT_AUTH, "/reset-password"),
};
