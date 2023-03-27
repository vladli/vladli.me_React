import axios from "axios";

const instance: any = axios.create({
  baseURL: "/",
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("Authorization")}`,
  },
});

export default instance;
