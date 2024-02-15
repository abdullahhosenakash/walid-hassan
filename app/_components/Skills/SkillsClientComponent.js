'use client';

import ProgressSkills from '@/app/_components/Skills/ProgressSkills';
import StaticSkills from '@/app/_components/Skills/StaticSkills';
import ToggleSkillsShowcase from '@/app/_components/Skills/ToggleSkillsShowcase';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const SkillsClientComponent = ({ skills }) => {
  const [toggleSkill, setToggleSkill] = useState(false);
  return (
    <div className='lg:w-[60%] mx-auto mt-12'>
      <ToggleSkillsShowcase
        toggleSkill={toggleSkill}
        setToggleSkill={setToggleSkill}
      />
      {toggleSkill ? (
        <ProgressSkills skills={skills} />
      ) : (
        <StaticSkills skills={skills} />
      )}
      <p className='mt-6 text-slate-600 dark:text-slate-400'>
        <FontAwesomeIcon icon={faClock} className='w-4 inline-block' /> Last
        Updated: {skills.updateTime}
      </p>
    </div>
  );
};
export default SkillsClientComponent;
