const LoginLoadingInputField = ({
  marginTopClassName = 'mt-3',
  title,
  placeholder
}) => {
  return (
    <div className={marginTopClassName}>
      <label htmlFor={title}>
        <span className='block text-lg pb-1 hover:cursor-wait'>{title}</span>
      </label>
      <input
        type='text'
        disabled
        placeholder={placeholder}
        className='py-2 border dark:border-slate-600 outline-none rounded px-2 dark:bg-slate-800 w-full hover:cursor-wait'
      />
    </div>
  );
};

const LoginLoading = () => {
  return (
    <section className='dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl'>Login</h2>
      <div className='lg:max-w-sm mx-auto shadow-2xl dark:bg-slate-800 p-6 mt-6 rounded-xl hover:cursor-wait'>
        <LoginLoadingInputField
          marginTopClassName='mt-0'
          title='User Secret'
          placeholder='Enter your secret key'
        />
        <LoginLoadingInputField title='Email' placeholder='Enter your email' />
        <LoginLoadingInputField
          title='Password'
          placeholder='Enter your password'
        />

        <div className='mt-4'>
          <div className='w-fit mx-auto px-10 py-2 rounded-lg bg-slate-700 text-white hover:cursor-wait'>
            Login
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginLoading;
