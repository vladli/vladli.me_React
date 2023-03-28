import { Router } from "express";
import { createTodo, getTodo, deleteTodo } from "../resolvers/todoList";

const router = Router();

router.post("/item", createTodo);
router.get("/item", getTodo);
router.delete("/item", deleteTodo);

export default router;
