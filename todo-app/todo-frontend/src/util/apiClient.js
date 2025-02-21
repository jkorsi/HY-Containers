import axios from "axios";

let apiClient = "";

if (!import.meta.env.PROD) {
  apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
  });
} else {
  // in prod
  apiClient = axios.create({
    baseURL: "/api/",
  });
}

export default apiClient;
