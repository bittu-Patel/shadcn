"use client"

import { Button } from './ui/button';
import { PRODUCT_CATEGORIES } from './config';
import { Ghost } from 'lucide-react';

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
 category: Category;
 handleOpen: () => void;
 isOpen: boolean;
 isAnyOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ category, handleOpen, isOpen, isAnyOpen }) => {
 return (
    <div className={`flex ${isAnyOpen && !isOpen ? 'opacity-50' : ''}`}>
      <div className="relative flex items-center">
        <Button className="gap-1.5"
        onClick={handleOpen}>
      {category?.label}
        </Button>
      </div>
    </div>
 );
};

export default NavItem;