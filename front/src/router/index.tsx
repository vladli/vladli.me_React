import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

import DashboardLayout from "../layouts/dashboard";
import CleanLayout from "../layouts/CleanLayout";

import GuestGuard from "../guards/GuestGuard";
import RoleGuard from "../guards/RoleGuard";

import { PATH_ADMIN, PATH_AUTH, PATH_DASHBOARD, PATH_PAGE } from "./paths";
import { ROLES } from "../config/userRoles";

const MainPage = lazy(() => import("../pages/main/MainPage"));
const Dashboard = lazy(() => import("../pages/dashboard/DashboardPage"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));

const TestPage = lazy(() => import("../pages/TestPage"));

const AdminUsersPage = lazy(() => import("../pages/admin/AdminUsersPage"));
const AdminFindUser = lazy(() => import("../pages/admin/AdminFindUserPage"));

const SuspenseLoading = ({ children }: { children: React.ReactNode }) => {
  return <React.Suspense fallback={<ProgressBar />}>{children}</React.Suspense>;
};

const router = createBrowserRouter([
  {
    path: PATH_PAGE.root.url,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <SuspenseLoading>
            <Dashboard />
          </SuspenseLoading>
        ),
      },
    ],
  },
  {
    path: PATH_DASHBOARD.root.url,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <SuspenseLoading>
            <Dashboard />
          </SuspenseLoading>
        ),
      },
      {
        path: PATH_DASHBOARD.root.url + "/test",
        element: (
          <SuspenseLoading>
            <TestPage />
          </SuspenseLoading>
        ),
      },
    ],
  },
  {
    element: <CleanLayout key="auth" />,
    children: [
      {
        path: PATH_AUTH.login.url,
        element: (
          <GuestGuard>
            <SuspenseLoading>
              <LoginPage />
            </SuspenseLoading>
          </GuestGuard>
        ),
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: PATH_ADMIN.users.url,
        element: (
          <RoleGuard roles={[ROLES.Admin]} redirect>
            <SuspenseLoading>
              <AdminUsersPage />
            </SuspenseLoading>
          </RoleGuard>
        ),
      },
      {
        path: PATH_ADMIN.findUser.url,
        element: (
          <RoleGuard roles={[ROLES.Admin]} redirect>
            <SuspenseLoading>
              <AdminFindUser />
            </SuspenseLoading>
          </RoleGuard>
        ),
      },
    ],
  },
]);

export default router;
