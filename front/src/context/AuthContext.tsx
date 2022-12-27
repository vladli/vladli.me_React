import React from "react";
import firebase, { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

type User = firebase.User | null;
type ContextState = {
  user: User;
  isAuthenticated?: boolean;
  signOut: any;
};

const AuthContext = React.createContext<ContextState | undefined>(undefined);

interface IAuthProvider {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: IAuthProvider) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState<User>(null);
  const [loading, setLoading] = React.useState(true);

  function signOut() {
    return auth.signOut();
  }

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser: any) => {
      setUser(currentuser);
      setIsAuthenticated(true);
      setLoading(false);
      console.log("user", currentuser, isAuthenticated);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) return <div>Loading</div>;
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined)
    throw new Error("Auth context must be use inside AuthProvider");

  return context;
};

export default AuthContext;
export { AuthProvider, useAuth };
