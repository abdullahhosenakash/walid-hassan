import Link from 'next/link';

const About = () => {
  const aboutText = {
    firstPara:
      'I am an enthusiastic Programmer. I love to solve problems and learn new things. My interests are in Web Development, Algorithm Design and Analysis, and Competitive Programming. I am also interested in Machine Learning and Artificial Intelligence. I love programming and want to do something meaningful in this field.',
    secondPara:
      'I am active with Competitive Programming for more than 3 years, which prepared me as a good problem solver and efficient programmer. I have been learning different Web Development technologies for the last 3 years and gathered quite a lot of experience in this field.',
    thirdPara:
      'I am looking for a full-time or part-time job in Web Development. I am also open to internship opportunities. Thanks for reading!'
  };
  const { firstPara, secondPara, thirdPara } = aboutText || {};
  return (
    <section className='dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3 lg:dark:h-[100vh]'>
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
