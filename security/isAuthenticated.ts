import { Request, Response, NextFunction } from "express";

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { userId, isAuth } = req;
  if (!userId || !isAuth) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  next();
}
