"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoList_1 = require("../resolvers/todoList");
const router = (0, express_1.Router)();
router.post("/item", todoList_1.createTodo);
router.get("/item", todoList_1.getTodo);
router.put("/item", todoList_1.updateTodo);
router.delete("/item", todoList_1.deleteTodo);
exports.default = router;
