import { Express } from "express-serve-static-core";

declare global {
  namespace Express {
    interface Request {
      userId: string;
      isAuth: boolean;
      role: string;
    }
  }
}
