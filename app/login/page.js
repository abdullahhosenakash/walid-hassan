import LoginClientComponent from '@/app/login/_components/LoginClientComponent';

const Login = () => {
  return (
    <section className='dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3 dark:min-h-screen'>
      <h2 className='text-center text-3xl'>Login</h2>
      <div className='lg:max-w-sm mx-auto shadow-2xl dark:bg-slate-800 p-6 mt-6 rounded-xl'>
        <LoginClientComponent />
      </div>
    </section>
  );
};

export default Login;
