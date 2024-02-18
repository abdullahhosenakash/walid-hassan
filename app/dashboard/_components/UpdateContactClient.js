'use client';

import { updateContact } from '@/app/_lib/updateFunctions/updateContact';
import InputField from '@/app/dashboard/_components/InputField';
import SubmitButton from '@/app/dashboard/_components/SubmitButton';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const initialState = {
  errorType: null,
  status: null,
  message: ''
};

const UpdateContactClient = ({ contact }) => {
  const [errorMessage, setErrorMessage] = useState(initialState);
  const [state, formAction] = useFormState(updateContact, initialState);

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
          inputFieldTitle='Email'
          type='text'
          name='email'
          placeholder='Enter your email'
          required
          defaultValue={contact?.email}
        />

        <InputField
          inputFieldTitle='Phone'
          type='text'
          name='phone'
          placeholder='Enter your phone number'
          required
          defaultValue={contact?.phone}
        />

        <InputField
          inputFieldTitle='WhatsApp'
          type='text'
          name='whatsApp'
          placeholder='Enter your WhatsApp number'
          required
          defaultValue={contact?.whatsApp}
        />

        <InputField
          inputFieldTitle='Address'
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
      />
    </form>
  );
};
export default UpdateContactClient;
