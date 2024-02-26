const ContactLoadingCard = () => {
  return (
    <div className='animate-pulse text-center shadow-xl dark:shadow-none bg-slate-100 dark:bg-slate-800 py-6'>
      <span className='bg-slate-600 rounded-full p-5 w-5 h-5 block mx-auto' />
      <p className='bg-slate-600 rounded-full py-3 mt-1 w-1/4 mx-auto' />
      <p className='bg-slate-600 rounded-full py-2 mt-2 w-1/2 mx-auto' />
    </div>
  );
};

export default ContactLoadingCard;
