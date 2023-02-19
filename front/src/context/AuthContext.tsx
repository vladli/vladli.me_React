import React from "react";
import firebase, { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import axios from "axios";

type User = firebase.User | null;
type ContextState = {
  user: User;
  signOut: () => void;
};

const AuthContext = React.createContext<ContextState | undefined>(undefined);

const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const [user, setUser] = React.useState<User>(null);
  const [loading, setLoading] = React.useState(true);

  function signOut() {
    sessionStorage.removeItem("Authorization");
    auth.signOut();
    setUser(null);
  }

  React.useEffect(() => {
    const getToken = () => {
      auth.currentUser?.getIdToken().then((idToken) => {
        const oldToken = sessionStorage.getItem("Authorization");
        if (oldToken !== idToken) {
          sessionStorage.setItem("Authorization", idToken);
          axios.defaults.headers.common["Authorization"] = `Bearer ${idToken}`;
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
  }, []);

  if (loading) return null;
  return (
    <AuthContext.Provider value={{ user, signOut }}>
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
