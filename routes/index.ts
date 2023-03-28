import { Router } from "express";
import isAuthenticated from "../security/isAuthenticated";
import user from "./userRoutes";
import todoList from "./todoList";

const router = Router();

router.use("/users", user);
router.use("/todos", isAuthenticated, todoList);

export default router;
