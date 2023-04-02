import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import express, { Express, Request, Response } from "express";
import routes from "./routes/index";
import verifyToken from "./security/verifyToken";
import path, { resolve } from "path";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://vladli.me"],
  })
);

app.use("/api", verifyToken, routes);

const dirname = path.resolve();
const buildPath = path.normalize(path.join(dirname, "/front/dist"));
app.use(express.static(buildPath));
app.get("/*", function (req, res) {
  res.setHeader("Content-Type", "text/javascript");
  res.sendFile("index.html", { root: path.join(dirname, "/front/dist/") });
});
/** Server */

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DB_CONNECT!, {})
  .then(() => console.log("MongoDB connected."))
  .catch((error) => console.log(error));
