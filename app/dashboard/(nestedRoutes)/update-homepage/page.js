import UpdateHomepageClient from '@/app/dashboard/_components/UpdateHomepageClient';

const UpdateHomepage = async () => {
  const response = await fetch('http://localhost:3000/api/miscellaneous-data');
  const { homepage } = await response.json();

  if (!homepage) {
    throw new Error('Failed to get homepage data');
  }

  return (
    <section className='lg:w-1/2 mx-auto pb-12'>
      <h2 className='text-center lg:text-3xl text-xl mt-3'>Update Homepage</h2>
      <UpdateHomepageClient homepage={homepage} />
    </section>
  );
};
export default UpdateHomepage;
