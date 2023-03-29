import { Router } from "express";
import { createTodo, getTodo, updateTodo, deleteTodo, } from "../resolvers/todoList";
const router = Router();
router.post("/item", createTodo);
router.get("/item", getTodo);
router.put("/item", updateTodo);
router.delete("/item", deleteTodo);
export default router;
