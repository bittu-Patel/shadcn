import {  ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { format } from "path"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Image from "next/image"


const Cart = () => {

const itemCount = 0
const fee = 1

  return (
<Sheet>
<SheetTrigger className="group -m-2 flex items-center p-2">
    <ShoppingCart 
    aria-hidden='true'
    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" 
    />
<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
0
</span>

</SheetTrigger>
<SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg font-bold ">
<SheetHeader className="space-y-2.5 pr-6">
<SheetTitle className="">
(Cart) 0
</SheetTitle>
</SheetHeader>
{itemCount > 0 ? (
  <>
  <div className="flex w-full flex-col pr-6">
{/* Todo: Cart Logic*/}
cart items
  </div>
  <div className="space-y-4 pr-6">

<Separator />
<div className="space-y-4 text-sm">
<div className="flex">
  <span className="flex-1"> Shopping</span>
  <span>Free</span>
</div>
<div className="flex">
  <span className="flex-1">Transaction Fee</span>
  <span>{formatPrice(fee)}</span>
</div>
<div className="flex">
  <span className="flex-1">Total</span>
  <span>{formatPrice(fee)}</span>
</div>
</div>

<SheetFooter >
<SheetTrigger asChild>
  <Link href='/Cart' className={buttonVariants({
    className: 'w-full'
  })}>
    Continue to CheckOut
  </Link>
</SheetTrigger>

</SheetFooter>
  </div>
  </>
): (
   <div className="flex h-full flex-col items-center justify-center space-y-1">
    <div className="relative mb-4 h-150 w-150 text-muted-foreground">
    <Image
                src='/emptyimage.jpg'
                fill
                alt='empty shopping cart hippo'
              />    </div>
   </div>)}

</SheetContent>
</Sheet>
    )
}

export default Cart;