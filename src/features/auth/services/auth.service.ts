import { authApi } from "../api/auth.api";
import type { LoginRequest } from "../types/auth.type";

export const authService = {
  login: (payload: LoginRequest) => authApi.login(payload),
};