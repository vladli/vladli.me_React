import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { LazyMotion, domMax, AnimatePresence } from "framer-motion";
import { AuthProvider } from "./context/AuthContext";
import router from "./router";

function App() {
  return (
    <LazyMotion features={domMax}>
      <AuthProvider>
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      </AuthProvider>
    </LazyMotion>
  );
}

export default App;
