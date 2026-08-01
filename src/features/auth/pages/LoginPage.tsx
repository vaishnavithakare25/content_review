import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ROLES } from "@/constants";
import { Button, Card, Select } from "@/shared/components";

import { useLogin } from "../hooks/useLogin";
import {
  loginSchema,
  type LoginFormValues,
} from "../validation/login.schema";

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

  const roleOptions = [
    {
      label: "Content Manager",
      value: ROLES.CONTENT_MANAGER,
    },
    {
      label: "Reviewer",
      value: ROLES.REVIEWER,
    },
    {
      label: "Reader",
      value: ROLES.READER,
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <Card
        title="Content Review Workspace"
        className="w-full max-w-md"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <Select
            id="role"
            label="Select Role"
            placeholder="Select a role"
            options={roleOptions}
            error={errors.role?.message}
            {...register("role")}
          />

          <Button
            type="submit"
            disabled={isPending}
            fullWidth
          >
            {isPending ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;