import React from "react";
import Box from "../components/Box";
import { useAuth } from "../context/AuthContext";
import AuthGuard from "./AuthGuard";

type Props = {
  children: React.ReactNode;
  roles: string[];
};

export default function RoleGuard({ children, roles }: Props) {
  const { user } = useAuth();
  const [role, setRole] = React.useState("");

  React.useEffect(() => {
    user?.getIdTokenResult().then((token) => {
      setRole(token.claims.role);
    });
  }, [user]);

  if (!roles.includes(role))
    return (
      <Box className="p-4 dark:bg-red-900">
        <h3>You have no access to this page.</h3>
      </Box>
    );
  return <AuthGuard>{children}</AuthGuard>;
}
