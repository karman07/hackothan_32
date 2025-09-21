import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export const verifyWithAPI = async (certFile: File) => {
  const formData = new FormData();
  formData.append("cert_file", certFile);

  const response = await axios.post(`${API_URL}/verify-certificate`, formData, {
    headers: {
      "accept": "application/json",
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
