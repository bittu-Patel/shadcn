import {  ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"

const Cart = () => {

const itemCount = 0

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
<div classname>

</div>

</div>
  </div>
  </>
): ( <div></div>)}

</SheetContent>
</Sheet>
    )
}

export default Cart;