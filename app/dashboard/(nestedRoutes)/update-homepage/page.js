import UpdateHomepageClient from '@/app/_components/Dashboard/UpdateHomepageClient';
import { getMiscellaneousData } from '@/app/_lib/getMiscellaneousData';

const UpdateHomepage = async () => {
  const { homepage } = await getMiscellaneousData();
  return (
    <section>
      <h2 className='text-center text-3xl lg:block hidden'>Update Homepage</h2>
      <UpdateHomepageClient homepage={homepage} />
    </section>
  );
};
export default UpdateHomepage;
