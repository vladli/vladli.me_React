import axios from "axios";

export default async function fetchServer(url: string, variables?: any) {
  const accessTokenRaw = sessionStorage.getItem("Authorization");
  const uri = "/api" + url + variables;
  console.log(uri);
  try {
    const response = await axios(uri, {
      headers: {
        Authorization: accessTokenRaw ? `Bearer ${accessTokenRaw}` : "",
      },
    });

    return response.data;
  } catch (err) {
    throw err;
  }
}
