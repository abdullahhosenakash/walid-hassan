'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CustomLink = ({ href, children }) => {
  const pathname = usePathname();
  const currentPath = `/${pathname.split('/')[1]}`;

  return (
    <Link
      href={href}
      className={`hover:text-pink-700 capitalize ${
        currentPath === href ? 'text-pink-700' : ''
      }`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
