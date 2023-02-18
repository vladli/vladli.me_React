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
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: ["http://localhost:3000", "https://vladli.me"] }));
app.use("/api", verifyToken_1.default, index_1.default);
const root = require("path").join("./", "front", "build");
app.use(express_1.default.static(root));
app.get("*", (req, res) => {
    res.sendFile("index.html", { root });
});
/** Server */
const PORT = process.env.PORT ?? 5000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect(process.env.DB_CONNECT, {})
    .then(() => console.log("MongoDB connected."))
    .catch((error) => console.log(error));
