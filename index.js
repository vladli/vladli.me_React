import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
import typeDefs from "./schema/index.js";
import resolvers from "./resolvers/index.js";
import path from "path";
import http from "http";
import { verifyToken } from "./security/verifyToken.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// app.use(express.static(resolve(__dirname, "front/build")));
// app.get("*/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "front/build", "index.html"));
// });

const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  introspection: true,
});
await server.start();

app.use(
  "/graphql",
  cors(),
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

mongoose
  .connect(process.env.DB_CONNECT, {})
  .then(() => console.log("MongoDB connected."))
  .catch((error) => console.log(error));
