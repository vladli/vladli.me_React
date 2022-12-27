import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";

import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));

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
        element: (
          <AuthGuard>
            <div>asd</div>
          </AuthGuard>
        ),
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
        element: (
          <GuestGuard>
            <LoginPage />
          </GuestGuard>
        ),
      },
    ],
  },
]);

export default router;
