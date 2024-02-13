'use client';

import { updateTheme } from '@/app/_lib/updateTheme';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DayNightButton = ({ theme }) => {
  return (
    <>
      {theme === 'dark' ? (
        <FontAwesomeIcon
          icon={faSun}
          className='text-xl w-5 text-white hover:text-pink-700 hover:cursor-pointer'
          onClick={async () => await updateTheme('light')}
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          className='text-xl w-5 hover:text-pink-700 hover:cursor-pointer'
          onClick={async () => await updateTheme('dark')}
        />
      )}
    </>
  );
};

export default DayNightButton;
