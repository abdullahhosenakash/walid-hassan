'use client';

import SideBar from '@/app/dashboard/_components/SideBar';
import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const DropDownDashboard = () => {
  const [dropDownToggled, setDropDownToggled] = useState(false);

  useEffect(() => {
    if (dropDownToggled) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [dropDownToggled]);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <button
          className='w-4'
          onClick={() => setDropDownToggled(!dropDownToggled)}
        >
          {dropDownToggled ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBarsStaggered} />
          )}
        </button>
        <h2 className='text-center text-3xl'>
          <Link href='/dashboard'>Dashboard</Link>
        </h2>
        <div />
      </div>
      <div
        className={`!transition-transform ${
          dropDownToggled ? '-translate-x-3' : '-translate-x-full'
        }`}
      >
        <SideBar setDropDownToggled={setDropDownToggled} />
      </div>
    </div>
  );
};
export default DropDownDashboard;
