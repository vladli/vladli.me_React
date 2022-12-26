import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import Button from "../components/Buttons/Button";

const AuthGuard = ({ children }: any) => {
  React.useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
      } else {
        console.log("no user");
      }
    });
  });
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      {children} <Button onClick={handleLogout}>Out</Button>
    </div>
  );
};

export default AuthGuard;
