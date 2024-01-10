import { Sheet, ShoppingCart } from "lucide-react"
import { SheetTrigger } from "./ui/sheet"

const Cart = () => {
  return (
<Sheet>
<SheetTrigger className="">
    <ShoppingCart />
</SheetTrigger>

</Sheet>
    )
}

export default Cart