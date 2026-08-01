import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ROLES } from "@/constants";

import { useLogin } from "../hooks/useLogin";
import { loginSchema, type LoginFormValues } from "../validation/login.schema";

const LoginPage = () => {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      role: undefined,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    mutate(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Content Review Workspace
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label
              htmlFor="role"
              className="mb-2 block text-sm font-medium"
            >
              Select Role
            </label>

            <select
              id="role"
              {...register("role")}
              className="w-full rounded-md border px-3 py-2"
            >
              <option value="">Select a role</option>
              <option value={ROLES.CONTENT_MANAGER}>
                Content Manager
              </option>
              <option value={ROLES.REVIEWER}>
                Reviewer
              </option>
              <option value={ROLES.READER}>
                Reader
              </option>
            </select>

            {errors.role && (
              <p className="mt-1 text-sm text-red-500">
                {errors.role.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {isPending ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;