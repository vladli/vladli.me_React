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
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));

const TestPage = lazy(() => import("../pages/TestPage"));

const AdminUsersPage = lazy(() => import("../pages/admin/AdminUsersPage"));

const SuspenseLoading = ({ children }: { children: React.ReactNode }) => {
  return <React.Suspense fallback={<ProgressBar />}>{children}</React.Suspense>;
};

const router = createBrowserRouter([
  {
    path: PATH_PAGE.root,
    element: <CleanLayout />,
    children: [
      {
        index: true,
        element: (
          <SuspenseLoading>
            <MainPage />
          </SuspenseLoading>
        ),
      },
    ],
  },
  {
    path: PATH_DASHBOARD.root,
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
        path: PATH_DASHBOARD.root + "/test",
        element: (
          <SuspenseLoading>
            <TestPage />
          </SuspenseLoading>
        ),
      },
    ],
  },
  {
    path: PATH_AUTH.root,
    element: <CleanLayout key="auth" />,
    children: [
      {
        path: PATH_AUTH.login,
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
    path: PATH_ADMIN.root,
    element: <DashboardLayout />,
    children: [
      {
        path: PATH_ADMIN.users,
        element: (
          <RoleGuard roles={[ROLES.Admin]}>
            <SuspenseLoading>
              <AdminUsersPage />
            </SuspenseLoading>
          </RoleGuard>
        ),
      },
    ],
  },
]);

export default router;
