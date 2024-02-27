const AboutLoading = () => {
  return (
    <section className='dark:bg-slate-900 lg:pt-4 pb-4 dark:text-white lg:px-0 px-3 dark:min-h-screen animate-pulse'>
      <h2 className='text-center text-3xl dark:text-white'>About Me</h2>
      <div className='flex flex-col gap-4 text-lg mt-6 lg:w-[65%] mx-auto text-justify'>
        {/* hi */}
        <div className='py-2 w-8 dark:bg-slate-600 bg-slate-300 rounded-full' />

        {/* fixed para */}
        <div className='py-2 w-full dark:bg-slate-600 bg-slate-300 rounded-full' />
        <div className='py-2 w-1/2 dark:bg-slate-600 bg-slate-300 rounded-full' />

        {/* first para */}
        <div className='py-2 w-full dark:bg-slate-600 bg-slate-300 rounded-full mt-4' />
        <div className='py-2 w-full dark:bg-slate-600 bg-slate-300 rounded-full' />
        <div className='py-2 w-full dark:bg-slate-600 bg-slate-300 rounded-full' />
        <div className='py-2 w-1/4 dark:bg-slate-600 bg-slate-300 rounded-full' />

        {/* second para */}
        <div className='py-2 w-full dark:bg-slate-600 bg-slate-300 rounded-full mt-4' />
        <div className='py-2 w-full dark:bg-slate-600 bg-slate-300 rounded-full' />
        <div className='py-2 w-full dark:bg-slate-600 bg-slate-300 rounded-full' />
        <div className='py-2 w-3/4 dark:bg-slate-600 bg-slate-300 rounded-full' />

        {/* third para */}
        <div className='py-2 w-full dark:bg-slate-600 bg-slate-300 rounded-full mt-4' />
        <div className='py-2 w-1/4 dark:bg-slate-600 bg-slate-300 rounded-full' />
      </div>
    </section>
  );
};
export default AboutLoading;
