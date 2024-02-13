import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <section className='dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3 dark:lg:h-screen'>
      <h2 className='text-center text-3xl dark:text-whit text-red-600 mt-20'>
        Page Not Found
      </h2>
      <p className='text-center text-xl dark:text-whit text-red-800 mt-4'>
        The requested resource was not found!
      </p>
      <Link
        href='/'
        className='block text-center text-lg hover:underline text-blue-700'
      >
        Go back to Home
      </Link>
    </section>
  );
};

export default NotFound;
