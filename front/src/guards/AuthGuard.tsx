import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { PATH_AUTH } from "../router/paths";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={PATH_AUTH.login} />;
  }
  return <>{children}</>;
};

export default AuthGuard;
