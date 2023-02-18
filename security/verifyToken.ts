import admin from "../firebase/firebase";
import { Request, Response, NextFunction } from "express";

export default function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authToken = req.headers.authorization;

  if (!authToken) {
    req.isAuth = false;
    return next();
  }
  const token = authToken.split(" ")[1];
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }

  admin
    .auth()
    .verifyIdToken(token)
    .then((user) => {
      req.userId = user.uid;
      req.isAuth = true;
      req.role = user.role;
      next();
    })
    .catch(() => {
      req.isAuth = false;
      return next();
    });
}
