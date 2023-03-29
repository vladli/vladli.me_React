"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.deleteUser = exports.getUser = exports.createUser = void 0;
const firebase_1 = __importDefault(require("../firebase/firebase"));
const createUser = (req, res) => {
    const { query } = req;
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
    const { query } = req;
    firebase_1.default
        .auth()
        .getUser(query["uid"])
        .then((user) => res.json(user))
        .catch((err) => res.send(err));
};
exports.getUser = getUser;
const deleteUser = (req, res) => {
    const { query } = req;
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
        .catch((err) => res.send(err));
};
exports.deleteUser = deleteUser;
const getAllUsers = (req, res) => {
    firebase_1.default
        .auth()
        .listUsers()
        .then((users) => {
        const userList = [];
        users.users.map((user) => userList.push({
            uid: user.uid,
            email: user.email,
            creationTime: user.metadata.creationTime,
            role: user.customClaims?.role,
        }));
        res.send(userList);
    })
        .catch((err) => res.send(err));
};
exports.getAllUsers = getAllUsers;
