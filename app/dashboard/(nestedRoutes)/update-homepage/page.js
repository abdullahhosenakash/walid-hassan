import UpdateHomepageClient from '@/app/dashboard/_components/UpdateHomepageClient';

const UpdateHomepage = async () => {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/miscellaneous-data',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ time: new Date().toISOString() })
    }
  );
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
