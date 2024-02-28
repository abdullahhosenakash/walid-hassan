import Link from 'next/link';

const Resume = async () => {
  const resumeResponse = await fetch(
    'https://walid-hassan.vercel.app/api/miscellaneous-data'
  );
  const { resume } = await resumeResponse.json();

  if (!resume) {
    throw new Error('Failed to get resume data');
  }

  const skillsResponse = await fetch(
    'https://walid-hassan.vercel.app/api/skills'
  );
  const skills = await skillsResponse.json();

  if (!skills) {
    throw new Error('Failed to get skills data for resume');
  }

  return (
    <section className='dark:bg-slate-900 lg:pt-4 pb-20 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl dark:text-white'>My Resume</h2>

      <div className='lg:w-[60%] mx-auto'>
        <Link
          href={resume?.resumeLink}
          target='_blank'
          className='text-white bg-blue-500 py-2 px-4 rounded-lg block w-fit mx-auto mt-6 hover:bg-blue-400'
        >
          Download as PDF
        </Link>
        <p className='text-justify text-lg mt-4'>{resume?.description}</p>

        <h3 className='text-center text-2xl font-bold my-4 uppercase'>
          Skills
        </h3>
        <ul className='list-disc pl-4 text-lg'>
          {skills?.skillsDeveloped?.map((skill) => (
            <li key={skill.skillType}>
              <span className='font-bold mr-1'>{skill.skillType}: </span>
              <p className='inline-flex flex-wrap'>
                {skill.skills?.map((s, index) => (
                  <span key={s.skillName}>
                    {s.skillName}
                    {skill.skills?.length !== index + 1 && (
                      <span className='mr-1 inline-block'>,</span>
                    )}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>

        <h3 className='text-center text-2xl font-bold my-4 uppercase'>
          Projects
        </h3>
        {resume?.projects?.map((project) => (
          <div key={project.projectId} className='mt-3'>
            <h4 className='text-xl font-bold flex justify-between'>
              <span>
                {project.projectName} -{' '}
                <Link
                  href={project.link}
                  target='_blank'
                  className='dark:text-blue-400 text-blue-700 hover:underline'
                >
                  Project Link
                </Link>
              </span>
            </h4>
            <p className='text-lg'>{project.technology}</p>
            <ul className='list-disc text-lg pl-8'>
              {project.description?.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
        <Link
          href='/projects'
          className='text-lg text-blue-700 dark:text-blue-400 hover:underline block w-fit mx-auto my-2'
        >
          See more projects
        </Link>

        <div>
          <h3 className='text-center text-2xl font-bold my-4 uppercase'>
            Education
          </h3>
          <p className='text-xl font-bold'>
            Hajee Mohammad Danesh Science and Technology University (HSTU)
          </p>
          <p className='text-lg'>
            Bachelor of Science in Electronics and Communication Engineering{' '}
          </p>
          <p className='text-lg'>2017 -2023</p>
          <p className='text-lg'>Dinajpur, Bangladesh</p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
