const { z } = require("zod");

export const usernameSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(20)
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      "Username can only contain letters numbers and underscores"
    ),
});

export const eventSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be 100 chars or less"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(500, "Description must be 2000 chars or less"),
  duration: z.number().int().positive("Duration must be positive"),
  isPrivate: z.boolean(),
});
