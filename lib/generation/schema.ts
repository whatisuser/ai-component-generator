import { z } from "zod";

export const generationRequestSchema = z.object({
  prompt: z.string().trim().min(1),
});

export const generationResponseSchema = z.object({
  prompt: z.string(),
  componentName: z.string(),
  code: z.string(),
});
