import axios from "axios";

function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    token: params.get("t"), // 從 URL 獲取 token
    f: params.get("f") === "true", // 從 URL 獲取 f 並轉為布林值
  };
}

const request = axios.create({
  timeout: 10000,
  baseURL: import.meta.env.VITE_BASE_API, // 基礎 URL 來自環境變數
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

request.interceptors.request.use((config) => {
  const { token, f } = getUrlParams();

  if (token) {
    config.headers.token = token;
  }

  if (typeof f !== "undefined") {
    config.params = { ...config.params, f };
  }

  return config;
});

request.interceptors.response.use(
  (response) => {
    if (response.data.code !== 0) {
      return Promise.reject(response.data.message || "Error");
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 403) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default request;