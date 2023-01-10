function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOT_PAGE = "/";
const ROOT_AUTH = "/auth";
const ROOT_DASHBOARD = "/dashboard";
const ROOT_ADMIN = "/admin";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOT_AUTH,
  login: path(ROOT_AUTH, "/login"),
  register: path(ROOT_AUTH, "/register"),
  verify: path(ROOT_AUTH, "/verify"),
  resetPassword: path(ROOT_AUTH, "/reset-password"),
};

export const PATH_ADMIN = {
  root: ROOT_ADMIN,
  users: path(ROOT_ADMIN, "/users"),
};

export const PATH_PAGE = {
  root: ROOT_PAGE,
  comingSoon: "/coming-soon",
  maintenance: "/maintenance",
  pricing: "/pricing",
  payment: "/payment",
  about: "/about-us",
  contact: "/contact-us",
  faqs: "/faqs",
  page404: "/404",
  page500: "/500",
  components: "/components",
};
