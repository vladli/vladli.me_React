import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

import DashboardLayout from "../layouts/dashboard";
import CleanLayout from "../layouts/CleanLayout";

import GuestGuard from "../guards/GuestGuard";
import RoleGuard from "../guards/RoleGuard";

import { PATH_ADMIN, PATH_AUTH, PATH_DASHBOARD, PATH_PAGE } from "./paths";
import { ROLES } from "../config/userRoles";

const MainPage = lazy(() => import("../pages/main/Main"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const LoginPage = lazy(() => import("../pages/auth/Login"));

const TestPage = lazy(() => import("../pages/TestPage"));

const AdminAllUsers = lazy(() => import("../pages/admin/AllUsers"));
const AdminFindUser = lazy(() => import("../pages/admin/FindUser"));
const AdminAddUser = lazy(() => import("pages/admin/AddUser"));

const SuspenseLoading = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<ProgressBar />}>{children}</Suspense>;
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
              <AdminAllUsers />
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
      {
        path: PATH_ADMIN.addUser.url,
        element: (
          <RoleGuard roles={[ROLES.Admin]} redirect>
            <SuspenseLoading>
              <AdminAddUser />
            </SuspenseLoading>
          </RoleGuard>
        ),
      },
    ],
  },
]);

export default router;
