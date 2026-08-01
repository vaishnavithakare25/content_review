import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { ROUTE_PATHS } from "@/constants";
import { useAuthStore } from "@/store/auth.store";

import { authService } from "../services/auth.service";
import type { LoginRequest } from "../types/auth.type";

export const useLogin = () => {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: (payload: LoginRequest) => authService.login(payload),

    onSuccess: ({ token, user }) => {
      login(token, user);

      navigate(ROUTE_PATHS.POSTS, {
        replace: true,
      });
    },
  });
};