import Link from 'next/link';

const CategoryLink = ({ children }) => {
  const href = children?.toLowerCase()?.replace(/\s+/g, '-');
  return (
    <Link
      href={`#${href}`}
      className='dark:text-blue-400 text-blue-700 hover:underline text-lg'
    >
      {children}
    </Link>
  );
};
export default CategoryLink;
