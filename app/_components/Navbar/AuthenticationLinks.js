'use client';

import CustomLink from '@/app/_components/Navbar/CustomLink';
import { logout } from '@/app/_lib/authentication/logout';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AuthenticationLinks = ({ user }) => {
  return (
    <>
      {user ? (
        <>
          <li>
            <CustomLink href='/dashboard'>Dashboard</CustomLink>
          </li>
          <li className='lg:block hidden'>
            <button
              className='hover:text-pink-700'
              onClick={async () => {
                await logout();
              }}
            >
              Logout{' '}
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className='w-4 inline-block'
              />
            </button>
          </li>
        </>
      ) : (
        <li className='block'>
          <CustomLink href='/login'>Login</CustomLink>
        </li>
      )}
    </>
  );
};
export default AuthenticationLinks;
