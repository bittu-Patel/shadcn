'use client'

import Image from 'next/image'
import { PRODUCT_CATEGORIES } from './config'
import { Button } from './ui/button'


type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
  category: Category
  handleOpen: () => void
  close: () => void
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
          className='gap-1.5'
          onClick={handleOpen}>
         
            {category.label}
        </Button>
      </div>

     

   
                      </div>

                      <Link
                        href={item.href}
                        className='mt-6 block font-medium text-gray-900'>
                        {item.name}
                      </Link>
                      <p
                        className='mt-1'
                        aria-hidden='true'>
                        Shop now
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default NavItem;
