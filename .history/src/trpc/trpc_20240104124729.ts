import { initTRPC } from "@trpc/server";
import {  }

const t = initTRPC.context<ExpressContext>().create()
export const router = t.router
export const publicProcedure = t.procedure