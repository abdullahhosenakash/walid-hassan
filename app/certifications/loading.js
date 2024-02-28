import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CertificationsLoading = () => {
  return (
    <section className='dark:bg-slate-900 lg:pt-4 pb-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl'>My Certifications</h2>
      <div className='lg:w-[60%] mx-auto mt-6 animate-pulse'>
        <ul className='list-disc pl-4'>
          <li className='bg-slate-300 dark:bg-slate-600 w-48 rounded-full' />
          <li className='bg-slate-300 dark:bg-slate-600 w-72 mt-4 rounded-full' />
        </ul>
        <div className='py-3 mx-auto bg-slate-300 dark:bg-slate-600 w-72 mt-6 rounded-full' />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center mt-2 border dark:border-slate-700 border-slate-300 rounded-lg p-2'>
          <FontAwesomeIcon
            icon={faImage}
            className='w-full lg:!h-52 !h-40 rounded-lg text-slate-700 bg-slate-600'
          />
          <div className='flex flex-col gap-4'>
            <div className='py-3 bg-slate-300 dark:bg-slate-600 rounded-full' />
            <div className='flex flex-col gap-2'>
              <div className='py-2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 w-3/4 bg-slate-300 dark:bg-slate-600 rounded-full' />
            </div>
          </div>
        </div>

        <div className='py-3 mx-auto bg-slate-300 dark:bg-slate-600 w-72 mt-12 rounded-full' />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center mt-2 border dark:border-slate-700 border-slate-300 rounded-lg p-2'>
          <FontAwesomeIcon
            icon={faImage}
            className='w-full lg:!h-52 !h-40 rounded-lg text-slate-700 bg-slate-600'
          />
          <div className='flex flex-col gap-4'>
            <div className='py-3 bg-slate-300 dark:bg-slate-600 rounded-full' />
            <div className='flex flex-col gap-2'>
              <div className='py-2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 bg-slate-300 dark:bg-slate-600 rounded-full' />
              <div className='py-2 w-3/4 bg-slate-300 dark:bg-slate-600 rounded-full' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CertificationsLoading;
