import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "/",
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("Authorization")}`,
  },
};

const instance = axios.create(axiosConfig);

export default instance;
