import z from "zod";

export const PrefApiResponseSchema = z.array(
  z.object({
    prefCode: z.number(),
    prefName: z.string(),
  }),
);

export type PrefApiResponse = z.infer<typeof PrefApiResponseSchema>;

const PopulationApiResponseSchema = z.array(
  z.object({
    label: z.union([
      z.literal("総人口"),
      z.literal("年少人口"),
      z.literal("生産年齢人口"),
      z.literal("老年人口"),
    ]),
    data: z.array(z.object({ year: z.number(), value: z.number(), rate: z.number().optional() })),
  }),
);

export const populationProcedureSchema = z.array(
  z.object({ prefCode: z.string(), population: PopulationApiResponseSchema }),
);

export type PopulationProcedureOutput = z.infer<typeof populationProcedureSchema>;
