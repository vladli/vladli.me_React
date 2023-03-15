import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ToastContainer } from "react-toastify";

import { useTheme } from "context/ThemeContext";

export default function App() {
  const { theme } = useTheme();
  const darkTheme = theme === "cmyk" ? "light" : "dark";
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme={darkTheme}
        draggable={false}
        limit={5}
        pauseOnFocusLoss={false}
        newestOnTop
      />
      <RouterProvider router={router} />
    </>
  );
}
