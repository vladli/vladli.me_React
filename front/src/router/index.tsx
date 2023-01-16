import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import CleanLayout from "../layouts/CleanLayout";

import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";
import { PATH_ADMIN, PATH_AUTH, PATH_DASHBOARD, PATH_PAGE } from "./paths";
import { AnimatePresence } from "framer-motion";
import LoadingPage from "../pages/LoadingPage";
import MainPage from "../pages/main/MainPage";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));

const AdminUsersPage = lazy(() => import("../pages/admin/AdminUsersPage"));

const router = createBrowserRouter([
  {
    path: PATH_PAGE.root,
    element: <CleanLayout />,
    children: [
      {
        element: <MainPage />,
        index: true,
      },
    ],
  },
  {
    path: PATH_DASHBOARD.root,
    element: <DashboardLayout />,
    children: [
      {
        element: <Dashboard />,
        index: true,
      },
    ],
  },
  {
    path: PATH_AUTH.root,
    element: <CleanLayout />,
    children: [
      {
        path: PATH_AUTH.login,
        element: (
          <GuestGuard>
            <LoginPage />
          </GuestGuard>
        ),
      },
    ],
  },
  {
    path: PATH_ADMIN.root,
    element: <DashboardLayout />,
    children: [
      {
        path: PATH_ADMIN.users,
        element: <AdminUsersPage />,
      },
    ],
  },
]);

export default router;
