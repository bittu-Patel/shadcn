import { initTRPC } from "@trpc/server";
import { ExprssContext }

const t = initTRPC.context<ExpressContext>().create()
export const router = t.router
export const publicProcedure = t.procedure