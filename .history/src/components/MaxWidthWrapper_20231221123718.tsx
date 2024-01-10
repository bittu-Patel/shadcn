import { ReactNode } from "react"

const MaxWidthWrapper = ({
    className,
    children,
}: {
className?: string
children: ReactNode
}) => {
  return (
    <div className="mx-auto w-full max-w-scr">



    </div>
  )
}

export default MaxWidthWrapper