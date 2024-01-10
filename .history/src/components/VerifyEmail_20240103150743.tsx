import { trpc } from "@/trpc/client"
import { Verify } from "crypto"
import { XCircle } from "lucide-react"

const VerifyEmail = ({ token }: VerifyEmailProps) => {
    const { data, isLoading, isError } =
    trpc.auth.verifyEmail.useQuery({
        token,
    })
    if(isError) {
return <div className="flex flex-col items-center gap-2">
    <XCircle className="h-8 w-8 text-red-600" />
    <h3 className="font-semibold text-xl">There Was A Problem</h3>
     </div>
    }

}

export default VerifyEmail