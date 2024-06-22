import z from "zod";

export const PrefApiResponseSchema = z.object({
  message: z.string(),
  result: z.object({
    prefCode: z.number(),
    prefName: z.string(),
  }),
});
