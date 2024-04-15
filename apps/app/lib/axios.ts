import { API_URL } from "@/config";
import Axios from "axios";
import { tokenStorage } from "@/lib/storage";

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
  const token = tokenStorage.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
