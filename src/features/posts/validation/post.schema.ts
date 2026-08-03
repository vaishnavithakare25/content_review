import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters.")
    .max(100, "Title cannot exceed 100 characters."),

  body: z
    .string()
    .trim()
    .min(10, "Content must be at least 10 characters.")
    .max(1000, "Content cannot exceed 1000 characters."),

  tags: z
    .array(z.string().trim())
    .min(1, "Select at least one tag."),
});

export type PostFormData = z.infer<typeof postSchema>;