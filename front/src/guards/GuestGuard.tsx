import { useAuth } from "../context/AuthContext";
import { Navigate, redirect } from "react-router-dom";
import { PATH_AUTH, PATH_PAGE } from "../router/paths";
import React from "react";

const GuestGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to={PATH_PAGE.root} />;
  }
  return <>{children}</>;
};

export default GuestGuard;
