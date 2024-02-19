import UpdateHomepageClient from '@/app/dashboard/_components/UpdateHomepageClient';
import { getMiscellaneousData } from '@/app/_lib/getFunctions/getMiscellaneousData';

const UpdateHomepage = async () => {
  const { homepage } = await getMiscellaneousData();

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
