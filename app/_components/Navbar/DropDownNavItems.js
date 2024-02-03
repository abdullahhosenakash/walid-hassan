'use client';

import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import CustomLink from '@/app/_components/Navbar/CustomLink';

const DropDownNavItems = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='lg:hidden block'>
      {toggle ? (
        <button onClick={() => setToggle(false)}>
          <FontAwesomeIcon icon={faX} className='text-xl w-8' />
        </button>
      ) : (
        <button onClick={() => setToggle(true)}>
          <FontAwesomeIcon icon={faBars} className='text-xl w-8' />
        </button>
      )}
      {toggle && (
        <ul
          className='flex flex-col gap-2 absolute w-full left-0 pl-3 pt-3 bg-white dark:bg-slate-950 dark:text-white text-lg transition shadow-2xl'
          onClick={() => setToggle(false)}
        >
          <li>
            <CustomLink href='/'>Home</CustomLink>
          </li>
          <li>
            <CustomLink href='/about'>About</CustomLink>
          </li>
          <li>
            <CustomLink href='/skills'>Skills</CustomLink>
          </li>
          <li>
            <CustomLink href='/projects'>Projects</CustomLink>
          </li>
          <li>
            <CustomLink href='/experience'>Experience</CustomLink>
          </li>
          <li>
            <CustomLink href='/resume'>Resume</CustomLink>
          </li>
          <li>
            <CustomLink href='/contact'>Contact</CustomLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDownNavItems;
