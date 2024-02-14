import { getMiscellaneousData } from '@/app/_lib/getMiscellaneousData';
import Link from 'next/link';

const Experience = async () => {
  const { experience } = await getMiscellaneousData();
  return (
    <section className='dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3 lg:dark:h-screen'>
      <h2 className='text-center text-3xl'>My Experience</h2>
      <div className='flex flex-col gap-6 text-lg mt-6 lg:w-[65%] mx-auto text-justify'>
        {experience?.map((e) => (
          <div key={e.experienceName}>
            <p className='font-bold text-xl hover:cursor-pointer hover:dark:text-blue-400 hover:text-blue-700'>
              <Link href={e.experienceLink}>{e.experienceName}</Link>
            </p>
            <p className='mt-1'>{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
