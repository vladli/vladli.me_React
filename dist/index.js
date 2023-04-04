"use strict";
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
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", verifyToken_1.default, index_1.default);
const dirname = path_1.default.resolve();
const buildPath = path_1.default.normalize(path_1.default.join(dirname, "/front/dist"));
app.use(express_1.default.static(buildPath));
app.get("/*", function (req, res) {
    res.sendFile("index.html", { root: path_1.default.join(dirname, "/front/dist/") });
});
/** Server */
const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect(process.env.DB_CONNECT, {})
    .then(() => console.log("MongoDB connected."))
    .catch((error) => console.log(error));
