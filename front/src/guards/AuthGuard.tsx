import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginPage from "../pages/auth/LoginPage";
import { PATH_AUTH } from "../router/paths";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={PATH_AUTH.login} />;
  }
  return <>{children}</>;
};

export default AuthGuard;
