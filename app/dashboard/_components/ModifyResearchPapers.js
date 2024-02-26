'use client';

import AddNewProject from '@/app/dashboard/_components/AddNewProject';
import AddNewResearchPaper from '@/app/dashboard/_components/AddNewResearchPaper';
import UpdateResearchPapersClient from '@/app/dashboard/_components/UpdateResearchPapersClient';
import { useState } from 'react';

const ModifyResearchPapers = ({ researchPapers }) => {
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
              Update or delete research papers
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
              Add new research paper
            </button>
            {modificationType === 'add' && (
              <span className='text-pink-700'>(Selected)</span>
            )}
          </div>
        </li>
      </ul>

      {modificationType === 'update' && (
        <UpdateResearchPapersClient researchPapers={researchPapers} />
      )}
      {modificationType === 'add' && (
        <AddNewResearchPaper researchPapers={researchPapers} />
      )}
    </section>
  );
};
export default ModifyResearchPapers;
