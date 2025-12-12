import { LoginData, LoginResult } from "../types/api_types/RegisterType";

const API_BASE_URL = "http://10.0.2.2:5000";

export const registerUser = async (
  fullname: string,
  email: string,
  pswd: string
) => {
  try {
    const userData = { fullname, email, pswd };

    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    console.log(data);

    return { ok: response.ok, status: response.status, data };
  } catch (error) {
    console.log(error);
    return { ok: false, status: 0, data: { message: "Error de conexión" } };
  }
};

export const loginUser = async (userData: LoginData): Promise<LoginResult | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
