import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

export interface NavigationItemProps {
  href: string;
  title: string;
  variants: Variants;
  initial: string;
  animate: string;
  customDelay?: number;
}

const NavigationItem = ({
  href,
  title,
  variants,
  initial,
  animate,
  customDelay,
}: NavigationItemProps) => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const isActive = pathname?.startsWith(href);

  return (
    <motion.li
      variants={variants}
      initial={initial}
      animate={animate}
      custom={customDelay}
    >
      <a
        href={href}
        className={clsx(
          isActive
            ? 'text-off-black dark:text-off-white font-bold'
            : 'hover:text-off-black dark:hover:text-off-white font-medium text-slate-700 dark:text-slate-400 md:text-slate-500 md:dark:text-slate-400',
          'md:underlined relative block whitespace-nowrap text-2xl transition md:text-lg',
        )}
      >
        {title}
      </a>
    </motion.li>
  );
};

export { NavigationItem };
