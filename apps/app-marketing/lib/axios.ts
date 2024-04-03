import Axios from "axios";

export const axios = Axios.create({
  // baseURL: 'https://staging.breezemm.com/api/v1',
  baseURL: "http://localhost:8001/api/v1",
});

axios.defaults.withCredentials = true;
