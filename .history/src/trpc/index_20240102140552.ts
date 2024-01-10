import { publicProcedure, router } from "./trpc";

export const appRouter = router({
   auth: router
})


export type AppRouter = typeof appRouter