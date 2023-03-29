"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const verifyToken_1 = __importDefault(require("./security/verifyToken"));
const path_1 = __importStar(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: ["http://localhost:3000", "https://vladli.me"] }));
app.use("/api", verifyToken_1.default, index_1.default);
app.use(express_1.default.static((0, path_1.resolve)("./", "front/dist")));
app.get("*", (req, res) => {
    res.sendFile(path_1.default.resolve("./", "front/dist", "index.html"));
});
/** Server */
const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect(process.env.DB_CONNECT, {})
    .then(() => console.log("MongoDB connected."))
    .catch((error) => console.log(error));
