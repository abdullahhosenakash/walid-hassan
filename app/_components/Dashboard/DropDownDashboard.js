'use client';

import SideBar from '@/app/_components/Dashboard/SideBar';
import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const DropDownDashboard = () => {
  const [dropDownToggled, setDropDownToggled] = useState(false);
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
        <h2 className='text-center text-3xl'>Dashboard</h2>
        <div />
      </div>
      <div
        className={`!transition-transform ${
          dropDownToggled ? '-translate-x-3' : '-translate-x-full'
        }`}
      >
        <SideBar />
      </div>
    </div>
  );
};
export default DropDownDashboard;
