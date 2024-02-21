const ContactCardLoading = () => {
  return (
    <>
      {['', '', '', ''].map((index) => (
        <div
          key={index}
          className='text-center shadow-xl dark:shadow-none bg-slate-100 dark:bg-slate-800 py-[4.4rem] animate-pulse'
        />
      ))}
    </>
  );
};
export default ContactCardLoading;
