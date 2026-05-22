'use client';

import { useEffect, useState } from 'react';

import { useOnKeyDown } from '@/hooks/useOnKeyDown';
import { BurgerIcon } from '@/components/atoms/BurgerIcon';
import { MobileMenu } from './MobileMenu';

export default function MobileMenuIsland() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useOnKeyDown('Escape', () => setIsOpen(false));

  return (
    <>
      <button
        className='absolute right-4 top-8 z-50 md:hidden'
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label='Menu'
      >
        <BurgerIcon isOpen={isOpen} />
      </button>
      <MobileMenu isOpen={isOpen} />
    </>
  );
}