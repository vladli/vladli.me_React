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

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
});
const authLink = setContext((_, { headers }) => {
  const accessTokenRaw = localStorage.getItem("Authorization");
  console.log(accessTokenRaw);
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
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
