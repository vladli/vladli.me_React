import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { PATH_DASHBOARD } from "../router/paths";

const GuestGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to={PATH_DASHBOARD.root.url} />;
  }
  return <>{children}</>;
};

export default GuestGuard;
