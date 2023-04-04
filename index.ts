import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import express, { Express } from "express";
import routes from "./routes/index";
import verifyToken from "./security/verifyToken";
import path from "path";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use("/api", verifyToken, routes);

app.use("/", express.static(path.join(__dirname, "/front/dist")));
app.get("/*", function (req, res) {
  res
    .set({ "Content-Type": "text/html" })
    .sendFile(path.join(__dirname, "/front/dist/", "index.html"));
});
/** Server */

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DB_CONNECT!, {})
  .then(() => console.log("MongoDB connected."))
  .catch((error) => console.log(error));
