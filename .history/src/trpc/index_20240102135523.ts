import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    anyApiRoute: publicProcedure.query(() => {
        return 'simran'
    }),
})


export type AppRouter = typeof appRouter