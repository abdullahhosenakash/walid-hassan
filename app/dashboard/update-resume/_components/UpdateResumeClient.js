'use client';

import { INITIAL_STATE } from '@/app/_constants/constants';
import { updateResume } from '@/app/_lib/updateFunctions/updateResume';
import InputField from '@/app/dashboard/_components/Shared/InputField';
import SubmitButton from '@/app/dashboard/_components/Shared/SubmitButton';
import TextareaField from '@/app/dashboard/_components/Shared/TextareaField';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const UpdateResumeClient = ({ resume }) => {
  const [errorMessage, setErrorMessage] = useState(INITIAL_STATE);
  const [state, formAction] = useFormState(updateResume, INITIAL_STATE);

  const { push } = useRouter();

  useEffect(() => {
    const generatedError = {
      errorType: state?.errorType || null,
      state: state?.status || null,
      message: state?.message || ''
    };
    setErrorMessage(generatedError);

    if (state?.status === 'success') {
      toast.success('Resume page updated successfully!');
      push('/resume');
    }
  }, [state, push]);
  return (
    <form action={formAction}>
      <div className='mt-4 flex flex-col gap-2'>
        <InputField
          title='Resume Link'
          type='text'
          name='resumeLink'
          placeholder='Enter your resume link'
          required
          defaultValue={resume?.resumeLink}
        />

        <TextareaField
          title='Description'
          name='description'
          placeholder='Enter your resume description'
          required
          defaultValue={resume?.description}
          marginTopClassName='mt-0'
          heightClassName='h-60'
        />

        {resume?.projects?.map((project, index) => {
          let projectIndex = index;
          return (
            <div className='mt-4' key={project.projectName}>
              <label htmlFor={`experience${index + 1}`}>
                <span className='block text-xl'>Project {index + 1}</span>
              </label>
              <div className='border rounded-lg dark:border-slate-600 border-slate-300 p-1'>
                <div className='flex flex-col gap-2'>
                  <InputField
                    title='Project Name'
                    type='text'
                    name={`projectName${index + 1}`}
                    placeholder='Enter your project name'
                    required
                    defaultValue={project.projectName}
                  />

                  <InputField
                    title='Used Technology'
                    type='text'
                    name={`technology${index + 1}`}
                    placeholder='Enter used technology'
                    required
                    defaultValue={project.technology}
                  />

                  <InputField
                    title='Project Link'
                    type='text'
                    name={`link${index + 1}`}
                    placeholder='Enter your project link'
                    required
                    defaultValue={project.link}
                  />

                  <div className='flex flex-col gap-2'>
                    {project.description?.map((desc, index) => (
                      <TextareaField
                        key={desc}
                        title={`Short Description ${index + 1}`}
                        name={`description${projectIndex + 1}${index + 1}`}
                        placeholder='Enter project short description'
                        required
                        defaultValue={desc}
                        marginTopClassName='mt-0'
                        heightClassName='h-28'
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
export default UpdateResumeClient;
