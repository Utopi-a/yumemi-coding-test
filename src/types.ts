import z from "zod";

export const PrefApiResponseSchema = z.array(
  z.object({
    prefCode: z.number(),
    prefName: z.string(),
  }),
);

export type PrefApiResponse = z.infer<typeof PrefApiResponseSchema>;
