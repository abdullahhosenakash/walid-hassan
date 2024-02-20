import { getSkills } from '@/app/_lib/getFunctions/getSkills';
import UpdateSkillsOrAddNewSkill from '@/app/dashboard/_components/UpdateSkillsOrAddNewSkill';

const UpdateSkills = async () => {
  const skills = await getSkills();
  if (!skills) {
    throw new Error('Failed to get skills data');
  }

  return (
    <section className='lg:w-1/2 mx-auto pb-12'>
      <h2 className='text-center lg:text-3xl text-xl mt-3'>Update Skills</h2>
      <UpdateSkillsOrAddNewSkill skills={skills} />
    </section>
  );
};
export default UpdateSkills;
