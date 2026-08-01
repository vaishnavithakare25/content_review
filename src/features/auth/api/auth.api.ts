import type { LoginRequest, LoginResponse } from "../types/auth.type";

export const authApi = {
  login: async (
    payload: LoginRequest,
  ): Promise<LoginResponse> => {
    return Promise.resolve({
      token: "mock-token",
      user: {
        id: 1,
        username: "Demo User",
        email: "demo@example.com",
        role: payload.role,
      },
    });
  },
};