import clsx from 'clsx';
import { useTheme } from '@/hooks/useTheme';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function ModeToggleButton({
  className,
  ...rest
}: ThemeButtonProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  function toggleMode() {
    return setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className='p-2'>
      <button
        className={clsx(
          'flex items-center justify-center rounded-md border-2 ' +
            'border-grey-300 ring-grey-300 bg-transparent p-2 transition-all hover:ring-2 hover:ring-offset-2 ' +
            'dark:border-grey-700 dark:ring-grey-200 dark:bg-transparent dark:hover:ring-2 dark:hover:ring-offset-2',
          className,
        )}
        {...rest}
        onClick={toggleMode}
      >
        {mounted ? (
          <>{theme === 'light' ? <FiMoon /> : <FiSun />}</>
        ) : (
          <FiSun />
        )}
      </button>
    </div>
  );
}
