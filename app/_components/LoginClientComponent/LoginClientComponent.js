'use client';

import { login } from '@/app/_lib/login';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

const initialState = {
  errorType: null,
  message: ''
};

const LoginClientComponent = () => {
  const [errorMessage, setErrorMessage] = useState(initialState);
  const [state, formAction] = useFormState(login, initialState);

  useEffect(() => {
    const generatedError = {
      errorType: state?.errorType || null,
      message: state?.message || ''
    };
    setErrorMessage(generatedError);
  }, [state]);
  return (
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
          onFocus={() => setErrorMessage(initialState)}
          className={`py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full ${
            errorMessage.errorType === 'userSecret' && '!border-red-500'
          }`}
        />
        <p className='text-red-500'>
          {errorMessage.errorType === 'userSecret' && errorMessage.message}
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
          onFocus={() => setErrorMessage(initialState)}
          className={`py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full ${
            errorMessage.errorType === 'credential' && '!border-red-500'
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
          onFocus={() => setErrorMessage(initialState)}
          className={`py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full ${
            errorMessage.errorType === 'credential' && '!border-red-500'
          }`}
        />
      </div>
      <p className='text-red-500'>
        {errorMessage.errorType === 'credential' && errorMessage.message}
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
  );
};
export default LoginClientComponent;
