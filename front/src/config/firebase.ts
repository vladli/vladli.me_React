// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkx3d9mW-bi4WLCkl3tT8U5eg1Q5ygyvQ",
  authDomain: "vladli-me.firebaseapp.com",
  projectId: "vladli-me",
  storageBucket: "vladli-me.appspot.com",
  messagingSenderId: "344036457871",
  appId: "1:344036457871:web:a949db9b6547e3a24c9ffa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

export function getErrorMessage(errorCode: string) {
  switch (errorCode) {
    case "auth/invalid-email":
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "User not found";
    default:
      return "Error";
  }
}
