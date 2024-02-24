import ModifyProjects from '@/app/dashboard/_components/ModifyProjects';

const UpdateProjects = async () => {
  const response = await fetch('https://walid-hassan.vercel.app/api/projects');
  const projects = await response.json();

  if (!projects) {
    throw new Error('Failed to get projects data');
  }
  return (
    <section className='lg:w-1/2 mx-auto pb-12'>
      <h2 className='text-center lg:text-3xl text-xl mt-3'>Update Projects</h2>
      <ModifyProjects projects={projects} />
    </section>
  );
};
export default UpdateProjects;
