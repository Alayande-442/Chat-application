import axios from "axios";

//COMMENT Create axios instance with baseURL and withCredentials enabled for cross-origin requests
export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "/api", // Corrected `baseUrl` to `baseURL`
  withCredentials: true,
});
