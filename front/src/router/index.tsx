import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import CleanLayout from "../layouts/CleanLayout";

import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";
import { PATH_ADMIN, PATH_AUTH } from "./paths";
import { AnimatePresence } from "framer-motion";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));

const AdminUsersPage = lazy(() => import("../pages/admin/AdminUsersPage"));

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
