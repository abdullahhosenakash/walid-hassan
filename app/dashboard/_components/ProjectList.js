'use client';

import DeleteProjectModal from '@/app/dashboard/_components/DeleteProjectModal';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';

const ProjectList = ({
  projects,
  selectedProject,
  setSelectedProject,
  selectedProjectType,
  setSelectedProjectType = ''
}) => {
  const [selectedProjectToDelete, setSelectedProjectToDelete] = useState({});
  const [deleteSelectedProject, setDeleteSelectedProject] = useState(false);

  return (
    <section className='flex flex-col gap-6'>
      {deleteSelectedProject && (
        <DeleteProjectModal
          setDeleteSelectedProject={setDeleteSelectedProject}
          selectedProjectToDelete={selectedProjectToDelete}
          setSelectedProjectToDelete={setSelectedProjectToDelete}
        />
      )}

      {projects?.map((projectSet) => (
        <div
          key={projectSet._id}
          className='border dark:border-slate-700 border-slate-300 p-1 rounded-lg'
        >
          <p className='text-lg font-bold flex justify-center items-center gap-4'>
            <span>{projectSet.projectType}</span>
            <p
              className={`flex gap-2 items-center ${
                (selectedProject?.projectId || selectedProjectType?._id) &&
                'cursor-not-allowed'
              }`}
            >
              <Link
                href='#form-update-type'
                className={`${
                  (selectedProject?.projectId || selectedProjectType?._id) &&
                  'pointer-events-none'
                }`}
              >
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  onClick={() => {
                    setSelectedProjectType &&
                      setSelectedProjectType({
                        _id: projectSet._id,
                        projectType: projectSet.projectType
                      });
                  }}
                  className='inline-block w-5 h-5 text-2xl text-pink-700'
                />
              </Link>
              <FontAwesomeIcon
                icon={faTrashCan}
                className={`inline-block w-5 text-xl text-pink-700 cursor-pointer ${
                  (selectedProject?.projectId || selectedProjectType?._id) &&
                  'pointer-events-none'
                }`}
                onClick={() => {
                  setSelectedProjectToDelete({
                    projectType: projectSet.projectType,
                    projectsLength: projectSet.projects?.length
                  });
                  setDeleteSelectedProject(true);
                }}
              />
            </p>
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
              <p
                className={`w-fit mx-auto py-3 flex gap-2 items-center ${
                  (selectedProject?.projectId || selectedProjectType?._id) &&
                  'cursor-not-allowed'
                }`}
              >
                <Link
                  href='#form-update'
                  className={`${
                    (selectedProject?.projectId || selectedProjectType?._id) &&
                    'pointer-events-none'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => {
                      setSelectedProject({
                        projectType: projectSet.projectType,
                        ...project
                      });
                    }}
                    className='inline-block w-5 text-2xl text-pink-700'
                  />
                </Link>

                <FontAwesomeIcon
                  icon={faTrashCan}
                  className={`inline-block w-5 text-xl text-pink-700 cursor-pointer ${
                    (selectedProject?.projectId || selectedProjectType?._id) &&
                    'pointer-events-none'
                  }`}
                  onClick={() => {
                    setSelectedProjectToDelete({
                      projectType: projectSet.projectType,
                      projectName: project.projectName,
                      projectId: project.projectId
                    });
                    setDeleteSelectedProject(true);
                  }}
                />
              </p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
export default ProjectList;
