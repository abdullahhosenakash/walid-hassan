import Link from 'next/link';
import CustomLink from '@/app/_components/Navbar/CustomLink';
import DayNightButton from '@/app/_components/Navbar/DayNightButton';
import DropDownNavItems from '@/app/_components/Navbar/DropDownNavItems';
import { getCookie } from 'cookies-next';
import { USER_INFO_COOKIE } from '@/app/_constants';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { logout } from '@/app/_lib/logout';
import { useRouter } from 'next/navigation';

const Navbar = ({ setThemeChanged }) => {
  const [userInfo, setUserInfo] = useState({});
  const router = useRouter();
  const userCookie = getCookie(USER_INFO_COOKIE);

  useEffect(() => {
    if (userCookie) {
      setUserInfo(JSON.parse(userCookie));
    } else {
      router.push('/');
    }
  }, [userCookie, router]);

  return (
    <nav className='lg:px-8 px-3 py-4 shadow-lg sticky top-0 bg-white dark:bg-slate-900 text-black dark:text-white'>
      <ul className='flex justify-between items-center'>
        <li>
          <Link href='/' className='uppercase text-xl hover:text-pink-700'>
            Walid Hassan
          </Link>
        </li>
        <li>
          <ul className='lg:flex gap-8 hidden'>
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
              {userInfo.userEmail ? (
                <div className='flex gap-4'>
                  <CustomLink href='/dashboard'>Dashboard</CustomLink>
                  <button
                    className='hover:text-pink-700'
                    onClick={async () => {
                      await logout();
                      setUserInfo({});
                    }}
                  >
                    Logout <FontAwesomeIcon icon={faRightFromBracket} />
                  </button>
                </div>
              ) : (
                <CustomLink href='/login'>Login</CustomLink>
              )}
            </li>
          </ul>
        </li>
        <li className='lg:block flex gap-4'>
          <DayNightButton setThemeChanged={setThemeChanged} />
          <DropDownNavItems />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
