import { Max }

interface PageProps {
    params: {
        productId: string
    }
}

const page = ({ params }: PageProps) => {
  return (
    <MaxWidthWrapper></MaxWidthWrapper>
    <div></div>
  )
}

export default page