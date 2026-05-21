'use client';

import { useEffect, useState } from 'react';

import { useTheme } from '@/hooks/useTheme';

export interface ThemeToggleProps {
  includeLabels?: boolean;
}

const ThemeToggle = ({ includeLabels }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <div className='flex items-center gap-2 px-2'>
      {includeLabels && (
        <span className='text-sm text-slate-700 dark:text-slate-300'>Light</span>
      )}
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className='relative inline-flex h-6 w-11 items-center rounded-full bg-slate-300 transition-colors dark:bg-blue-900'
        aria-label='Toggle Dark / Light Mode'
        role='switch'
        aria-checked={isDark}
        data-testid='dark-mode-toggle'
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
            isDark ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      {includeLabels && (
        <span className='text-sm text-slate-700 dark:text-slate-300'>Dark</span>
      )}
    </div>
  );
};

export default ThemeToggle;
