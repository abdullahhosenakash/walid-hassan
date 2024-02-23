import UpdateResumeClient from '@/app/dashboard/_components/UpdateResumeClient';

const UpdateResume = async () => {
  const response = await fetch('http://localhost:3000/api/miscellaneous-data');
  const { resume } = await response.json();

  if (!resume) {
    throw new Error('Failed to get resume data');
  }

  return (
    <section className='lg:w-1/2 mx-auto pb-12'>
      <h2 className='text-center lg:text-3xl text-xl mt-3'>Update Resume</h2>
      <UpdateResumeClient resume={resume} />
    </section>
  );
};
export default UpdateResume;
