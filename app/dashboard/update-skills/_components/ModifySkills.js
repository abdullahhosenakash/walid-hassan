'use client';

import AddNewSkill from '@/app/dashboard/update-skills/_components/AddNewSkill';
import DeleteASkill from '@/app/dashboard/update-skills/_components/DeleteASkill';
import UpdateSkillsClient from '@/app/dashboard/update-skills/_components/UpdateSkillsClient';
import { useState } from 'react';

const ModifySkills = ({ skills }) => {
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
              Update skills
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
              Add new skill
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
              Delete a skill
            </button>
            {modificationType === 'delete' && (
              <span className='text-pink-700'>(Selected)</span>
            )}
          </div>
        </li>
      </ul>

      {modificationType === 'update' && <UpdateSkillsClient skills={skills} />}
      {modificationType === 'add' && <AddNewSkill skills={skills} />}
      {modificationType === 'delete' && <DeleteASkill skills={skills} />}
    </section>
  );
};
export default ModifySkills;
