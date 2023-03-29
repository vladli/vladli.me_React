"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todoList_1 = __importDefault(require("../models/todoList"));
const createTodo = async (req, res) => {
    const { userId, body } = req;
    const { text } = body;
    todoList_1.default
        .create({
        userUID: userId,
        text,
        completed: false,
    })
        .then((result) => {
        res.send(result);
    })
        .catch((error) => res.status(400).send(error));
};
exports.createTodo = createTodo;
const getTodo = async (req, res) => {
    todoList_1.default.find().then((result) => {
        res.send(result);
    });
};
exports.getTodo = getTodo;
const updateTodo = async (req, res) => {
    const { query } = req;
    todoList_1.default
        .findByIdAndUpdate(query._id, {
        completed: query.completed,
    })
        .then((result) => {
        res.send(result);
    });
};
exports.updateTodo = updateTodo;
const deleteTodo = async (req, res) => {
    const { query } = req;
    todoList_1.default
        .findByIdAndDelete(query._id)
        .then((result) => {
        res.send(result);
    })
        .catch((error) => res.status(400).send(error));
};
exports.deleteTodo = deleteTodo;
