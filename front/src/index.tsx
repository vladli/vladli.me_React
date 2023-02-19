import React from "react";
import { RouterProvider } from "react-router-dom";
import { domMax, LazyMotion } from "framer-motion";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./router";
import "./index.css";
import axios from "axios";
import { AuthProvider } from "./context/AuthContext";
import { HelmetProvider } from "react-helmet-async";

//axios
const accessTokenRaw = sessionStorage.getItem("Authorization");
axios.defaults.headers.common["Authorization"] = accessTokenRaw
  ? `Bearer ${accessTokenRaw}`
  : "";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LazyMotion features={domMax}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </LazyMotion>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
