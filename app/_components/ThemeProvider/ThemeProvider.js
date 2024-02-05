'use client';

import Navbar from '@/app/_components/Navbar/Navbar';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [themeChanged, setThemeChanged] = useState(false);
  useEffect(() => {
    if (window) {
      const prevTheme = getCookie('theme');
      prevTheme
        ? setTheme(prevTheme)
        : setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
    }
  }, [themeChanged]);
  return (
    <main className={theme}>
      <Navbar setThemeChanged={setThemeChanged} />
      {children}
    </main>
  );
};

export default ThemeProvider;
