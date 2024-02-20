'use client';

import AddNewSkill from '@/app/dashboard/_components/AddNewSkill';
import UpdateSkillsClient from '@/app/dashboard/_components/UpdateSkillsClient';
import { useState } from 'react';

const UpdateSkillsOrAddNewSkill = ({ skills }) => {
  const [isUpdateSkills, setIsUpdateSkills] = useState(true);
  return (
    <section className='mt-6'>
      <ul className='list-disc pl-4 text-lg'>
        <li>
          <div className='flex gap-1'>
            <button
              className='text-blue-700 dark:text-blue-400 hover:underline'
              onClick={() => setIsUpdateSkills(true)}
            >
              Update Skills
            </button>
            {isUpdateSkills && (
              <span className='text-pink-700'>(Selected)</span>
            )}
          </div>
        </li>
        <li>
          <div className='flex gap-1'>
            <button
              className='text-blue-700 dark:text-blue-400 hover:underline'
              onClick={() => setIsUpdateSkills(false)}
            >
              Add New Skill
            </button>
            {!isUpdateSkills && (
              <span className='text-pink-700'>(Selected)</span>
            )}
          </div>
        </li>
      </ul>

      {isUpdateSkills ? (
        <UpdateSkillsClient skills={skills} />
      ) : (
        <AddNewSkill skills={skills} />
      )}
    </section>
  );
};
export default UpdateSkillsOrAddNewSkill;
