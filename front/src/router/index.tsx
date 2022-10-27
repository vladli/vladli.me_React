import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const MainLayout = lazy(() => import("../layouts/MainLayout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "auth",
    element: <MainLayout />,
    children: [{ path: "login", element: <div>LOGIN</div> }],
  },
]);

export default router;
