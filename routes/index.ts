import { Router } from "express";
import isUser from "../security/isUser";
import user from "./userRoutes";
import todoList from "./todoList";

const router = Router();

router.use("/users", isUser.Admin, user);
router.use("/todos", isUser.Authenticated, todoList);

export default router;
