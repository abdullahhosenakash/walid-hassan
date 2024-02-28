import Image from 'next/image';
import Link from 'next/link';
import CategoryLink from '@/app/_components/CategoryLink/CategoryLink';

const Projects = async () => {
  const response = await fetch('https://walid-hassan.vercel.app/api/projects', {
    cache: 'no-store'
  });
  const projects = await response.json();

  if (!projects) {
    throw new Error('Failed to get projects data');
  }

  return (
    <section className='dark:bg-slate-900 lg:pt-4 lg:pb-16 pb-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl'>My Projects</h2>

      <div className='lg:w-[60%] mx-auto mt-6'>
        <ul className='list-disc pl-4'>
          {projects?.map((project) => (
            <li key={project._id}>
              <CategoryLink>{project.projectType}</CategoryLink>
            </li>
          ))}
        </ul>

        <div className='flex flex-col gap-6'>
          {projects?.map((project) => {
            const projectId = project.projectType
              ?.toLowerCase()
              ?.replace(/\s+/g, '-');
            return (
              <div className='mt-6' id={projectId} key={project._id}>
                <h3 className='text-2xl text-center'>{project.projectType}</h3>
                <div className='flex flex-col gap-3'>
                  {project?.projects?.map((p) => (
                    <div
                      className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center mt-1 border dark:border-slate-700 border-slate-300 rounded-lg p-2'
                      key={p.projectName}
                    >
                      <Image
                        src={p.imageLink}
                        alt='web project'
                        priority
                        className='shadow-xl h-auto rounded-lg'
                        width={500}
                        height={500}
                      />
                      <div className='text-lg flex flex-col gap-3'>
                        <p>
                          <span className='font-bold'>{p.projectName}</span>
                          {' - '}
                          <Link
                            href={p.link}
                            target='_blank'
                            className='dark:text-blue-400 text-blue-700 hover:underline'
                          >
                            Live Link
                          </Link>
                        </p>

                        <p>
                          <span className='font-bold'>Role:</span> {p.role}
                        </p>
                        <p>
                          <span className='font-bold'>Technology:</span>{' '}
                          {p.technology}
                        </p>
                        <p>
                          <span className='font-bold'>Description:</span>{' '}
                          {p.description}
                        </p>
                        <div>
                          <span className='font-bold'>Features:</span>
                          <ul className='list-disc pl-4'>
                            {p?.features?.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
