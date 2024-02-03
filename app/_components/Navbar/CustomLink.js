'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CustomLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`hover:text-pink-700 capitalize ${
        pathname === href ? 'text-pink-700' : ''
      }`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
