import { z } from "zod";

export const commentSchema = z.object({
  body: z
    .string()
    .trim()
    .min(
      3,
      "Comment must be at least 3 characters."
    )
    .max(
      500,
      "Comment cannot exceed 500 characters."
    ),
});

export type CommentFormData =
  z.infer<typeof commentSchema>;