"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userResolver_1 = require("../resolvers/userResolver");
const router = (0, express_1.Router)();
router.post("/user", userResolver_1.createUser);
router.get("/user", userResolver_1.getUser);
router.delete("/user", userResolver_1.deleteUser);
router.get("/getAllUsers", userResolver_1.getAllUsers);
exports.default = router;
