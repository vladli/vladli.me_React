import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { LazyMotion, domMax, AnimatePresence } from "framer-motion";
import { AuthProvider } from "./context/AuthContext";
import router from "./router";
import Loading from "./pages/LoadingPage";

function App() {
  return (
    <LazyMotion features={domMax}>
      <AuthProvider>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </AuthProvider>
    </LazyMotion>
  );
}

export default App;
