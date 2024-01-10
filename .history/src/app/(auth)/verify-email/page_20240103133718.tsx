interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}


const VeryfEmailPage = ({ searchParams }:PageProps) => {
    const token = searchParams.token
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {token && typeof token == "string" ? (
            <div></div>
        )}
        </div>
    </div>
  )
}

export default VeryfEmailPage