import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 20000,
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("accessToken");

    config.headers["Authorization"] = token ? `Bearer ${token}` : "";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
