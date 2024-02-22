import ModifySkills from '@/app/dashboard/_components/ModifySkills';

const UpdateSkills = async () => {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/miscellaneous-data',
    { next: { tags: ['skills'] } }
  );
  const skills = await response.json();

  if (!skills) {
    throw new Error('Failed to get skills data');
  }

  return (
    <section className='lg:w-1/2 mx-auto pb-12'>
      <h2 className='text-center lg:text-3xl text-xl mt-3'>Update Skills</h2>
      <ModifySkills skills={skills} />
    </section>
  );
};
export default UpdateSkills;
