import UpdateExperienceClient from '@/app/dashboard/update-experience/_components/UpdateExperienceClient';

const UpdateExperience = async () => {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/miscellaneous-data'
  );
  const { experience } = await response.json();

  if (!experience) {
    throw new Error('Failed to get experience data');
  }

  return (
    <section className='lg:w-1/2 mx-auto pb-20'>
      <h2 className='text-center lg:text-3xl text-xl mt-3'>
        Update Experience
      </h2>
      <UpdateExperienceClient experience={experience} />
    </section>
  );
};
export default UpdateExperience;
