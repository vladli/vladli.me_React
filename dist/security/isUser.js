"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.isAuthenticated = void 0;
const errors_1 = require("../config/errors");
function isAuthenticated(req, res, next) {
    const { userId, isAuth } = req;
    if (!userId || !isAuth) {
        res.status(401).json({ message: errors_1.NOT_AUTH });
        return;
    }
    next();
}
exports.isAuthenticated = isAuthenticated;
function isAdmin(req, res, next) {
    isAuthenticated(req, res, function () {
        const { authRole } = req;
        if (authRole !== "admin") {
            res.status(401).json({ message: errors_1.NO_PREMESSION });
            return;
        }
        next();
    });
}
exports.isAdmin = isAdmin;
const isUser = Object.create(null);
exports.default = Object.assign(isUser, {
    Authenticated: isAuthenticated,
    Admin: isAdmin,
});
