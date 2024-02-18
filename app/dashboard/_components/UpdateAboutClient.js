'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import { updateAbout } from '@/app/_lib/updateFunctions/updateAbout';
import SubmitButton from '@/app/dashboard/_components/SubmitButton';

const initialState = {
  errorType: null,
  status: null,
  message: ''
};

const UpdateAboutClient = ({ aboutMe }) => {
  const [errorMessage, setErrorMessage] = useState(initialState);
  const [state, formAction] = useFormState(updateAbout, initialState);
  const { firstPara, secondPara, thirdPara } = aboutMe || {};

  const { push } = useRouter();

  useEffect(() => {
    const generatedError = {
      errorType: state?.errorType || null,
      state: state?.status || null,
      message: state?.message || ''
    };
    setErrorMessage(generatedError);

    if (state?.status === 'success') {
      toast.success('About page updated successfully!');
      push('/about');
    }
  }, [state, push]);

  return (
    <form action={formAction}>
      {/* first para */}
      <div className='mt-4'>
        <label htmlFor='firstPara'>
          <span className='block text-lg'>First Para</span>
        </label>
        <textarea
          name='firstPara'
          placeholder='Enter first para'
          required
          defaultValue={firstPara}
          className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full h-60'
        />
      </div>

      {/* second para */}
      <div className='mt-4'>
        <label htmlFor='secondPara'>
          <span className='block text-lg'>Second Para</span>
        </label>
        <textarea
          name='secondPara'
          placeholder='Enter second para'
          required
          defaultValue={secondPara}
          className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full h-60'
        />
      </div>

      {/* third para */}
      <div className='mt-4'>
        <label htmlFor='thirdPara'>
          <span className='block text-lg'>Third Para</span>
        </label>
        <textarea
          name='thirdPara'
          placeholder='Enter third para'
          required
          defaultValue={thirdPara}
          className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full h-60'
        />
      </div>

      {errorMessage.errorType && (
        <p className='text-center text-red-700 text-lg'>
          {errorMessage.message}
        </p>
      )}
      <SubmitButton
        setErrorMessage={setErrorMessage}
        errorMessage={errorMessage}
      />
    </form>
  );
};
export default UpdateAboutClient;
