'use client';

import { login } from '@/app/_lib/login';
import { useFormState } from 'react-dom';

const initialState = {
  errorType: null,
  message: ''
};

const Login = () => {
  const [state, formAction] = useFormState(login, initialState);
  return (
    <section className='dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3 dark:h-screen'>
      <h2 className='text-center text-3xl'>Login</h2>
      <div className='lg:max-w-sm mx-auto shadow-2xl dark:bg-slate-800 p-6 mt-6 rounded-xl'>
        <form action={formAction}>
          <div>
            <label htmlFor='userSecret'>
              <span className='block text-lg pb-1'>User Secret</span>
            </label>
            <input
              type='password'
              name='userSecret'
              id='userSecret'
              placeholder='Enter your secret key'
              required
              className={`py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full ${
                state?.errorType === 'userSecret' && 'border-red-500'
              }`}
            />
            <p className='text-red-500'>
              {state?.errorType === 'userSecret' && state?.message}
            </p>
          </div>

          <div className='mt-3'>
            <label htmlFor='userEmail'>
              <span className='block text-lg pb-1'>Email</span>
            </label>
            <input
              type='email'
              name='userEmail'
              id='userEmail'
              required
              placeholder='Enter your email'
              className={`py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full ${
                state?.errorType === 'credential' && 'border-red-500'
              }`}
            />
          </div>

          <div className='mt-3'>
            <label htmlFor='userPassword'>
              <span className='block text-lg pb-1'>Password</span>
            </label>
            <input
              type='password'
              name='userPassword'
              id='userPassword'
              required
              placeholder='Enter your password'
              className={`py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full ${
                state?.errorType === 'credential' && 'border-red-500'
              }`}
            />
          </div>
          <p className='text-red-500'>
            {state?.errorType === 'credential' && state?.message}
          </p>
          <div className='mt-4'>
            <button
              type='submit'
              className='py-2 rounded bg-blue-700 w-full hover:bg-blue-600 text-white disabled:bg-slate-500'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
