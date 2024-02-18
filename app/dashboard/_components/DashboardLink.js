'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardLink = ({ href, children, setDropDownToggled }) => {
  const pathname = usePathname();

  return (
    <span onClick={() => setDropDownToggled && setDropDownToggled(false)}>
      <Link
        href={href}
        className={`hover:dark:bg-slate-600 hover:bg-slate-500 capitalize block text-center px-4 py-2 rounded-lg ${
          pathname === href ? 'bg-slate-500' : 'dark:bg-slate-700 bg-slate-400'
        }`}
      >
        {children}
      </Link>
    </span>
  );
};

export default DashboardLink;