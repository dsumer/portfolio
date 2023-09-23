'use client';

import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { styled } from 'styled-system/jsx';

export const ThemeButton = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <styled.button
      cursor="pointer"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={() => {
        setTheme(isDark ? 'light' : 'dark');
      }}
      color="inherit"
    >
      {isDark ? <FiMoon /> : <FiSun />}
    </styled.button>
  );
};
