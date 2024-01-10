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

    </div>
    </MaxWidthWrapper>
  )
}

export default page