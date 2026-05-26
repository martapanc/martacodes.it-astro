'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/styles/classic.css";
import clsx from "clsx";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme === 'dark';

  return (
    <div className={clsx('flex items-center gap-2 px-2', mounted ? '' : 'invisible')}>
      <Classic className="cursor-pointer" onClick={() => setTheme(isDark ? 'light' : 'dark')} />
    </div>
  );
};

export default ThemeToggle;
