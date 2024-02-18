import { getMiscellaneousData } from '@/app/_lib/getFunctions/getMiscellaneousData';
import UpdateContactClient from '@/app/dashboard/_components/UpdateContactClient';

const UpdateContact = async () => {
  const { contact } = await getMiscellaneousData();
  return (
    <section className='lg:w-1/2 mx-auto pb-12'>
      <h2 className='text-center lg:text-3xl text-xl mt-3'>Update Contact</h2>
      <UpdateContactClient contact={contact} />
    </section>
  );
};
export default UpdateContact;
