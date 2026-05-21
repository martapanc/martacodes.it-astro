import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setThemeState(isDark ? 'dark' : 'light');

    const handler = (e: Event) => {
      setThemeState((e as CustomEvent<{ theme: Theme }>).detail.theme);
    };
    window.addEventListener('theme-change', handler);
    return () => window.removeEventListener('theme-change', handler);
  }, []);

  const setTheme = (newTheme: Theme) => {
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.classList.toggle('light', newTheme === 'light');
    localStorage.setItem('theme', newTheme);
    window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme: newTheme } }));
    setThemeState(newTheme);
  };

  return { theme, setTheme };
}
