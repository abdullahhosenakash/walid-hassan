import { PROTEST_GUERRILLA } from '@/app/_constants/constants';

const CardSkeleton = () => {
  return (
    <div className='rounded-xl hover:shadow-lg dark:shadow-blue-700 shadow-md transition delay-50 pb-3'>
      <div className='py-12 dark:bg-slate-700 bg-slate-300 rounded-t-xl' />
      <div className='flex justify-center mt-[-40px]'>
        <div className='p-12 rounded-full bg-slate-400 dark:bg-slate-600 ' />
      </div>
      <div className='bg-slate-400 dark:bg-slate-600 py-4 w-1/2 mx-auto rounded-full mt-4' />
      <div className='bg-slate-400 dark:bg-slate-600 py-2 w-3/4 mx-auto rounded-full mt-4' />
      <hr className='mt-4' />
      <div className='bg-slate-400 dark:bg-slate-600 py-5 w-36 mx-auto rounded-lg mt-2' />
    </div>
  );
};

const RootLoading = () => {
  return (
    <section className='bg-white dark:bg-slate-900 text-black dark:text-white pb-20 dark:min-h-screen pt-8 animate-pulse'>
      <div className='mt-[-10px]'>
        {/* Image */}
        <div className='lg:w-48 w-44 mx-auto lg:p-24 p-[5.5rem] rounded-full dark:bg-slate-600 bg-slate-300' />

        {/* heading */}
        <h2 className='text-4xl text-center uppercase mt-4 font-bold'>
          Walid{' '}
          <span className={`${PROTEST_GUERRILLA.className} !font-thin`}>
            Hassan
          </span>
        </h2>

        {/* sub-heading */}
        <h4 className='py-2 w-72 mx-auto rounded-full dark:bg-slate-600 bg-slate-300 mt-2' />

        {/* designations */}
        <div className='my-4 flex lg:flex-row flex-col justify-center items-center gap-2'>
          <div className='py-4 w-60 rounded-full dark:bg-slate-600 bg-slate-300' />
          <span className='text-lg lg:inline-block hidden'>|</span>
          <div className='py-4 w-60 rounded-full dark:bg-slate-600 bg-slate-300' />
          <span className='text-lg lg:inline-block hidden'>|</span>
          <div className='py-4 w-60 rounded-full dark:bg-slate-600 bg-slate-300' />
        </div>

        {/* highlighted skills */}
        <div className='text-lg flex justify-center items-center gap-2'>
          I work with{' '}
          <span className='py-2 inline-block w-24 rounded-full dark:bg-slate-600 bg-slate-300' />
        </div>

        {/* social links */}
        <div className='flex gap-4 justify-center items-center mt-12'>
          <div className='p-[1.3rem] rounded-lg dark:bg-slate-600 bg-slate-300' />
          <div className='p-[1.3rem] rounded-lg dark:bg-slate-600 bg-slate-300' />
          <div className='p-[1.3rem] rounded-lg dark:bg-slate-600 bg-slate-300' />
          <div className='p-[1.3rem] rounded-lg dark:bg-slate-600 bg-slate-300' />
        </div>
      </div>

      {/* homepage cards */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center lg:w-3/4 mx-auto mt-12 px-3'>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </section>
  );
};
export default RootLoading;
