import Link from 'next/link';

const About = async () => {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/miscellaneous-data',
    { next: { tags: ['about'] } }
  );
  const { aboutMe } = await response.json();

  if (!aboutMe) {
    throw new Error('Failed to get about me data');
  }

  const { firstPara, secondPara, thirdPara } = aboutMe || {};
  return (
    <section className='dark:bg-slate-900 lg:pt-4 pb-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl dark:text-white'>About Me</h2>
      <div className='flex flex-col gap-4 text-lg mt-6 lg:w-[65%] mx-auto text-justify'>
        <p>Hi,</p>
        <p>
          My name is Walid Hassan. I studied Electronics and Communication
          Engineering at{' '}
          <Link
            href='https://www.hstu.ac.bd'
            target='_blank'
            className='dark:text-blue-400 text-blue-700 hover:underline'
          >
            Hajee Mohammad Danesh Science and Technology University (HSTU)
          </Link>
          .
        </p>

        <p>{firstPara}</p>
        <p>{secondPara}</p>
        <p>{thirdPara}</p>
      </div>
    </section>
  );
};

export default About;
