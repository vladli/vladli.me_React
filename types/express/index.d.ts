import { Express } from "express-serve-static-core";

interface TokenData {
  userId: string;
  isAuth: boolean;
  role: string;
}
declare global {
  namespace Express {
    interface Request {
      currentUser: TokenData;
    }
  }
}
