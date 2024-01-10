import { publicProcedure, router } from "./trpc";
import { AuthCredentialsValidator } from "../lib/validators/account-credentials-validator";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";


export const authRouter = router({
    createPayloadUser: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input }) => {
        const { email, password } = input
        const payLoad = await getPayloadClient()

        //check if user already exist
        const { docs: users  } = await payLoad.find({
          collection: 'user',
          where: {
            email: {
            equals: email,
          }
        }
        })
        if (users.length !== 0)
        throw new TRPCError({ code: 'CONFLICT' })

        await payLoad.create({
            collection: 'users',
            data: {
              email,
              password,
              role: ''
            },

        })
})
})