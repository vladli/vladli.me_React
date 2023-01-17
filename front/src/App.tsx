import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { LazyMotion, domMax } from "framer-motion";
import { AuthProvider } from "./context/AuthContext";
import router from "./router";
import LoadingPage from "./pages/LoadingPage";

function App() {
  return (
    <LazyMotion features={domMax}>
      <AuthProvider>
        <Suspense fallback={<LoadingPage />}>
          <RouterProvider router={router} />
        </Suspense>
      </AuthProvider>
    </LazyMotion>
  );
}

export default App;
