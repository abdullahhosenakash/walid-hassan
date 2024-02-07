'use client';

import { useState } from 'react';
import ToggleSkillsShowcase from '../_components/Skills/ToggleSkillsShowcase';
import ProgressSkills from '../_components/Skills/ProgressSkills';
import StaticSkills from '../_components/Skills/StaticSkills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Skills = () => {
  const [toggleSkill, setToggleSkill] = useState(false);

  console.log(toggleSkill);

  return (
    <section
      className={`dark:bg-slate-900 py-8 dark:text-white lg:px-0 px-3 ${
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
        <p className='mt-12 text-slate-600 dark:text-slate-400'>
          <FontAwesomeIcon icon={faClock} /> Last Updated: February 6, 2024
        </p>
      </div>
    </section>
  );
};

export default Skills;
