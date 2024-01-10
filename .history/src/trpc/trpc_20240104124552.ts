import { initTRPC } from "@trpc/server";

const t = initTRPC.context<Expre> ().create()
export const router = t.router
export const publicProcedure = t.procedure