import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api", // Corrected `baseUrl` to `baseURL`
  withCredentials: true,
});
