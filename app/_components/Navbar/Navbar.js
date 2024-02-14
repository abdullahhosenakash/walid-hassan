import Link from 'next/link';
import DayNightButton from '@/app/_components/Navbar/DayNightButton';
import DropDownNavItems from '@/app/_components/Navbar/DropDownNavItems';
import NavLinks from '@/app/_components/Navbar/NavLinks';

const Navbar = ({ user, theme }) => {
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
            <NavLinks user={user} />
          </ul>
        </li>
        <li className='lg:block flex items-center gap-4'>
          <DayNightButton theme={theme} />
          <DropDownNavItems user={user} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
