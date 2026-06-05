const DEFAULT_API_URL = "http://localhost:5000/api";

const normalizeApiUrl = (url) => {
  const apiUrl = (url || DEFAULT_API_URL).trim().replace(/\/+$/, "");
  return apiUrl.endsWith("/api") ? apiUrl : `${apiUrl}/api`;
};

const HOST = normalizeApiUrl(import.meta.env.VITE_API_URI);

export default {
  HOST,
};
