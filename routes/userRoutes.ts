import { Router } from "express";
import {
  createUser,
  getUser,
  deleteUser,
  getAllUsers,
} from "../resolvers/userResolver";

const router = Router();

router.post("/user", createUser);
router.get("/user", getUser);
router.delete("/user", deleteUser);

router.get("/getAllUsers", getAllUsers);

export default router;
