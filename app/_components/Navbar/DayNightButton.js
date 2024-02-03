'use client';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DayNightButton = ({ darkTheme, setDarkTheme }) => {
  return (
    <button onClick={() => setDarkTheme((prevState) => !prevState)}>
      {darkTheme ? (
        <FontAwesomeIcon
          icon={faSun}
          className='text-xl w-5 text-white hover:text-pink-700'
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          className='text-xl w-5 hover:text-pink-700'
        />
      )}
    </button>
  );
};

export default DayNightButton;
