import { z } from "zod";

import { ROLES } from "@/constants";

export const loginSchema = z.object({
  role: z.enum([
    ROLES.CONTENT_MANAGER,
    ROLES.REVIEWER,
    ROLES.READER,
  ]),
});

export type LoginFormValues = z.infer<typeof loginSchema>;