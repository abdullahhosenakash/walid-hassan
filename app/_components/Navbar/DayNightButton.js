'use client';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCookie, setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

const DayNightButton = ({ setThemeChanged }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window !== undefined) {
      if (getCookie('theme')) {
        setTheme(getCookie('theme'));
      }
    }
  }, []);

  return (
    <>
      {theme === 'dark' ? (
        <button
          onClick={() => {
            setTheme('light');
            setCookie('theme', 'light');
            setThemeChanged((prevState) => !prevState);
          }}
        >
          <FontAwesomeIcon
            icon={faSun}
            className='text-xl w-5 text-white hover:text-pink-700'
          />{' '}
        </button>
      ) : (
        <button
          onClick={() => {
            setTheme('dark');
            setCookie('theme', 'dark');
            setThemeChanged((prevState) => !prevState);
          }}
        >
          <FontAwesomeIcon
            icon={faMoon}
            className='text-xl w-5 hover:text-pink-700'
          />
        </button>
      )}
    </>
  );
};

export default DayNightButton;
