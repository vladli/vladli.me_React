import ReactDOM from "react-dom/client";
import { domMax, LazyMotion } from "framer-motion";
import { StrictMode, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import "./i18n";

import "./index.css";
import App from "./App";

//context
import { AuthProvider } from "context/AuthContext";
import { ThemeProvider } from "context/ThemeContext";

//
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LazyMotion features={domMax}>
          <AuthProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </AuthProvider>
        </LazyMotion>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>
);
