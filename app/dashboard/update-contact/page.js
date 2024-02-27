import UpdateContactClient from '@/app/dashboard/update-contact/_components/UpdateContactClient';

const UpdateContact = async () => {
  const response = await fetch(
    'https://walid-hassan.vercel.app/api/miscellaneous-data',
    { cache: 'no-store' }
  );
  const { contact } = await response.json();

  if (!contact) {
    throw new Error('Failed to get contact data');
  }

  return (
    <section className='lg:w-1/2 mx-auto pb-12'>
      <h2 className='text-center lg:text-3xl text-xl mt-3'>Update Contact</h2>
      <UpdateContactClient contact={contact} />
    </section>
  );
};
export default UpdateContact;
