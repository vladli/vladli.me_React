import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import typeDefs from "./schema/index.js";
import resolvers from "./resolvers/index.js";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(express.static(resolve(__dirname, "front/build")));
app.get("*/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front/build", "index.html"));
});

mongoose
  .connect(process.env.DB_CONNECT, {})
  .then(() => console.log("MongoDB connected."))
  .catch((error) => console.log(error));
const httpServer = http.createServer(app);

async function startApolloServer(app, httpServer) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true,
    context: ({ req }) => {
      const { isAuth, userId } = req;
      return { isAuth, userId };
    },
  });
  await server.start();
  server.applyMiddleware({ app });
  await httpServer.listen({ port: PORT });
  console.log(`🚀 Server started on port ` + httpServer.address().port);
}
startApolloServer(app, httpServer);
