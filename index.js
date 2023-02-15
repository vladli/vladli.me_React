import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import typeDefs from "./schema/index.js";
import resolvers from "./resolvers/index.js";
import http from "http";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { verifyToken } from "./security/verifyToken.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(express.static("front/build"));
app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "front/build") });
});

const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  introspection: true,
  formatError: (formattedError, error) => {
    return formattedError.message;
  },
});
await server.start();

app.use(
  "/graphql",
  cors({
    origin: [
      "http://localhost:3000",
      "studio.apollographql.com",
      "https://vladli.me",
    ],
    credentials: true,
  }),
  verifyToken,
  bodyParser.json(),
  expressMiddleware(server, {
    context: async ({ req }) => {
      const { isAuth, userId, role } = req;
      return { isAuth, userId, role };
    },
  })
);

await new Promise((resolve) => httpServer.listen({ port: 5000 }, resolve));
console.log(`🚀 Server ready at http://localhost:5000/graphql`);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DB_CONNECT, {})
  .then(() => console.log("MongoDB connected."))
  .catch((error) => console.log(error));
