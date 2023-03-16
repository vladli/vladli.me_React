import ReactDOM from "react-dom/client";
import { domMax, LazyMotion } from "framer-motion";
import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import axios from "axios";

import "./index.css";
import App from "./App";
//context
import { AuthProvider } from "context/AuthContext";
import { ThemeProvider } from "context/ThemeContext";

//axios
const accessTokenRaw = sessionStorage.getItem("Authorization");
axios.defaults.headers.common["Authorization"] = accessTokenRaw
  ? `Bearer ${accessTokenRaw}`
  : "";
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
