import { getMiscellaneousData } from '@/app/_lib/getFunctions/getMiscellaneousData';
import { getSkills } from '@/app/_lib/getFunctions/getSkills';
import Link from 'next/link';

const Resume = async () => {
  const { resume } = await getMiscellaneousData();
  const skills = await getSkills();

  return (
    <section className='dark:bg-slate-900 lg:pt-4 pb-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
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
              <span className='font-bold'>{skill.skillType}: </span>
              {skill.skills?.map((s, index) => (
                <span key={s.skillName}>
                  {s.skillName}
                  {skill.skills?.length !== index + 1 && (
                    <span className='mr-1'>,</span>
                  )}
                </span>
              ))}
            </li>
          ))}
        </ul>

        <h3 className='text-center text-2xl font-bold my-4 uppercase'>
          Projects
        </h3>
        {resume?.projects?.map((project) => (
          <div key={project.projectName} className='mt-3'>
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
              {project.shortDescription?.map((description) => (
                <li key={description}>{description}</li>
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
