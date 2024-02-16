const StaticSkills = ({ skills }) => {
  return (
    <section className='flex flex-col gap-6 mt-6'>
      {skills?.map((skill) => (
        <div key={skill.skillType}>
          <h4 className='text-2xl font-bold'>{skill.skillType}</h4>
          <p className='text-lg'>
            {skill.skills?.map((singleSkill, index) => {
              return (
                <span key={singleSkill.skillName} className='mr-1'>
                  {singleSkill.skillName}
                  {skill.skills?.length !== index + 1 && <span>,</span>}
                </span>
              );
            })}
          </p>
        </div>
      ))}
    </section>
  );
};

export default StaticSkills;
