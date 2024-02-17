import { getMiscellaneousData } from '@/app/_lib/getFunctions/getMiscellaneousData';
import UpdateAboutClient from '@/app/dashboard/_components/UpdateAboutClient';

const UpdateAbout = async () => {
  const { aboutMe } = await getMiscellaneousData();
  return (
    <section className='lg:w-1/2 mx-auto pb-12'>
      <h2 className='text-center lg:text-3xl text-xl mt-3'>Update About</h2>
      <UpdateAboutClient aboutMe={aboutMe} />
    </section>
  );
};
export default UpdateAbout;
