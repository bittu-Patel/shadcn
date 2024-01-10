import { trpc } from "@/trpc/client"
import { Verify } from "crypto"

const VerifyEmail = ({ token }: verifyEmailProps) => {
    const { data, isLoading, isError } =
    trpc.auth.verifyEmail.useQuery({
        token,
    })
    if(isError) {
return <div className="flex flex-col items-center gap-2">
    <XCircle className+ />
    
     </div>
    }

}

export default VerifyEmail