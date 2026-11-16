import axios from "axios";

const token = process.env.NEXT_PUBLIC_GIT_TOKEN?.trim();

export const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
    Accept: "application/vnd.github+json",
    ...(token && { Authorization: `Bearer ${token}` }),
  },
});

// Auto-fallback: if token is invalid or expired (401), retry without auth
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const config = error.config;
    if (error.response?.status === 401 && config && !config._retry) {
      config._retry = true;
      delete config.headers?.Authorization;
      delete config.headers?.authorization;
      return axios(config);
    }
    return Promise.reject(error);
  }
);
