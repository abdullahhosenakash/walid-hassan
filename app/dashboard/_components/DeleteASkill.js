import { deleteSkill } from '@/app/_lib/deleteFunctions/deleteSkill';
import Modal from '@/app/dashboard/_components/Modal';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const TableRow = ({ skill, skillType, setDeleteSelectedSkill }) => {
  const { skillName, percentage } = skill || {};
  const selectedSkill = { skillType, skillName };
  return (
    <tr className='dark:odd:bg-slate-900 odd:bg-slate-300 dark:even:bg-slate-800 even:bg-slate-100'>
      <td className='py-3'>{skillName}</td>
      <td className='py-3'>{percentage}</td>
      <td className='py-3 flex gap-4 justify-center'>
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => setDeleteSelectedSkill(true)}
          className='inline-block w-5 text-2xl text-pink-700 hover:cursor-pointer'
        />
      </td>
    </tr>
  );
};

const DeleteASkill = ({ skills }) => {
  const [deleteSelectedSkill, setDeleteSelectedSkill] = useState(false);
  return (
    <section className='mx-auto mt-6'>
      <h3 className='text-xl text-center'>Delete a Skill</h3>
      {deleteSelectedSkill && (
        <Modal setDeleteSelectedSkill={setDeleteSelectedSkill} />
      )}
      <div className='flex flex-col gap-8'>
        {skills?.skillsDeveloped?.map((skillSet) => (
          <div key={skillSet.skillType}>
            <p className='text-lg py-1'>Skill Type: {skillSet.skillType}</p>

            <table className='w-full mx-auto text-center'>
              <thead>
                <tr className='dark:bg-slate-700 bg-slate-400'>
                  <th className='lg:px-16 py-3'>Name</th>
                  <th className='lg:px-8 py-3'>Percentage</th>
                  <th className='lg:px-8 py-3'>Action</th>
                </tr>
              </thead>
              <tbody>
                {skillSet.skills?.map((skill) => (
                  <TableRow
                    key={skill.skillName}
                    skill={skill}
                    skillType={skillSet.skillType}
                    setDeleteSelectedSkill={setDeleteSelectedSkill}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
};
export default DeleteASkill;
