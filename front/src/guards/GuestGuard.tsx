import { useAuth } from "../context/AuthContext";
import { Navigate, redirect } from "react-router-dom";
import { PATH_AUTH, ROOT_PAGE } from "../router/paths";
import React from "react";

const GuestGuard = ({ children }: any) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to={ROOT_PAGE} />;
  }
  return <>{children}</>;
};

export default GuestGuard;
