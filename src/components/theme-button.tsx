'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { styled } from 'styled-system/jsx';

export const ThemeButton = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  if (!render) {
    return <FiSun />;
  }

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
