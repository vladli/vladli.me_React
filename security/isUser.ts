import { Request, Response, NextFunction } from "express";
import { NOT_AUTH, NO_PREMESSION } from "../config/errors";

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { userId, isAuth } = req;
  if (!userId || !isAuth) {
    res.status(401).json({ message: NOT_AUTH });
    return;
  }
  next();
}

export function isAdmin(req: Request, res: Response, next: NextFunction): void {
  isAuthenticated(req, res, function () {
    const { authRole } = req;
    if (authRole !== "admin") {
      res.status(401).json({ message: NO_PREMESSION });
      return;
    }
    next();
  });
}

type IsUser = {
  Authenticated: boolean;
  Admin: boolean;
};
const isUser: IsUser = Object.create(null);
export default Object.assign(isUser, {
  Authenticated: isAuthenticated,
  Admin: isAdmin,
});
