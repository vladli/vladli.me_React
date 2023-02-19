import { Router } from "express";
import { getUser, getAllUsers } from "../resolvers/userResolver";

const router = Router();

router.get("/getUser/:uid", getUser);
router.get("/getAllUsers", getAllUsers);

export default router;
