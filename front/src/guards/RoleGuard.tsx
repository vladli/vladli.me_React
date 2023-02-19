import React from "react";
import { Navigate } from "react-router-dom";
import Box from "../components/Box";
import { useAuth } from "../context/AuthContext";
import { PATH_AUTH } from "../router/paths";
import AuthGuard from "./AuthGuard";

type Props = {
  children: React.ReactNode;
  roles: string[];
  redirect?: boolean;
};

export default function RoleGuard({
  children,
  roles,
  redirect = false,
}: Props) {
  const { role } = useAuth();

  if (!roles.includes(role))
    return !redirect ? (
      <Box className="bg-red-900 p-4 text-white dark:bg-red-900">
        <h3>You have no access to this page.</h3>
      </Box>
    ) : (
      <Navigate to={PATH_AUTH.login.url} />
    );
  return <AuthGuard>{children}</AuthGuard>;
}
