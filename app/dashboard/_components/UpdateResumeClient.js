'use client';

import { updateResume } from '@/app/_lib/updateFunctions/updateResume';
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

const UpdateResumeClient = ({ resume }) => {
  const [errorMessage, setErrorMessage] = useState(initialState);
  const [state, formAction] = useFormState(updateResume, initialState);

  console.log(resume);

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
          inputFieldTitle='Resume Link'
          type='text'
          name='resumeLink'
          placeholder='Enter your resume link'
          required
          defaultValue={resume?.resumeLink}
        />

        <div>
          <label htmlFor='resumeLink'>
            <span className='block text-lg'>Description</span>
          </label>
          <textarea
            name='description'
            placeholder='Enter your resume description'
            required
            defaultValue={resume?.description}
            className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full h-60'
          />
        </div>

        {resume?.projects?.map((project, index) => {
          let projectIndex = index;
          return (
            <div className='mt-4' key={project.projectName}>
              <label htmlFor={`experience${index + 1}`}>
                <span className='block text-xl'>Project {index + 1}</span>
              </label>
              <div className='border rounded-lg border-slate-600 p-1'>
                <div className='flex flex-col gap-2'>
                  <InputField
                    inputFieldTitle='Project Name'
                    type='text'
                    name={`projectName${index + 1}`}
                    placeholder='Enter your project name'
                    required
                    defaultValue={project.projectName}
                  />

                  <InputField
                    inputFieldTitle='Used Technology'
                    type='text'
                    name={`technology${index + 1}`}
                    placeholder='Enter used technology'
                    required
                    defaultValue={project.technology}
                  />

                  <InputField
                    inputFieldTitle='Project Link'
                    type='text'
                    name={`link${index + 1}`}
                    placeholder='Enter your project link'
                    required
                    defaultValue={project.link}
                  />

                  <div className='flex flex-col gap-2'>
                    {project.shortDescription?.map((desc, index) => (
                      <div key={desc}>
                        <label
                          htmlFor={`shortDescription${projectIndex}${
                            index + 1
                          }`}
                        >
                          <span className='block text-lg'>{`Short Description ${
                            index + 1
                          }`}</span>
                        </label>
                        <textarea
                          name={`shortDescription${projectIndex + 1}${
                            index + 1
                          }`}
                          placeholder='Enter project short description'
                          required
                          defaultValue={desc}
                          className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full h-28'
                        />
                      </div>
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
