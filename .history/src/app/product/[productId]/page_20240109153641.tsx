import MaxWidthWrapper from "@/components/MaxWidthWrapper"


interface PageProps {
    params: {
        productId: string
    }
}

const page = ({ params }: PageProps) => {
  return (
    <MaxWidthWrapper>
    <div className="bg-white"> 
     <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 ">

     </div>
    </div>
    </MaxWidthWrapper>
  )
}

export default page