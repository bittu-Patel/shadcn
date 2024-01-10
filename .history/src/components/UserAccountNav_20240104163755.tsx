"use client"

import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu"


const UserAccountNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
      asChild className="overflow-visible">
<Button variant='ghost'
size='sm'
className="relative"
>My Account</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-wite w-60 ali">

      </DropdownMenuContent>
    </DropdownMenu>
  )
   
    
  
}

export default UserAccountNav
