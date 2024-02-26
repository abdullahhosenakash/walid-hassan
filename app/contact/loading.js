import ContactLoadingCard from '@/app/contact/_components/ContactLoadingCard';

const ContactLoading = () => {
  return (
    <section className='dark:bg-slate-900 lg:pt-4 pb-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl dark:text-white'>My Contacts</h2>
      <p className='text-center dark:text-white'>
        Feel free to contact me if you think I can help somehow
      </p>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-3 mx-auto lg:w-3/4 mt-6'>
        <ContactLoadingCard />
        <ContactLoadingCard />
        <ContactLoadingCard />
        <ContactLoadingCard />
      </div>
    </section>
  );
};

export default ContactLoading;
