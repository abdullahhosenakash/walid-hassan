import { getSkills } from '@/app/_lib/getSkills';
import SkillsClientComponent from '@/app/_components/Skills/SkillsClientComponent';

const Skills = async () => {
  const skills = await getSkills();

  return (
    <section className='dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl dark:text-white'>My Skills</h2>
      <SkillsClientComponent skills={skills?.skillsDeveloped} />
    </section>
  );
};

export default Skills;
