import Link from 'next/link';

const Resume = () => {
  return (
    <section className='dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl dark:text-white'>My Resume</h2>
      <div className='lg:w-[60%] mx-auto'>
        <button className='text-white bg-blue-500 py-2 px-4 rounded-lg block w-fit mx-auto mt-6 hover:bg-blue-400'>
          Download as PDF
        </button>

        <p className='text-justify text-lg mt-4'>
          I am a Full Stack Web Developer with 3+ years of experience in
          learning and working with different web technologies. I am also a
          Competitive Programmer. I have a good understanding of Data Structures
          and Algorithms.
        </p>

        <h3 className='text-center text-2xl font-bold my-4 uppercase'>
          Skills
        </h3>

        <ul className='list-disc pl-4 text-lg'>
          <li>
            <span className='font-bold'>Languages:</span> JavaScript,
            TypeScript, Python, C++, Java, CSS, HTML
          </li>
          <li>
            <span className='font-bold'>Frameworks:</span> NodeJs, Express,
            React, Bootstrap, Django, Django Rest Framework
          </li>
          <li>
            <span className='font-bold'>Database:</span> MongoDB, Oracle,
            PostgreSQL
          </li>
          <li>
            <span className='font-bold'>Tools:</span> REST API, Git, Github,
            Linux
          </li>
          <li>
            <span className='font-bold'>Others:</span> Data Structures,
            Algorithms, Competitive Programming, Problem Solving
          </li>
        </ul>

        <h3 className='text-center text-2xl font-bold my-4 uppercase'>
          Projects
        </h3>
        <div>
          <h4 className='text-xl font-bold flex justify-between'>
            <span>
              Travel & Tourism Website -{' '}
              <Link
                href='link'
                className='dark:text-blue-400 text-blue-700 hover:underline'
              >
                Github Link
              </Link>
            </span>
            <span>2022</span>
          </h4>
          <p className='text-lg'>
            NodeJS, Express, React, MongoDB, Bootstrap, CSS, Stripe
          </p>
          <ul className='list-disc text-lg pl-8'>
            <li>
              A website for hosting personal experiences, booking experiences
              and providing detailed transport guidelines for travelling a
              particular place.
            </li>
            <li>
              Solves travel related inconvenience and provides an amazing
              experience for travelers.
            </li>
          </ul>
        </div>
        <div className='mt-4'>
          <h4 className='text-xl font-bold flex justify-between'>
            <span>
              Travel & Tourism Website -{' '}
              <Link
                href='link'
                className='dark:text-blue-400 text-blue-700 hover:underline'
              >
                Github Link
              </Link>
            </span>
            <span>2022</span>
          </h4>
          <p className='text-lg'>
            NodeJS, Express, React, MongoDB, Bootstrap, CSS, Stripe
          </p>
          <ul className='list-disc text-lg pl-8'>
            <li>
              A website for hosting personal experiences, booking experiences
              and providing detailed transport guidelines for travelling a
              particular place.
            </li>
            <li>
              Solves travel related inconvenience and provides an amazing
              experience for travelers.
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-center text-2xl font-bold my-4 uppercase'>
            Education
          </h3>
          <p className='text-lg font-bold'>
            Bangladesh University of Engineering and Technology (BUET)
          </p>
          <p className='text-lg'>
            Bachelor of Science in Computer Science and Engineering{' '}
          </p>
          <p className='text-lg'>2017 -2022</p>
          <p className='text-lg'>Dhaka, Bangladesh</p>
        </div>

        <div>
          <h3 className='text-center text-2xl font-bold my-4 uppercase'>
            Experience
          </h3>
          <p className='text-lg font-bold'>
            Problem Solving -{' '}
            <Link
              href='github'
              className='dark:text-blue-400 text-blue-700 hover:underline'
            >
              Github Link
            </Link>
          </p>
          <ul className='list-disc pl-4'>
            <li>Solved 1500+ problems in different Online Judges.</li>
          </ul>
          <p className='text-lg font-bold'>Competitive Programming</p>
          <ul className='list-disc pl-4'>
            <li>
              I was an active competitive programmer in different Online Judges
              especially in Codeforces.
            </li>
          </ul>
          <p className='text-lg font-bold'>
            Algorithm Learning -{' '}
            <Link
              href='github'
              className='dark:text-blue-400 text-blue-700 hover:underline'
            >
              Github Link
            </Link>
          </p>
          <ul className='list-disc pl-4'>
            <li>
              Learned and implemented large numbers of Algorithms & Data
              Structures.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
