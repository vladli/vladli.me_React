"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.deleteUser = exports.getUser = exports.createUser = void 0;
const firebase_1 = __importDefault(require("../firebase/firebase"));
const errors_1 = require("../config/errors");
const createUser = (req, res) => {
    const { role, query } = req;
    if (role !== "admin")
        return res.status(403).send(errors_1.NO_PREMESSION);
    firebase_1.default
        .auth()
        .createUser({
        email: query["email"],
        password: query["password"],
    })
        .then(() => res.send());
};
exports.createUser = createUser;
const getUser = (req, res) => {
    const { role, query } = req;
    if (role !== "admin")
        return res.status(403).send(errors_1.NO_PREMESSION);
    firebase_1.default
        .auth()
        .getUser(query["uid"])
        .then((user) => res.json(user))
        .catch(() => res.send(errors_1.NO_PREMESSION));
};
exports.getUser = getUser;
const deleteUser = (req, res) => {
    const { role, query } = req;
    if (role !== "admin")
        return res.status(403).end(errors_1.NO_PREMESSION);
    firebase_1.default
        .auth()
        .getUser(query["uid"])
        .then((user) => {
        if (user.customClaims?.role === "admin")
            return res.status(405).end("You can not delete Admin user.");
        firebase_1.default
            .auth()
            .deleteUser(user.uid)
            .then(() => res.send());
    })
        .catch(() => res.send(errors_1.NO_PREMESSION));
};
exports.deleteUser = deleteUser;
const getAllUsers = (req, res) => {
    const { role } = req;
    if (role !== "admin")
        return res.status(403).send(errors_1.NO_PREMESSION);
    firebase_1.default
        .auth()
        .listUsers()
        .then((users) => {
        const userList = [];
        users.users.map((user) => userList.push({
            uid: user.uid,
            email: user.email,
            creationTime: user.metadata.creationTime,
        }));
        res.send(userList);
    })
        .catch(() => res.send(errors_1.NO_PREMESSION));
};
exports.getAllUsers = getAllUsers;
