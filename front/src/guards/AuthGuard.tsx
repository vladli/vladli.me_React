import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { PATH_AUTH } from "../router/paths";

const AuthGuard = ({ children }: any) => {
  const { isAuthenticated }: any = useAuth();
  console.log(isAuthenticated);
  return isAuthenticated === true ? (
    children
  ) : (
    <Navigate to={PATH_AUTH.login} replace />
  );
};

export default AuthGuard;
