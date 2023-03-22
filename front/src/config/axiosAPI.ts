import axios from "axios";

const instance: any = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("Authorization")}`,
  },
});

export default instance;
