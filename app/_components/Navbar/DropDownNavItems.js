'use client';

import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import CustomLink from '@/app/_components/Navbar/CustomLink';
import AuthenticationLinks from '@/app/_components/Navbar/AuthenticationLinks';

const DropDownNavItems = ({ user }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='lg:hidden block'>
      {toggle ? (
        <button onClick={() => setToggle(false)}>
          <FontAwesomeIcon icon={faX} size='lg' className='w-5' />
        </button>
      ) : (
        <button onClick={() => setToggle(true)}>
          <FontAwesomeIcon icon={faBars} size='lg' className='w-5' />
        </button>
      )}
      {toggle && (
        <ul
          className='flex flex-col gap-2 absolute w-full left-0 pl-3 py-3 bg-white dark:bg-slate-950 dark:text-white text-lg transition shadow-2xl'
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
            <CustomLink href='/research-papers'>Research Papers</CustomLink>
          </li>
          <li>
            <CustomLink href='/contact'>Contact</CustomLink>
          </li>
          <li>
            <AuthenticationLinks user={user} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDownNavItems;
