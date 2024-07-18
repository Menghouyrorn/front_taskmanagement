import axios from "axios";
import type { AxiosRequestConfig } from "axios";

export type SendRequestPayload = Omit<AxiosRequestConfig, "url"> & {
  url: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
};

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendRequest = async (payload: SendRequestPayload) => {
  return api
    .request({ ...payload })
    .then((res) => res.data)
    .catch((err) => err);
};
