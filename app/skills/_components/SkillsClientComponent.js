'use client';

import ProgressSkills from '@/app/skills/_components/ProgressSkills';
import StaticSkills from '@/app/skills/_components/StaticSkills';
import ToggleSkillsShowcase from '@/app/skills/_components/ToggleSkillsShowcase';
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
