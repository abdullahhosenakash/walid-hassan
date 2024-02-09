'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [secretProvided, setSecretProvided] = useState(false);
  const { push } = useRouter();

  const handleUserSecret = (e) => {
    const secret = e.target.value;
    if (secret === process.env.NEXT_PUBLIC_USER_SECRET) {
      setSecretProvided(true);
    } else {
      setSecretProvided(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    const payload = { userEmail, userPassword };
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        e.target.reset();
        push('/dashboard');
      } else if (response.status === 404) {
        setErrorMessage(
          'Something went wrong. The server responded not found. Please try again later!'
        );
      } else if (response.status === 401) {
        setErrorMessage('Unauthorized access detected!');
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <section className='dark:bg-slate-900 py-8 dark:text-white lg:px-0 px-3 lg:dark:h-screen'>
      <h2 className='text-center text-3xl'>Login</h2>
      <div className='lg:max-w-sm mx-auto shadow-2xl dark:bg-slate-800 p-6 mt-6 rounded-xl'>
        <form onSubmit={(e) => handleLogin(e)}>
          <div>
            <label htmlFor='userSecret'>
              <span className='block text-lg pb-1'>User Secret</span>
            </label>
            <input
              type='password'
              name='userSecret'
              id='userSecret'
              className='py-2 border border-slate-500 hover:border-pink-500 focus:outline-pink-700 rounded px-2 dark:bg-slate-800 w-full'
              onChange={(e) => handleUserSecret(e)}
            />
          </div>

          <div className='mt-3'>
            <label htmlFor='email'>
              <span className='block text-lg pb-1'>Email</span>
            </label>
            <input
              type='email'
              name='email'
              id='email'
              required
              disabled={!secretProvided}
              placeholder={
                secretProvided ? 'Enter your email' : 'Enter user secret first'
              }
              className='py-2 border border-slate-500 hover:border-pink-500 focus:outline-pink-700 rounded px-2 dark:bg-slate-800 w-full disabled:bg-slate-200 dark:disabled:bg-slate-500 disabled:hover:border-slate-500'
            />
          </div>

          <div className='mt-3'>
            <label htmlFor='password'>
              <span className='block text-lg pb-1'>Password</span>
            </label>
            <input
              type='password'
              name='password'
              id='password'
              required
              disabled={!secretProvided}
              placeholder={
                secretProvided
                  ? 'Enter your password'
                  : 'Enter user secret first'
              }
              className='py-2 border border-slate-500 hover:border-pink-500 focus:outline-pink-700 rounded px-2 dark:bg-slate-800 w-full disabled:bg-slate-200 disabled:hover:border-slate-500 dark:disabled:bg-slate-500'
            />
          </div>
          <p className='text-center text-red-600'>
            {errorMessage && errorMessage}
          </p>
          <div className='mt-4'>
            <button
              type='submit'
              disabled={!secretProvided}
              className='py-2 rounded bg-blue-700 w-full hover:bg-blue-600 text-white disabled:bg-slate-500'
            >
              {secretProvided ? 'Login' : 'Enter user secret first to login'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
