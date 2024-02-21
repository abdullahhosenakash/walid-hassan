// import { getMiscellaneousData } from '@/app/_lib/getFunctions/getMiscellaneousData';
// import ContactCard from '@/app/contact/_components/ContactCard';
import ContactInfoClient from '@/app/contact/_components/ContactInfoClient';

const Contact = async () => {
  // const { contact } = await getMiscellaneousData();

  // if (!contact) {
  //   throw new Error('Failed to get contact data');
  // }

  return (
    <section className='dark:bg-slate-900 lg:pt-4 pb-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl dark:text-white'>My Contacts</h2>
      <p className='text-center dark:text-white'>
        Feel free to contact me if you think I can help somehow
      </p>
      <ContactInfoClient />
    </section>
  );
};

export default Contact;
