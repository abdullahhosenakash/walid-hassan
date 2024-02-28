import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillsLoading = () => {
  return (
    <section className='dark:bg-slate-900 lg:pt-4 pb-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl dark:text-white'>My Skills</h2>
      <div className='animate-pulse lg:w-[60%] mx-auto mt-12'>
        <label className='relative inline-flex items-center'>
          <input type='checkbox' className='sr-only peer' />
          <div className='w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5' />
          <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
            Show Progress
          </span>
        </label>

        <div className='mt-8 flex flex-col gap-8'>
          <div>
            <div className='py-3 lg:w-[20%] w-[40%] bg-slate-300 dark:bg-slate-600 rounded-full' />
            <div className='py-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full mt-4' />
            <div className='py-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full lg:hidden mt-2' />
            <div className='py-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full lg:hidden mt-2' />
          </div>
          <div>
            <div className='py-3 lg:w-[20%] w-1/2 bg-slate-300 dark:bg-slate-600 rounded-full' />
            <div className='py-2 w-3/4 bg-slate-300 dark:bg-slate-600 rounded-full mt-4' />
            <div className='py-2 w-3/4 bg-slate-300 dark:bg-slate-600 rounded-full mt-2 lg:hidden' />
            <div className='py-2 w-3/4 bg-slate-300 dark:bg-slate-600 rounded-full mt-2 lg:hidden' />
          </div>
          <div>
            <div className='py-3 lg:w-[20%] w-[40%] bg-slate-300 dark:bg-slate-600 rounded-full' />
            <div className='py-2 w-1/4 bg-slate-300 dark:bg-slate-600 rounded-full mt-4' />
            <div className='py-2 w-1/4 bg-slate-300 dark:bg-slate-600 rounded-full mt-2 lg:hidden' />
            <div className='py-2 w-1/4 bg-slate-300 dark:bg-slate-600 rounded-full mt-2 lg:hidden' />
          </div>
        </div>
        <p className='mt-6 flex gap-3 items-center text-slate-600 dark:text-slate-400'>
          <span>
            <FontAwesomeIcon icon={faClock} className='w-4 inline-block' /> Last
            Updated:
          </span>
          <span className='inline-block py-2 w-1/4 bg-slate-300 dark:bg-slate-600 rounded-full' />
        </p>
      </div>
    </section>
  );
};
export default SkillsLoading;
