"use client"
import { useEffect, useRef, useState } from "react"
import { PRODUCT_CATEGORIES } from "./config"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/use-on-click-outside"

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<
    null | number
  >(null)

useEffect(() => )

  const navRef = useRef<HTMLDivElement | null>(null)
  
  const isAnyOpen = activeIndex !== null

  useOnClickOutside(navRef, () => setActiveIndex(null))

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null)
          } else {
            setActiveIndex(i)
          }
        }
        const isOpen = i === activeIndex
        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        )
      })}

    </div>
  )
}

export default NavItems;