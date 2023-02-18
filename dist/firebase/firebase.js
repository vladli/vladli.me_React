"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const tempdata = require("./service-account.json");
const data = JSON.stringify(tempdata);
const json = JSON.parse(data);
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(json),
});
exports.default = firebase_admin_1.default;
