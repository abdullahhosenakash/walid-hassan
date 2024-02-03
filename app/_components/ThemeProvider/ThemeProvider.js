'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/app/_components/Navbar/Navbar';

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(
    window?.sessionStorage?.getItem('darkTheme') === 'true' ? true : false
  );

  useEffect(() => {
    if (window) {
      sessionStorage?.setItem('darkTheme', darkTheme);
    }
  }, [darkTheme]);
  return (
    <main className={darkTheme ? 'dark' : ''}>
      <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      {children}
    </main>
  );
};

export default ThemeProvider;
