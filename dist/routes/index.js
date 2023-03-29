"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isUser_1 = __importDefault(require("../security/isUser"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const todoList_1 = __importDefault(require("./todoList"));
const router = (0, express_1.Router)();
router.use("/users", isUser_1.default.Admin, userRoutes_1.default);
router.use("/todos", isUser_1.default.Authenticated, todoList_1.default);
exports.default = router;
