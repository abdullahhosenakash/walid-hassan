'use client';

import AddNewProject from '@/app/dashboard/_components/AddNewProject';
import DeleteAProject from '@/app/dashboard/_components/DeleteAProject';
import UpdateProjectsClient from '@/app/dashboard/_components/UpdateProjectsClient';
import { useState } from 'react';

const ModifyProjects = ({ projects }) => {
  const [modificationType, setModificationType] = useState('update');
  return (
    <section className='mt-6'>
      <ul className='list-disc pl-4 text-lg'>
        <li>
          <div className='flex gap-1'>
            <button
              className='text-blue-700 dark:text-blue-400 hover:underline'
              onClick={() => setModificationType('update')}
            >
              Update projects
            </button>
            {modificationType === 'update' && (
              <span className='text-pink-700'>(Selected)</span>
            )}
          </div>
        </li>
        <li>
          <div className='flex gap-1'>
            <button
              className='text-blue-700 dark:text-blue-400 hover:underline'
              onClick={() => setModificationType('add')}
            >
              Add new project
            </button>
            {modificationType === 'add' && (
              <span className='text-pink-700'>(Selected)</span>
            )}
          </div>
        </li>
        <li>
          <div className='flex gap-1'>
            <button
              className='text-blue-700 dark:text-blue-400 hover:underline'
              onClick={() => setModificationType('delete')}
            >
              Delete a project
            </button>
            {modificationType === 'delete' && (
              <span className='text-pink-700'>(Selected)</span>
            )}
          </div>
        </li>
      </ul>

      {modificationType === 'update' && (
        <UpdateProjectsClient projects={projects} />
      )}
      {modificationType === 'add' && <AddNewProject projects={projects} />}
      {modificationType === 'delete' && <DeleteAProject projects={projects} />}
    </section>
  );
};
export default ModifyProjects;
