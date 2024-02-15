import { getSkills } from '@/app/_lib/getSkills';
import SkillsClientComponent from '@/app/_components/Skills/SkillsClientComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Skills = async () => {
  const skills = await getSkills();

  return (
    <section className='dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl dark:text-white'>My Skills</h2>
      <SkillsClientComponent skills={skills?.skillsDeveloped} />
      <p className='lg:w-[60%] mx-auto mt-6 text-slate-600 dark:text-slate-400'>
        <FontAwesomeIcon icon={faClock} className='w-4 inline-block' /> Last
        Updated: {skills.updateTime}
      </p>
    </section>
  );
};

export default Skills;
