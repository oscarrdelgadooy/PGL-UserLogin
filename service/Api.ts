import { RegisterData } from "../types/api_types/RegisterType";

const API_BASE_URL = "http://IP_DEL_PROFESOR";

export const registerUser = async (userData: RegisterData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    return { ok: response.ok, status: response.status, data };
  } catch (error) {
    return { ok: false, status: 0, data: { message: "Error de conexión" } };
  }
};
