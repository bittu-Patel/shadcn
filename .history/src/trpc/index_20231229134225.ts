import router from "next/router";
import { publicProcedure } from "./trpc";

export const appRouter = router({
    anyApiRoute: publicProcedure.query
})