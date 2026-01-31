import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: process.env.GIT_TOKEN,
    "X-GitHub-Api-Version": "2022-11-28",
    Accept: "application/vnd.github+json",
  },
});
