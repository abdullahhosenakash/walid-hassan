import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const ProjectList = ({
  projects,
  setSelectedProject,
  setSelectedProjectType = ''
}) => {
  return (
    <section className='flex flex-col gap-6'>
      {projects?.map((projectSet) => (
        <div
          key={projectSet._id}
          className='border dark:border-slate-700 border-slate-300 p-1 rounded-lg'
        >
          <p className='text-lg font-bold flex justify-center items-center gap-2'>
            <span>{projectSet.projectType}</span>
            <Link href='#form-update-type'>
              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={() => {
                  setSelectedProjectType &&
                    setSelectedProjectType({
                      _id: projectSet._id,
                      projectType: projectSet.projectType
                    });
                }}
                className='inline-block w-5 text-2xl text-pink-700 hover:cursor-pointer'
              />
            </Link>
          </p>
          <div className='grid grid-cols-3 text-center dark:bg-slate-600 bg-slate-400 rounded-t-lg'>
            <span className='py-3 grid gird-cols-subgrid cols-start-1 col-span-2'>
              Project Names
            </span>
            <span className='py-3'>Action</span>
          </div>

          {projectSet.projects?.map((project) => (
            <div
              className='grid grid-cols-3 text-center dark:odd:bg-slate-900 odd:bg-slate-300 dark:even:bg-slate-800 even:bg-slate-100 last:rounded-b-lg'
              key={project.projectId}
            >
              <p className='py-3 grid gird-cols-subgrid cols-start-1 col-span-2'>
                {project.projectName}
              </p>
              <p className='py-3 flex gap-4 justify-center'>
                <Link href='#form-update'>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => {
                      setSelectedProject({
                        projectType: projectSet.projectType,
                        ...project
                      });
                    }}
                    className='inline-block w-5 text-2xl text-pink-700 hover:cursor-pointer'
                  />
                </Link>
              </p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
export default ProjectList;
