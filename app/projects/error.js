'use client';

const ProjectsError = ({ error, reset }) => {
  return (
    <section className='dark:bg-slate-900 lg:pt-4 pb-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl dark:text-whit text-red-600 lg:mt-12'>
        Something went wrong loading projects!
      </h2>
      <button
        className='block mx-auto mt-3 text-lg hover:text-pink-700 hover:underline'
        onClick={() => reset()}
      >
        Please try again
      </button>
    </section>
  );
};
export default ProjectsError;
