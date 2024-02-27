'use client';

import { INITIAL_STATE } from '@/app/_constants/constants';
import { updateContact } from '@/app/_lib/updateFunctions/updateContact';
import InputField from '@/app/dashboard/_components/Shared/InputField';
import SubmitButton from '@/app/dashboard/_components/Shared/SubmitButton';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const UpdateContactClient = ({ contact }) => {
  const [errorMessage, setErrorMessage] = useState(INITIAL_STATE);
  const [state, formAction] = useFormState(updateContact, INITIAL_STATE);

  const { push } = useRouter();

  useEffect(() => {
    const generatedError = {
      errorType: state?.errorType || null,
      state: state?.status || null,
      message: state?.message || ''
    };
    setErrorMessage(generatedError);

    if (state?.status === 'success') {
      toast.success('Contact page updated successfully!');
      push('/contact');
    }
  }, [state, push]);
  return (
    <form action={formAction}>
      <div className='mt-4 flex flex-col gap-2'>
        <InputField
          title='Email'
          type='text'
          name='email'
          placeholder='Enter your email'
          required
          defaultValue={contact?.email}
        />

        <InputField
          title='Phone'
          type='text'
          name='phone'
          placeholder='Enter your phone number'
          required
          defaultValue={contact?.phone}
        />

        <InputField
          title='WhatsApp'
          type='text'
          name='whatsApp'
          placeholder='Enter your WhatsApp number'
          required
          defaultValue={contact?.whatsApp}
        />

        <InputField
          title='Address'
          type='text'
          name='address'
          placeholder='Enter your address'
          required
          defaultValue={contact?.address}
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
        buttonText='Update'
      />
    </form>
  );
};
export default UpdateContactClient;
