import { getMiscellaneousData } from '@/app/_lib/getFunctions/getMiscellaneousData';
import UpdateResumeClient from '@/app/dashboard/_components/UpdateResumeClient';

const UpdateResume = async () => {
  const { resume } = await getMiscellaneousData();
  return (
    <section className='lg:w-1/2 mx-auto pb-12'>
      <h2 className='text-center lg:text-3xl text-xl mt-3'>Update Resume</h2>
      <UpdateResumeClient resume={resume} />
    </section>
  );
};
export default UpdateResume;
