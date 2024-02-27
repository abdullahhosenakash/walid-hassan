const ResumeLoading = () => {
  return (
    <section className='dark:bg-slate-900 lg:pt-4 pb-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl dark:text-white'>My Resume</h2>
      <div className='animate-pulse mt-6'>
        <div className='lg:w-[60%] mx-auto'>
          {/* download button */}
          <div className='py-5 lg:w-[20%] w-[47%] mx-auto bg-slate-300 dark:bg-slate-600 rounded-lg' />

          {/* description */}
          <div className='mt-5 flex flex-col lg:gap-4 gap-2'>
            <div className='py-2 bg-slate-300 dark:bg-slate-600 rounded-full' />
            <div className='py-2 bg-slate-300 dark:bg-slate-600 rounded-full' />
            <div className='py-2 lg:w-1/4 bg-slate-300 dark:bg-slate-600 rounded-full' />
            <div className='py-2 bg-slate-300 dark:bg-slate-600 rounded-full lg:hidden' />
            <div className='py-2 bg-slate-300 dark:bg-slate-600 rounded-full lg:hidden' />
            <div className='py-2 bg-slate-300 dark:bg-slate-600 rounded-full lg:hidden' />
            <div className='py-2 w-3/4 bg-slate-300 dark:bg-slate-600 rounded-full lg:hidden' />
          </div>

          <h3 className='text-center text-2xl font-bold my-4 uppercase'>
            Skills
          </h3>
          <ul className='lg:flex flex-col gap-4 hidden'>
            <li className='flex gap-2'>
              <span className='w-40 rounded-full py-3 bg-slate-300 dark:bg-slate-600' />
              :
              <span className='rounded-full w-28 py-3 bg-slate-300 dark:bg-slate-600' />
              ,
              <span className='rounded-full w-28 py-3 bg-slate-300 dark:bg-slate-600' />
              ,
              <span className='rounded-full w-28 py-3 bg-slate-300 dark:bg-slate-600' />
              ,
              <span className='rounded-full w-28 py-3 bg-slate-300 dark:bg-slate-600' />
            </li>
            <li className='flex gap-2'>
              <span className='w-40 rounded-full py-3 bg-slate-300 dark:bg-slate-600' />
              :
              <span className='rounded-full w-28 py-3 bg-slate-300 dark:bg-slate-600' />
              ,
              <span className='rounded-full w-28 py-3 bg-slate-300 dark:bg-slate-600' />
              ,
              <span className='rounded-full w-28 py-3 bg-slate-300 dark:bg-slate-600' />
              ,
              <span className='rounded-full w-28 py-3 bg-slate-300 dark:bg-slate-600' />
            </li>
            <li className='flex gap-2'>
              <span className='w-40 rounded-full py-3 bg-slate-300 dark:bg-slate-600' />
              :
              <span className='rounded-full w-28 py-3 bg-slate-300 dark:bg-slate-600' />
              ,
              <span className='rounded-full w-28 py-3 bg-slate-300 dark:bg-slate-600' />
              ,
              <span className='rounded-full w-28 py-3 bg-slate-300 dark:bg-slate-600' />
              ,
              <span className='rounded-full w-28 py-3 bg-slate-300 dark:bg-slate-600' />
            </li>
          </ul>

          <div className='block lg:hidden'>
            <div className='py-2 w-1/4 bg-slate-300 dark:bg-slate-600 rounded-full' />
            <div className='grid grid-cols-2 gap-3 mt-4'>
              <div className='py-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full' />
            </div>
          </div>

          <div className='block lg:hidden mt-8'>
            <div className='py-2 w-1/4 bg-slate-300 dark:bg-slate-600 rounded-full' />
            <div className='grid grid-cols-2 gap-3 mt-4'>
              <div className='py-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full' />
            </div>
          </div>

          <h3 className='text-center text-2xl font-bold my-4 uppercase'>
            Projects
          </h3>
          <div className='mt-4 flex flex-col gap-6'>
            <div>
              <div className='flex items-center gap-2'>
                <span className='inline-block w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full py-3' />
                {' - '}
                <span className='inline-block w-[15%] bg-slate-300 dark:bg-slate-600 rounded-full py-3' />
              </div>
              <span className='inline-block w-[30%] bg-slate-300 dark:bg-slate-600 rounded-full py-2 mt-4' />

              <span className='block w-[30%] bg-slate-300 dark:bg-slate-600 rounded-full py-2 mt-4 ml-5' />
              <span className='block w-[30%] bg-slate-300 dark:bg-slate-600 rounded-full py-2 mt-4 ml-5' />
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <span className='inline-block w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full py-3' />
                {' - '}
                <span className='inline-block w-[15%] bg-slate-300 dark:bg-slate-600 rounded-full py-3' />
              </div>
              <span className='inline-block w-[30%] bg-slate-300 dark:bg-slate-600 rounded-full py-2 mt-4' />

              <span className='block w-[30%] bg-slate-300 dark:bg-slate-600 rounded-full py-2 mt-4 ml-5' />
              <span className='block w-[30%] bg-slate-300 dark:bg-slate-600 rounded-full py-2 mt-4 ml-5' />
            </div>
          </div>
          <div className='py-2 w-1/4 mx-auto bg-slate-300 dark:bg-slate-600 rounded-full mt-6' />
        </div>
      </div>
    </section>
  );
};
export default ResumeLoading;
