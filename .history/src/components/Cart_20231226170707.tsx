import { Sheet, ShoppingCart } from "lucide-react"
import { SheetTrigger } from "./ui/sheet"

const Cart = () => {
  return (
<Sheet>
<SheetTrigger className="group">
    <ShoppingCart className="h-6 w-" />
</SheetTrigger>

</Sheet>
    )
}

export default Cart