'use client';

import { INITIAL_STATE } from '@/app/_constants/constants';
import { updateExperience } from '@/app/_lib/updateFunctions/updateExperience';
import InputField from '@/app/dashboard/_components/Shared/InputField';
import SubmitButton from '@/app/dashboard/_components/Shared/SubmitButton';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const UpdateExperienceClient = ({ experience }) => {
  const [errorMessage, setErrorMessage] = useState(INITIAL_STATE);
  const [state, formAction] = useFormState(updateExperience, INITIAL_STATE);

  const { push } = useRouter();

  useEffect(() => {
    const generatedError = {
      errorType: state?.errorType || null,
      state: state?.status || null,
      message: state?.message || ''
    };
    setErrorMessage(generatedError);

    if (state?.status === 'success') {
      toast.success('Experience page updated successfully!');
      push('/experience');
    }
  }, [state, push]);

  return (
    <form action={formAction}>
      {experience?.map((exp, index) => (
        <div className='mt-4' key={exp.experienceName}>
          <label htmlFor={`experience${index + 1}`}>
            <span className='block text-xl'>Experience {index + 1}</span>
          </label>
          <div className=' border rounded-lg dark:border-slate-500 border-slate-300 p-1'>
            <div className='flex flex-col gap-2'>
              <InputField
                title={`Experience Name ${index + 1}`}
                type='text'
                name={`experienceName${index + 1}`}
                placeholder={`Enter your experience name ${index + 1}`}
                required
                defaultValue={exp.experienceName}
              />

              <InputField
                title={`Experience Link ${index + 1}`}
                type='text'
                name={`experienceLink${index + 1}`}
                placeholder={`Enter your experience link ${index + 1}`}
                required
                defaultValue={exp.experienceLink}
              />

              <div>
                <label htmlFor={`description${index + 1}`}>
                  <span className='block text-lg'>Description {index + 1}</span>
                </label>
                <textarea
                  name={`description${index + 1}`}
                  placeholder={`Enter your experience description ${index + 1}`}
                  required
                  defaultValue={exp.description}
                  className='py-2 border dark:border-slate-500 border-slate-300 outline-none rounded px-2 dark:bg-slate-800 w-full h-60'
                />
              </div>
            </div>
          </div>
        </div>
      ))}

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
export default UpdateExperienceClient;
