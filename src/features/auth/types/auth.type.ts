import type { Role } from "@/constants";

export interface LoginRequest {
  role: Role;
}

export interface AuthUser {
  id: number;
  username: string;
  email: string;
  role: Role;
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
}