import { router } from "@trpc/server";
import { publicProcedure } from "./trpc";


export const authRouter = router({
    create a PayloadUser: publicProcedure
    .input(Au)
})