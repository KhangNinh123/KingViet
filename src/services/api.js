const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const api = {
  get: async (endpoint) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders(),
      },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Lỗi kết nối");
    return data;
  },

  post: async (endpoint, body) => {
    const isFormData = body instanceof FormData;
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...getAuthHeaders(),
      },
      body: isFormData ? body : JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Lỗi kết nối");
    return data;
  },

  put: async (endpoint, body) => {
    const isFormData = body instanceof FormData;
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "PUT",
      headers: {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...getAuthHeaders(),
      },
      body: isFormData ? body : JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Lỗi kết nối");
    return data;
  },

  delete: async (endpoint) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders(),
      },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Lỗi kết nối");
    return data;
  },
};
