import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
//const MainLayout = lazy(() => import("../layouts/MainLayout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        element: <div>Main as sad asd</div>,
        index: true,
      },
      {
        element: <div>asd</div>,
        path: "/2",
      },
    ],
  },
  {
    path: "auth",
    element: <LogoOnlyLayout />,
    children: [
      {
        path: "login",
        element: <div>LOGIN</div>,
      },
    ],
  },
]);

export default router;
