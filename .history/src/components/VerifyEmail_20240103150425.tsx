import { trpc } from "@/trpc/client"
import { Verify } from "crypto"

const VerifyEmail = ({ token }: verifyEmailProps) => {
    const { data, isLoading, isError } =
    trpc.auth.verifyEmail.useQuery({
        token,
    })
    if(isError) {
return <div classna> </div>
    }

}

export default VerifyEmail