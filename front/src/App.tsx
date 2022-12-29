import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { LazyMotion, domMax } from "framer-motion";
import { AuthProvider } from "./context/AuthContext";
import router from "./router";

function App() {
  return (
    <Suspense>
      <LazyMotion features={domMax}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </LazyMotion>
    </Suspense>
  );
}

export default App;
