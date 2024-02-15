'use client';

import ProgressSkills from '@/app/_components/Skills/ProgressSkills';
import StaticSkills from '@/app/_components/Skills/StaticSkills';
import ToggleSkillsShowcase from '@/app/_components/Skills/ToggleSkillsShowcase';
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
    </div>
  );
};
export default SkillsClientComponent;
