import React from "react";
import firebase, { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import axios from "axios";

type User = firebase.User | null;
type ContextState = {
  user: User;
  role: string;
  signOut: () => void;
};

const AuthContext = React.createContext<ContextState | undefined>(undefined);

const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const [user, setUser] = React.useState<User>(null);
  const [role, setRole] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  function signOut() {
    sessionStorage.removeItem("Authorization");
    auth.signOut();
    setUser(null);
  }

  React.useEffect(() => {
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
  const context = React.useContext(AuthContext);
  if (context === undefined)
    throw new Error("Auth context must be use inside AuthProvider");

  return { ...context, isAuthenticated: context?.user?.uid != null };
};

export default AuthContext;
export { AuthProvider, useAuth };
