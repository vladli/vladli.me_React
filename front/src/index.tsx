import React from "react";
import { RouterProvider } from "react-router-dom";
import { domMax, LazyMotion } from "framer-motion";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import router from "./router";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
});
const authLink = setContext((_, { headers }) => {
  const accessTokenRaw = sessionStorage.getItem("Authorization");
  return {
    headers: {
      ...headers,
      authorization: accessTokenRaw ? `Bearer ${accessTokenRaw}` : "",
    },
  };
});
const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <LazyMotion features={domMax}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </LazyMotion>
    </ApolloProvider>
  </React.StrictMode>
);
