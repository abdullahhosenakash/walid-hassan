import UpdateResumeClient from '@/app/dashboard/update-resume/_components/UpdateResumeClient';

const UpdateResume = async () => {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/miscellaneous-data'
  );
  const { resume } = await response.json();

  if (!resume) {
    throw new Error('Failed to get resume data');
  }

  return (
    <section className='lg:w-1/2 mx-auto pb-20'>
      <h2 className='text-center lg:text-3xl text-xl mt-3'>Update Resume</h2>
      <UpdateResumeClient resume={resume} />
    </section>
  );
};
export default UpdateResume;
