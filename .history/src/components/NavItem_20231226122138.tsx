// components/navItem.tsx
import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Ghost } from 'lucide-react';
import { PRODUCT_CATEGORIES } from './config';

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
        <Button className="gap-1.5" onClick={handleOpen}>
       {category}
        </Button>
      </div>
    </div>
 );
};

export default NavItem;