import { Router } from "express";
import { getUsers, getAllUsers } from "../resolvers/userResolver";

const router = Router();

router.get("/getId/:uid", getUsers);
router.get("/getAllUsers", getAllUsers);

export default router;