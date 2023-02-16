import { Router } from "express";
import user from "./userRoutes.js";

const router = Router();

router.use("/users", user);

export default router;
