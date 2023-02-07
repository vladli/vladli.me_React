import { GraphQLClient } from "graphql-request";

export default function gqlRequest(query: string, variables?: any) {
  const accessTokenRaw = sessionStorage.getItem("Authorization");
  const client = new GraphQLClient("http://localhost:5000/graphql", {
    headers: {
      authorization: accessTokenRaw ? `Bearer ${accessTokenRaw}` : "",
    },
  });
  const data = client.request(query, variables);
  return data;
}
