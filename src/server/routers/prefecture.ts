import {
  PopulationProcedureOutput,
  PrefApiResponseSchema,
  populationProcedureSchema,
} from "@/types";
import axios from "axios";
import axiosRetry from "axios-retry";
import { z } from "zod";
import { procedure, router } from "../trpc";

axiosRetry(axios, { retries: 3 });

export const prefectureRouter = router({
  getPrefectureList: procedure.output(PrefApiResponseSchema).query(async () => {
    const prefectures = await axios.get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
      headers: { "X-API-KEY": process.env.RESAS_API_KEY },
    });

    return prefectures.data.result;
  }),

  getPopulation: procedure
    .input(z.object({ prefCodes: z.array(z.string()) }))
    .output(populationProcedureSchema)
    .query(async (input) => {
      const prefCodes = input.input.prefCodes;
      const populationOfPref: PopulationProcedureOutput = await Promise.all(
        prefCodes.map(async (prefCode) => {
          const population = await axios.get(
            "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear",
            {
              headers: { "X-API-KEY": process.env.RESAS_API_KEY },
              params: {
                prefCode: prefCode,
                cityCode: "-",
              },
            },
          );
          return { prefCode: prefCode, population: population.data.result.data };
        }),
      );

      return populationOfPref;
    }),
});

// export type definition of API
export type AppRouter = typeof prefectureRouter;
