import admin from "../firebase/firebase";
import { Request, Response, NextFunction } from "express";

export default function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authToken = req.headers.authorization;

  if (!authToken) {
    req.currentUser.isAuth = false;
    return next();
  }
  const token = authToken.split(" ")[1];
  if (!token || token === "") {
    req.currentUser.isAuth = false;
    return next();
  }

  admin
    .auth()
    .verifyIdToken(token)
    .then((user) => {
      req.currentUser.userId = user.uid;
      req.currentUser.isAuth = true;
      req.currentUser.role = user.role;
      next();
    })
    .catch(() => {
      req.currentUser.isAuth = false;
      return next();
    });
}
