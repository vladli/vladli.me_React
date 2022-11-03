import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";

const Dashboard = lazy(() => import("../pages/Dashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        element: <Dashboard />,
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
