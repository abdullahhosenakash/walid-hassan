'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import ToggleSkillsShowcase from '@/app/_components/Skills/ToggleSkillsShowcase';
import ProgressSkills from '@/app/_components/Skills/ProgressSkills';
import StaticSkills from '@/app/_components/Skills/StaticSkills';

const Skills = () => {
  const [toggleSkill, setToggleSkill] = useState(false);

  return (
    <section
      className={`dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3 ${
        !toggleSkill ? 'dark:lg:h-screen' : ''
      }`}
    >
      <h2 className='text-center text-3xl dark:text-white'>My Skills</h2>
      <div className='lg:w-[60%] mx-auto mt-12'>
        <ToggleSkillsShowcase
          toggleSkill={toggleSkill}
          setToggleSkill={setToggleSkill}
        />
        {toggleSkill ? <ProgressSkills /> : <StaticSkills />}
        <p className='mt-6 text-slate-600 dark:text-slate-400'>
          <FontAwesomeIcon icon={faClock} className='w-4 inline-block' /> Last
          Updated: February 6, 2024
        </p>
      </div>
    </section>
  );
};

export default Skills;
