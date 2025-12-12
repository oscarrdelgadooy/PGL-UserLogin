import { LoginData, WelcomeDataGet } from "../types/api_types/RegisterType";
import { authStorageService } from "./AuthStorage";

const API_BASE_URL = "http://10.0.2.2:5000";

const registerUser = async (fullname: string, email: string, pswd: string) => {
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

const loginUser = async (userData: LoginData): Promise<string> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    return data.object.token;
  } catch (error) {
    console.log(error);
    return "";
  }
};

const welcomeApi = async (): Promise<WelcomeDataGet> => {
  try {
    const token = await authStorageService.getToken();

    const response = await fetch(`${API_BASE_URL}/welcome`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();

    return { status: data.statusCode, object: data.object };
  } catch (error) {
    console.log(error);
    return { status: 404, object: "Encontradon't" };
  }
};

export const authApiService = {
  registerUser,
  loginUser,
  welcomeApi,
};
