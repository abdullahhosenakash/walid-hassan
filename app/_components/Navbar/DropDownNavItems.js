'use client';

import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import NavLinks from '@/app/_components/Navbar/NavLinks';
import CustomLink from '@/app/_components/Navbar/CustomLink';

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
        <>
          <div className='bg-white dark:bg-slate-950 dark:text-white text-lg transition shadow-2xl absolute w-full left-0 pl-3 py-3'>
            <ul
              className='grid grid-cols-2 justify-center mx-auto gap-2'
              onClick={() => setToggle(false)}
            >
              <NavLinks user={user} />
            </ul>

            <div className='lg:hidden inline-block px-32 pt-4'>
              <CustomLink href='/login'>Login</CustomLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DropDownNavItems;
