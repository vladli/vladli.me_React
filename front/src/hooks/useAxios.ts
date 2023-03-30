import axios, { AxiosRequestConfig } from "axios";
import { makeUseAxios } from "axios-hooks";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "/",
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("Authorization")}`,
  },
};

const useAxios = makeUseAxios({ axios: axios.create(axiosConfig) });

export default useAxios;
