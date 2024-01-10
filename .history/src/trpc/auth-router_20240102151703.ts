import { publicProcedure, router } from "./trpc";
import { AuthCredentialsValidator } from "@/lib/validators/account-credentials-validator";
import { getPayloadClient } from "@/get-payload";


export const authRouter = router({
    create a PayloadUser: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input }) => {
        const { email, password } = input
        const payLoad = await getPayloadClient()

        //check if 
    }
})