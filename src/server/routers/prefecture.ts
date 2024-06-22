import { PrefApiResponseSchema } from "@/types";
import axios from "axios";
import axiosRetry from "axios-retry";
import { procedure, router } from "../trpc";

axiosRetry(axios, { retries: 3 });

export const prefectureRouter = router({
  getPrefectureList: procedure.output(PrefApiResponseSchema).query(async () => {
    const prefectures = await axios.get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
      headers: { "X-API-KEY": process.env.RESAS_API_KEY },
    });

    return prefectures.data;
  }),
});

// export type definition of API
export type AppRouter = typeof prefectureRouter;
