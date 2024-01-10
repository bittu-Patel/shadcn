import { Verify } from "crypto"

const VerifyEmail = ({ token }: verifyEmailProps) => {
    const { data, isLoading, isError } =
    trpc.auth.verifyEmail.useQuery
  return (

    )
}

export default VerifyEmail