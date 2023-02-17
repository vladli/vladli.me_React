import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import { fileURLToPath } from "url";
//import { verifyToken } from "./security/verifyToken.js";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);
const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000", "https://vladli.me"] }));
app.use("/", (req, res) => res.send("GOOD"));
//app.use("/api", verifyToken, routes);
// app.use(express.static(resolve(__dirname, "front/build")));
// app.get("*/", (req: Request, res: Response) => {
//   res.sendFile(path.resolve(__dirname, "front/build", "index.html"));
// });
/** Server */
const PORT = process.env.PORT ?? 5000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
mongoose.set("strictQuery", true);
mongoose
    .connect(process.env.DB_CONNECT, {})
    .then(() => console.log("MongoDB connected."))
    .catch((error) => console.log(error));
