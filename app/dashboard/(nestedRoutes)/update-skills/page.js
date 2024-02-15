'use client';

import { handleDeleteSkill, handleEditSkill } from '@/app/_lib/updateSkills';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UpdateSkills = () => {
  return (
    <section className='lg:w-[60%] mx-auto mt-4 overflow-x-auto'>
      <table className='mx-auto text-center'>
        <caption>Your skills here</caption>
        <thead>
          <tr className='dark:bg-slate-800 bg-slate-400'>
            <th className='px-16 py-2'>Type</th>
            <th className='px-16 py-2'>Name</th>
            <th className='px-16 py-2'>Percentage</th>
            <th className='px-16 py-2'>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className='dark:odd:bg-slate-900 odd:bg-slate-300 dark:even:bg-slate-800 even:bg-slate-100'>
            <td className='py-2'>Language</td>
            <td className='py-2'>JavaScript</td>
            <td className='py-2'>90%</td>
            <td className='py-2 flex gap-4 justify-center'>
              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={async () => await handleEditSkill('akash')}
                className='inline-block w-5 text-2xl text-blue-700 hover:cursor-pointer'
              />
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={async () => await handleDeleteSkill('jll')}
                className='inline-block w-5 text-2xl text-pink-700 hover:cursor-pointer'
              />
            </td>
          </tr>
          <tr className='dark:odd:bg-slate-900 odd:bg-slate-300 dark:even:bg-slate-800 even:bg-slate-100'>
            <td className='py-2'>Language</td>
            <td className='py-2'>JavaScript</td>
            <td className='py-2'>90%</td>
            <td className='py-2 flex gap-4 justify-center'>
              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={async () => await handleEditSkill('akash')}
                className='inline-block w-5 text-2xl text-blue-700 hover:cursor-pointer'
              />
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={async () => await handleDeleteSkill('jll')}
                className='inline-block w-5 text-2xl text-pink-700 hover:cursor-pointer'
              />
            </td>
          </tr>
          <tr className='dark:odd:bg-slate-900 odd:bg-slate-300 dark:even:bg-slate-800 even:bg-slate-100'>
            <td className='py-2'>Language</td>
            <td className='py-2'>JavaScript</td>
            <td className='py-2'>90%</td>
            <td className='py-2 flex gap-4 justify-center'>
              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={async () => await handleEditSkill('akash')}
                className='inline-block w-5 text-2xl text-blue-700 hover:cursor-pointer'
              />
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={async () => await handleDeleteSkill('jll')}
                className='inline-block w-5 text-2xl text-pink-700 hover:cursor-pointer'
              />
            </td>
          </tr>
          <tr className='dark:odd:bg-slate-900 odd:bg-slate-300 dark:even:bg-slate-800 even:bg-slate-100'>
            <td className='py-2'>Language</td>
            <td className='py-2'>JavaScript</td>
            <td className='py-2'>90%</td>
            <td className='py-2 flex gap-4 justify-center'>
              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={async () => await handleEditSkill('akash')}
                className='inline-block w-5 text-2xl text-blue-700 hover:cursor-pointer'
              />
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={async () => await handleDeleteSkill('jll')}
                className='inline-block w-5 text-2xl text-pink-700 hover:cursor-pointer'
              />
            </td>
          </tr>
          <tr className='dark:odd:bg-slate-900 odd:bg-slate-300 dark:even:bg-slate-800 even:bg-slate-100'>
            <td className='py-2'>Language</td>
            <td className='py-2'>JavaScript</td>
            <td className='py-2'>90%</td>
            <td className='py-2 flex gap-4 justify-center'>
              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={async () => await handleEditSkill('akash')}
                className='inline-block w-5 text-2xl text-blue-700 hover:cursor-pointer'
              />
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={async () => await handleDeleteSkill('jll')}
                className='inline-block w-5 text-2xl text-pink-700 hover:cursor-pointer'
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default UpdateSkills;
