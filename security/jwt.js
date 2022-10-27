import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/userModel.js";

import { JWT_KEY } from "./key.js";

dotenv.config();

export const verifyToken = async (req, res, next) => {
  const authToken = req.get("Authorization");
  if (!authToken) {
    req.isAuth = false;
    return next();
  }
  const token = authToken.split(" ")[1];
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }
  let verify;
  try {
    verify = jwt.verify(token, JWT_KEY);
  } catch (error) {
    req.isAuth = false;
    return next();
  }
  if (!verify._id) {
    req.isAuth = false;
    return next();
  }
  const user = await User.findById(verify._id);
  if (!user) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.userId = user._id;
  next();
};
