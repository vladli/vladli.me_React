import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Page from "components/Page";

import DashboardLayout from "../layouts/dashboard";
import CleanLayout from "../layouts/CleanLayout";

import GuestGuard from "../guards/GuestGuard";
import RoleGuard from "../guards/RoleGuard";

import {
  PATH_ADMIN,
  PATH_AUTH,
  PATH_BEGINNER_PROJECTS,
  PATH_DASHBOARD,
  PATH_PAGE,
} from "./paths";
import { ROLES } from "../config/userRoles";
import AuthGuard from "guards/AuthGuard";

const Dashboard = lazy(() => import("pages/dashboard"));
const LoginPage = lazy(() => import("pages/auth/Login"));

const Calculator = lazy(() => import("pages/beginner-projects/Calculator"));
const Todos = lazy(() => import("pages/beginner-projects/Todos"));

const AdminAllUsers = lazy(() => import("pages/admin/AllUsers"));
const AdminFindUser = lazy(() => import("pages/admin/FindUser"));
const AdminAddUser = lazy(() => import("pages/admin/AddUser"));

const SuspenseLoading = ({ children }: any) => {
  return <Suspense fallback={<ProgressBar />}>{children}</Suspense>;
};

const router = createBrowserRouter(
  [
    {
      path: PATH_PAGE.root.url,
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: (
            <Page title="beginnerProjects:title">
              <SuspenseLoading>
                <Dashboard />
              </SuspenseLoading>
            </Page>
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
            <Page title="beginnerProjects:title">
              <SuspenseLoading>
                <Dashboard />
              </SuspenseLoading>
            </Page>
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
              <Page
                title="auth:Login.title"
                responsive={false}
                className="flex h-[100vh] items-center justify-center"
              >
                <SuspenseLoading>
                  <LoginPage />
                </SuspenseLoading>
              </Page>
            </GuestGuard>
          ),
        },
      ],
    },
    {
      element: <DashboardLayout />,
      children: [
        {
          path: PATH_BEGINNER_PROJECTS.calculator.url,
          element: (
            <Page title="beginnerProjects:Calculator.title">
              <SuspenseLoading>
                <Calculator />
              </SuspenseLoading>
            </Page>
          ),
        },
        {
          path: PATH_BEGINNER_PROJECTS.todos.url,
          element: (
            <AuthGuard>
              <Page title="beginnerProjects:Todos.title" center>
                <SuspenseLoading>
                  <Todos />
                </SuspenseLoading>
              </Page>
            </AuthGuard>
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
              <Page title="admin:AllUsers.title">
                <SuspenseLoading>
                  <AdminAllUsers />
                </SuspenseLoading>
              </Page>
            </RoleGuard>
          ),
        },
        {
          path: PATH_ADMIN.findUser.url,
          element: (
            <RoleGuard roles={[ROLES.Admin]} redirect>
              <Page title="admin:FindUser.title">
                <SuspenseLoading>
                  <AdminFindUser />
                </SuspenseLoading>
              </Page>
            </RoleGuard>
          ),
        },
        {
          path: PATH_ADMIN.addUser.url,
          element: (
            <RoleGuard roles={[ROLES.Admin]} redirect>
              <Page title="admin:AddUser.title">
                <SuspenseLoading>
                  <AdminAddUser />
                </SuspenseLoading>
              </Page>
            </RoleGuard>
          ),
        },
      ],
    },
  ],
  { basename: "/" }
);

export default router;
