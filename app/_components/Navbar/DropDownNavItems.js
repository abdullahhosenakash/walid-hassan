'use client';

import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import NavLinks from '@/app/_components/Navbar/NavLinks';
import CustomLink from '@/app/_components/Navbar/CustomLink';

const DropDownNavItems = ({ user }) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [toggle]);
  return (
    <div className='lg:hidden block'>
      {toggle ? (
        <button onClick={() => setToggle(false)}>
          <FontAwesomeIcon icon={faX} size='lg' className='w-5' />
        </button>
      ) : (
        <button onClick={() => setToggle(true)}>
          <FontAwesomeIcon icon={faBarsStaggered} size='lg' className='w-5' />
        </button>
      )}

      <div
        className={`bg-white dark:bg-slate-950 dark:text-white text-lg shadow-2xl absolute w-full left-0 top-14 pl-3 py-3 transition-transform ${
          toggle ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul
          className='grid grid-cols-2 justify-center mx-auto gap-2'
          onClick={() => setToggle(false)}
        >
          <NavLinks user={user} />
        </ul>

        <div className='lg:hidden inline-block px-32 pt-4'>
          {!user && <CustomLink href='/login'>Login</CustomLink>}
        </div>
      </div>
    </div>
  );
};

export default DropDownNavItems;
