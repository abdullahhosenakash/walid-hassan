'use client';

import { updateTheme } from '@/app/_lib/updateFunctions/updateTheme';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DayNightButton = ({ theme }) => {
  return (
    <>
      {theme === 'dark' ? (
        <FontAwesomeIcon
          icon={faSun}
          className='text-white hover:text-pink-700 hover:cursor-pointer'
          size='lg'
          onClick={async () => await updateTheme('light')}
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          className='hover:text-pink-700 hover:cursor-pointer'
          size='lg'
          onClick={async () => await updateTheme('dark')}
        />
      )}
    </>
  );
};

export default DayNightButton;
