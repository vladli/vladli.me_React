"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userResolver_1 = require("../resolvers/userResolver");
const router = (0, express_1.Router)();
router.get("/getId/:uid", userResolver_1.getUsers);
router.get("/getAllUsers", userResolver_1.getAllUsers);
exports.default = router;
