import { ChevronDown } from "lucide-react"
import { PRODUCT_CATEGORIES } from "./config"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

type Category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProps {
    category: Category
    handleOpen: () => void
    isOpen: boolean
    isAnyOpen: boolean
}

const NavItem = ({isAnyOpen, isOpen, handleOpen, category}: NavItemProps) => {
  return <div className="flex">
    <div className="relative flex items-center">
<Button className="gap-1.5" onClick={handleOpen} variant={isOpen ? "secondary" : "ghost"}>
{category?.label}
<ChevronDown 
className={cn(
  'h-4 w-4 transition-all text-muted-'  
)}

/>
</Button>
</div>
    </div>
  
}

export default NavItem