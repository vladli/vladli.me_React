"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.getUsers = void 0;
const firebase_1 = __importDefault(require("../firebase/firebase"));
const errors_1 = require("../config/errors");
const getUsers = (req, res) => {
    const { role, params } = req;
    if (role !== "admin")
        return res.status(404).send(errors_1.NO_PREMESSION);
    firebase_1.default
        .auth()
        .getUser(params.uid)
        .then((user) => res.json(user))
        .catch(() => res.send(errors_1.NO_PREMESSION));
};
exports.getUsers = getUsers;
const getAllUsers = (req, res) => {
    const { role } = req;
    //if (role !== "admin") return res.status(404).send(NO_PREMESSION);
    firebase_1.default
        .auth()
        .listUsers()
        .then((users) => res.send(users))
        .catch(() => res.send(errors_1.NO_PREMESSION));
};
exports.getAllUsers = getAllUsers;
