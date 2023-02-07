import { GraphQLClient } from "graphql-request";

export default async function gqlRequest(query: string, variables?: any) {
  const accessTokenRaw = sessionStorage.getItem("Authorization");
  const client = new GraphQLClient("http://localhost:5000/graphql", {
    headers: {
      authorization: accessTokenRaw ? `Bearer ${accessTokenRaw}` : "",
    },
  });

  try {
    const data = await client.request(query, variables);
    return data;
  } catch (error: any) {
    throw JSON.stringify(error.response.errors[0]);
  }
}
