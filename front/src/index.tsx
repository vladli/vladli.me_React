import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./index.css";
import App from "./App";
import React from "react";

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
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
