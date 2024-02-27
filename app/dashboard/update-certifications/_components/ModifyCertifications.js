'use client';

import AddNewCertification from '@/app/dashboard/update-certifications/_components/AddNewCertification';
import UpdateCertificationsClient from '@/app/dashboard/update-certifications/_components/UpdateCertificationsClient';
import { useState } from 'react';

const ModifyCertifications = ({ certifications }) => {
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
              Update certifications
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
              Add new certification
            </button>
            {modificationType === 'add' && (
              <span className='text-pink-700'>(Selected)</span>
            )}
          </div>
        </li>
      </ul>

      {modificationType === 'update' && (
        <UpdateCertificationsClient certifications={certifications} />
      )}
      {modificationType === 'add' && (
        <AddNewCertification certifications={certifications} />
      )}
    </section>
  );
};
export default ModifyCertifications;
