import Link from 'next/link';

const Experience = async () => {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/miscellaneous-data'
  );
  const { experience } = await response.json();

  if (!experience) {
    throw new Error('Failed to get experience data');
  }

  return (
    <section className='dark:bg-slate-900 lg:pt-4 pb-20 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl'>My Experience</h2>
      <div className='flex flex-col gap-6 text-lg mt-6 lg:w-[65%] mx-auto text-justify'>
        {experience?.map((e) => (
          <div key={e.experienceName}>
            <h3 className='font-bold text-xl hover:dark:text-blue-400 hover:text-blue-700 w-fit'>
              <Link href={e.experienceLink}>{e.experienceName}</Link>
            </h3>
            <p className='mt-1'>{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
