import DeleteSkillModal from '@/app/dashboard/update-skills/_components/DeleteSkillModal';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const DeleteASkill = ({ skills }) => {
  const [deleteSelectedSkill, setDeleteSelectedSkill] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState({});

  useEffect(() => {
    if (deleteSelectedSkill) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [deleteSelectedSkill]);

  return (
    <section className='mx-auto mt-6'>
      <h3 className='text-xl text-center'>Delete a Skill</h3>
      {deleteSelectedSkill && (
        <DeleteSkillModal
          setDeleteSelectedSkill={setDeleteSelectedSkill}
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
        />
      )}

      <div className='flex flex-col gap-8'>
        {skills?.skillsDeveloped?.map((skillSet) => (
          <div
            key={skillSet.skillType}
            className='border dark:border-slate-500 border-slate-300 rounded-lg'
          >
            <p className='text-lg py-1 pl-2 flex items-center justify-center gap-2'>
              Skill Type: {skillSet.skillType}
              <span
                className={
                  selectedSkill?.skillType || deleteSelectedSkill
                    ? 'cursor-not-allowed'
                    : ''
                }
              >
                <FontAwesomeIcon
                  icon={faTrashCan}
                  onClick={() => {
                    if (deleteSelectedSkill) return;
                    setSelectedSkill({
                      skillType: skillSet.skillType,
                      skillsLength: skillSet.skills?.length
                    });
                    setDeleteSelectedSkill(true);
                  }}
                  className={`inline-block w-5 text-2xl text-pink-700 hover:cursor-pointer ${
                    selectedSkill?.skillType || deleteSelectedSkill
                      ? 'pointer-events-none'
                      : ''
                  }`}
                />
              </span>
            </p>

            <div className='grid grid-cols-4 text-center dark:bg-slate-600 bg-slate-400'>
              <span className='py-3 grid gird-cols-subgrid cols-start-1 col-span-2'>
                Name
              </span>
              <span className='py-3'>Percentage</span>
              <span className='py-3'>Action</span>
            </div>

            {skillSet.skills?.map((skill) => (
              <div
                className='grid grid-cols-4 text-center dark:odd:bg-slate-900 odd:bg-slate-300 dark:even:bg-slate-800 even:bg-slate-100 last:rounded-b-lg'
                key={skill.skillName}
              >
                <p className='py-3 grid gird-cols-subgrid cols-start-1 col-span-2'>
                  {skill.skillName}
                </p>
                <p className='py-3'>{skill.percentage}</p>
                <p
                  className={`py-3 flex gap-4 justify-center ${
                    selectedSkill?.skillType || deleteSelectedSkill
                      ? 'cursor-not-allowed'
                      : ''
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    onClick={() => {
                      if (deleteSelectedSkill) return;
                      setSelectedSkill({
                        skillType: skillSet.skillType,
                        skillName: skill.skillName,
                        percentage: skill.percentage
                      });
                      setDeleteSelectedSkill(true);
                    }}
                    className={`inline-block w-5 text-2xl text-pink-700 hover:cursor-pointer ${
                      selectedSkill?.skillType || deleteSelectedSkill
                        ? 'pointer-events-none'
                        : ''
                    }`}
                  />
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
export default DeleteASkill;
