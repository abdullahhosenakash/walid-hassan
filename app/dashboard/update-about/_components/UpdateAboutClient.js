'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import { updateAbout } from '@/app/_lib/updateFunctions/updateAbout';
import SubmitButton from '@/app/dashboard/_components/Shared/SubmitButton';
import TextareaField from '@/app/dashboard/_components/Shared/TextareaField';
import { INITIAL_STATE } from '@/app/_constants/constants';

const UpdateAboutClient = ({ aboutMe }) => {
  const [errorMessage, setErrorMessage] = useState(INITIAL_STATE);
  const [state, formAction] = useFormState(updateAbout, INITIAL_STATE);
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
      <TextareaField
        title='First Para'
        name='firstPara'
        placeholder='Enter first para'
        required
        defaultValue={firstPara}
        heightClassName='h-60'
      />

      {/* second para */}
      <TextareaField
        title='Second Para'
        name='secondPara'
        placeholder='Enter second para'
        required
        defaultValue={secondPara}
        heightClassName='h-60'
      />

      {/* third para */}
      <TextareaField
        title='Third Para'
        name='thirdPara'
        placeholder='Enter third para'
        required
        defaultValue={thirdPara}
        heightClassName='h-60'
      />

      {errorMessage.errorType && (
        <p className='text-center text-red-700 text-lg'>
          {errorMessage.message}
        </p>
      )}
      <SubmitButton
        setErrorMessage={setErrorMessage}
        errorMessage={errorMessage}
        buttonText='Update'
      />
    </form>
  );
};
export default UpdateAboutClient;
