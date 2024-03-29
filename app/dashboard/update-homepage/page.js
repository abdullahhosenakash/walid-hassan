import UpdateHomepageClient from '@/app/dashboard/update-homepage/_components/UpdateHomepageClient';

const UpdateHomepage = async () => {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/miscellaneous-data'
  );
  const { homepage } = await response.json();

  if (!homepage) {
    throw new Error('Failed to get homepage data');
  }

  return (
    <section className='lg:w-1/2 mx-auto pb-20'>
      <h2 className='text-center lg:text-3xl text-xl mt-3'>Update Homepage</h2>
      <UpdateHomepageClient homepage={homepage} />
    </section>
  );
};
export default UpdateHomepage;
