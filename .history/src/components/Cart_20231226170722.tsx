import { Sheet, ShoppingCart } from "lucide-react"
import { SheetTrigger } from "./ui/sheet"

const Cart = () => {
  return (
<Sheet>
<SheetTrigger className="group">
    <ShoppingCart className="h-6 w-6 flex-shrink" />
</SheetTrigger>

</Sheet>
    )
}

export default Cart