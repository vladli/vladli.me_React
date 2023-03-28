import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "/",
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("Authorization")}`,
  },
};

const instance: any = axios.create(axiosConfig);

export default instance;
