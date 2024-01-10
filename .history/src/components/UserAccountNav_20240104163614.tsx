"use client"

import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu"


const UserAccountNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
      asChild className="overflow-visible">
<Button variant='ghost'
size={}
>My Account</Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
   
    
  
}

export default UserAccountNav
