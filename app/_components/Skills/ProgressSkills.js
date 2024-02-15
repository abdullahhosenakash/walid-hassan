const ProgressSkills = ({ skills }) => {
  return (
    <section className='mt-6'>
      {skills?.map((skill) => (
        <div key={skill.skillType}>
          <h4 className='text-2xl font-bold'>{skill.skillType}</h4>
          <div className='flex flex-col gap-2'>
            {skill?.skills?.map((singleSkill) => (
              <div
                className='lg:grid lg:grid-cols-2 items-center gap-2'
                key={singleSkill.skillName}
              >
                <p className='text-lg text-end'>{singleSkill.skillName}</p>
                <div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
                  <div
                    className={`bg-blue-600 text-xs font-medium text-blue-100 text-end py-0.5 pr-1 leading-none rounded-full ${
                      singleSkill.percentage === '30%'
                        ? 'w-[30%]'
                        : singleSkill.percentage === '35%'
                        ? 'w-[35%]'
                        : singleSkill.percentage === '40%'
                        ? 'w-[40%]'
                        : singleSkill.percentage === '45%'
                        ? 'w-[45%]'
                        : singleSkill.percentage === '50%'
                        ? 'w-[50%]'
                        : singleSkill.percentage === '55%'
                        ? 'w-[55%]'
                        : singleSkill.percentage === '60%'
                        ? 'w-[60%]'
                        : singleSkill.percentage === '65%'
                        ? 'w-[65%]'
                        : singleSkill.percentage === '70%'
                        ? 'w-[70%]'
                        : singleSkill.percentage === '75%'
                        ? 'w-[75%]'
                        : singleSkill.percentage === '80%'
                        ? 'w-[80%]'
                        : singleSkill.percentage === '85%'
                        ? 'w-[85%]'
                        : singleSkill.percentage === '90%'
                        ? 'w-[90%]'
                        : singleSkill.percentage === '95%'
                        ? 'w-[95%]'
                        : singleSkill.percentage === '100%'
                        ? 'w-[100%]'
                        : ''
                    }`}
                  >
                    {singleSkill.percentage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProgressSkills;
