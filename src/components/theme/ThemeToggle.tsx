'use client';

import { useTheme } from '@/providers/ThemeProvider';
import { FiSun, FiMoon } from 'react-icons/fi';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="p-2 rounded-lg transition-all duration-300 hover:bg-green-500/20 text-white hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/50"
    >
      {theme === 'light' ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
  );
}
