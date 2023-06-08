import { AxiosResponse } from "axios";
import { AuthResponse } from "../model/types";
import api from "@/shared/api/api";

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return await api.post<AuthResponse>("/users/login/", { email, password })
  }
  static async logout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }

}