import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string().min(1, { message: "Title required" }),
  description: z.string().min(1, { message: "Job description required" }),
});

export type CreateCategorySchema = z.infer<typeof createCategorySchema>;

export const updateCategorySchema = createCategorySchema.extend({
  id: z.string().min(1, { message: "Id required" }),
});

export const deletCategorySchema = z.object({
  id: z.string().min(1, { message: "Id required" }),
});
