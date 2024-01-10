import { publicProcedure, router } from "./trpc";

export const appRouter = router({
   auth
})


export type AppRouter = typeof appRouter