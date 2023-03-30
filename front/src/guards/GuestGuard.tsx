import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { PATH_PAGE } from "../router/paths";

const GuestGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to={PATH_PAGE.root.url} />;
  }
  return <>{children}</>;
};

export default GuestGuard;
