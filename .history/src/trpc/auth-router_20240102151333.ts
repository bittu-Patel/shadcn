import { router } from "@trpc/server";
import { publicProcedure } from "./trpc";
import { AuthCredentialsValidator } from "@/lib/validators/account-credentials-validator";


export const authRouter = router({
    create a PayloadUser: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input }) => ())
})