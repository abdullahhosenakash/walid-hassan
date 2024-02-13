import Link from 'next/link';

const Experience = () => {
  return (
    <section className='dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3 lg:dark:h-screen'>
      <h2 className='text-center text-3xl'>My Experience</h2>
      <div className='flex flex-col gap-6 text-lg mt-6 lg:w-[65%] mx-auto text-justify'>
        <div>
          <p className='font-bold text-xl'>Problem Solving</p>
          <p className='mt-1'>
            I am an avid learner of Algorithms and Data Structures, Mathematics
            and Problem solving strategies. I have solved 1500+ problems on
            various platforms.{' '}
            <Link href='' className='text-blue-700 hover:underline'>
              View
            </Link>{' '}
            my problem solving stats. Also, see my{' '}
            <Link href='' className='text-blue-700 hover:underline'>
              Algorithm Learning
            </Link>{' '}
            in GitHub.
          </p>
        </div>
        <div>
          <p className='font-bold text-xl'>Project Works</p>
          <p className='mt-1'>
            I have worked on some interesting projects. I have experience of
            working on both individual and team projects. Check out my{' '}
            <Link href='' className='text-blue-700 hover:underline'>
              projects
            </Link>
          </p>
        </div>
        <div>
          <p className='font-bold text-xl'>Teaching</p>
          <p className='mt-1'>
            I have experience in teaching Computer Science students of
            Universities in Bangladesh and abroad. I have tutored the following
            topics both offline and online:{' '}
            <span className='px-2 inline-block text-base mr-2 rounded-full bg-blue-700 text-white'>
              C Programming
            </span>
            <span className='px-2 inline-block text-base mr-2 rounded-full bg-blue-700 text-white'>
              C++
            </span>
            <span className='px-2 inline-block text-base mr-2 rounded-full bg-blue-700 text-white'>
              Python
            </span>
            <span className='px-2 inline-block text-base mr-2 rounded-full bg-blue-700 text-white'>
              Java
            </span>
            <span className='px-2 inline-block text-base mr-2 rounded-full bg-blue-700 text-white'>
              Data Structures
            </span>
            <span className='px-2 inline-block text-base mr-2 rounded-full bg-blue-700 text-white'>
              Algorithms
            </span>
            <span className='px-2 inline-block text-base mr-2 rounded-full bg-blue-700 text-white'>
              Problem Solving
            </span>
            <span className='px-2 inline-block text-base mr-2 rounded-full bg-blue-700 text-white'>
              Discrete Math
            </span>
          </p>
        </div>
        <div>
          <p className='font-bold text-xl'>Job Experience</p>
          <p className='mt-1'>
            I am an avid learner of Algorithms and Data Structures, Mathematics
            and Problem solving strategies. I have solved 1500+ problems on
            various platforms.{' '}
            <Link href='' className='text-blue-700 hover:underline'>
              View
            </Link>{' '}
            my problem solving stats. Also, see my{' '}
            <Link href='' className='text-blue-700 hover:underline'>
              Algorithm Learning
            </Link>{' '}
            in GitHub.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
