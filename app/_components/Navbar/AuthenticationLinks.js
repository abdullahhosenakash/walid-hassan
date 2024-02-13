import CustomLink from '@/app/_components/Navbar/CustomLink';
import { logout } from '@/app/_lib/logout';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AuthenticationLinks = ({ user }) => {
  return (
    <>
      {user ? (
        <div className='flex flex-col lg:flex-row items-start lg:gap-4 gap-2'>
          <CustomLink href='/dashboard'>Dashboard</CustomLink>
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
        </div>
      ) : (
        <CustomLink href='/login'>Login</CustomLink>
      )}
    </>
  );
};
export default AuthenticationLinks;
