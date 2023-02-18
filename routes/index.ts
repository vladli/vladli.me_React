import { Router } from "express";
import user from "./userRoutes";

const router = Router();

router.use("/users", user);

export default router;
