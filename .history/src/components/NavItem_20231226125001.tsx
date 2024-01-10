import { PRODUCT_CATEGORIES } from "./config"
import { Button } from "./ui/button"

type Category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProps {
    category: Category
    
}

const NavItem = ({}: NavItemProps) => {
  return <div className="flex">
    <div className="relative flex items-center">
<Button className="gap-1.5">

</Button>
</div>
    </div>
  
}

export default NavItem