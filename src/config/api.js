// api.js
import axios from "axios";
import { getUserDetails } from "../utils/localStorageKeys";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    // Skip adding Authorization header for login endpoint
    if (config.url && config.url.includes("/login")) {
      return config;
    }

    const userDetails = getUserDetails();
    const token = userDetails?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
