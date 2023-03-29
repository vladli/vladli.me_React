"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = __importDefault(require("../firebase/firebase"));
function verifyToken(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        req.isAuth = false;
        return next();
    }
    const token = authToken.split(" ")[1];
    if (!token || token === "") {
        req.isAuth = false;
        return next();
    }
    firebase_1.default
        .auth()
        .verifyIdToken(token)
        .then((user) => {
        req.userId = user.uid;
        req.isAuth = true;
        req.authRole = user.role;
        next();
    })
        .catch(() => {
        req.isAuth = false;
        return next();
    });
}
exports.default = verifyToken;
