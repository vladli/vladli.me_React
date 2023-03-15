import { Router } from "express";
import { getUser, getAllUsers, deleteUser } from "../resolvers/userResolver";

const router = Router();

router.get("/user", getUser);
router.delete("/user", deleteUser);

router.get("/getAllUsers", getAllUsers);

export default router;
