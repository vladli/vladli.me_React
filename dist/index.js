import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import routes from "./routes/index";
import verifyToken from "./security/verifyToken";
import path, { resolve } from "path";
import { URL } from "url";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000", "https://vladli.me"] }));
app.use("/api", verifyToken, routes);
const __dirname = new URL(".", import.meta.url).pathname;
app.use(express.static(resolve(__dirname, "front/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front/dist", "index.html"));
});
/** Server */
const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
mongoose.set("strictQuery", true);
mongoose
    .connect(process.env.DB_CONNECT, {})
    .then(() => console.log("MongoDB connected."))
    .catch((error) => console.log(error));
