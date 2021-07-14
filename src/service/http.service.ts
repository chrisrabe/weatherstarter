import axios from "axios";
import config from "../config.json";

const axiosInstance = axios.create({
  baseURL: config.weatherApi,
  headers: {
    Accept: "application/json",
  },
});

export default axiosInstance;
