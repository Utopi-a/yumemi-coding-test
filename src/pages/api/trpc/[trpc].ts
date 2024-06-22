import * as trpcNext from "@trpc/server/adapters/next";
import { prefectureRouter } from "../../../server/routers/prefecture";

// export API handler
// @link https://trpc.io/docs/v11/server/adapters
export default trpcNext.createNextApiHandler({
  router: prefectureRouter,
  createContext: () => ({}),
});
