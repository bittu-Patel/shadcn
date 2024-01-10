'use client'
import Image from 'next/image'
import { PRODUCT_CATEGORIES } from './config'
import { Button } from './ui/button'
import { Ghost } from 'lucide-react'

type Category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProps {
  category: Category
  handleOpen: () => void
  isOpen: boolean
  isAnyOpen: boolean
}

const NavItem = ({
  isAnyOpen,
  category,
  handleOpen,
  isOpen,
}: NavItemProps) => {
  return (
    <div className='flex'>
      <div className='relative flex items-center'>
        <Button
          
        </Button>
      </div>
        </div>
  )
}

export default NavItem;
