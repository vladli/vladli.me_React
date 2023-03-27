import { createContext, useContext, useEffect, useState } from "react";
import firebase, { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

type User = firebase.User | null;
type ContextState = {
  user: User;
  role: string;
  signOut: () => void;
};

const AuthContext = createContext<ContextState | undefined>(undefined);

const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const { t } = useTranslation("Context");
  const [user, setUser] = useState<User>(null);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  function signOut() {
    sessionStorage.removeItem("Authorization");
    auth.signOut();
    setUser(null);
    toast.info(t("Auth.signOut"), { icon: false });
  }

  useEffect(() => {
    const getToken = () => {
      if (!auth.currentUser) setRole("");
      auth.currentUser?.getIdTokenResult().then((token) => {
        setRole(token.claims.role);
        const oldToken = sessionStorage.getItem("Authorization");
        if (oldToken !== token.token) {
          sessionStorage.setItem("Authorization", token.token);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${token.token}`;
        }
      });
    };
    const unsubscribe = onAuthStateChanged(auth, (currentuser: User) => {
      setUser(currentuser);
      setLoading(false);
      getToken();
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  if (loading) return null;
  return (
    <AuthContext.Provider value={{ user, role, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Auth context must be use inside AuthProvider");

  return { ...context, isAuthenticated: context?.user?.uid != null };
};

export default AuthContext;
export { AuthProvider, useAuth };
