import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

//const MainLayout = lazy(() => import("../layouts/MainLayout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <div>Main as sad asd</div>,
        index: true,
      },
    ],
  },
  {
    path: "auth",
    //element: <MainLayout />,
    children: [
      {
        path: "login",
        element: <div>LOGIN</div>,
      },
    ],
  },
]);

export default router;
