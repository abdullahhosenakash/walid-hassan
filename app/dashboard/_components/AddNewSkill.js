const AddNewSkill = ({ skills }) => {
  // const skillTypes = skills?.skillsDeveloped?.map(
  //   (skillSet) => skillSet.skillType
  // );
  const skillTypes = [
    'Languages',
    'Machine Learning',
    'Playing',
    'Studying',
    'Journey'
  ];
  return (
    <section className='mt-4'>
      <form className='border border-slate-700 p-1 rounded-lg'>
        <label htmlFor='skillType'>
          <span className='block text-lg'>Skill Type</span>
        </label>
        <div className='flex flex-wrap gap-2 border border-slate-700 p-1 rounded-lg'>
          {skillTypes?.map((skillType) => {
            const skillId = skillType.toLowerCase()?.replace(/\s+/g, '-');
            return (
              <label
                key={skillType}
                htmlFor={skillId}
                className='cursor-pointer flex items-center gap-1 w-fit'
              >
                <input
                  id={skillId}
                  type='radio'
                  name='hmm'
                  className='w-4 h-4'
                />
                {skillType}
              </label>
            );
          })}
          <label
            htmlFor='add-new'
            className='ms-2 font-medium cursor-pointer text-gray-900 dark:text-gray-300 flex items-center gap-1 text-lg w-fit'
          >
            <input
              id='add-new'
              type='radio'
              name='hmm'
              className='w-4 h-4'
              // onChange={e=>}
              defaultChecked
            />
            Add New
          </label>
        </div>
      </form>
    </section>
  );
};
export default AddNewSkill;
