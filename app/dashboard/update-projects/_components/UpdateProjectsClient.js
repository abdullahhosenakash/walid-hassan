'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import InputField from '@/app/dashboard/_components/Shared/InputField';
import {
  updateProject,
  updateProjectType
} from '@/app/_lib/updateFunctions/updateProject';
import { INITIAL_STATE } from '@/app/_constants/constants';
import ProjectList from '@/app/dashboard/update-projects/_components/ProjectList';
import TextareaField from '@/app/dashboard/_components/Shared/TextareaField';
import SubmitButton from '@/app/dashboard/_components/Shared/SubmitButton';

const UpdateProjectsClient = ({ projects }) => {
  const [errorMessage, setErrorMessage] = useState(INITIAL_STATE);
  const [state, formAction] = useFormState(updateProject, INITIAL_STATE);
  const [stateForProjectType, formActionForProjectType] = useFormState(
    updateProjectType,
    INITIAL_STATE
  );
  const [selectedProject, setSelectedProject] = useState({});
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const [inputValue, setInputValue] = useState('');

  const { push } = useRouter();

  useEffect(() => {
    if (inputValue) {
      const isImageLinkOk = inputValue.startsWith('https://i.ibb.co/');
      if (!isImageLinkOk) {
        setErrorMessage({
          errorType: 'inputError',
          status: null,
          message: 'Image link must be started with https://i.ibb.co/'
        });
      } else {
        setErrorMessage({
          errorType: state?.errorType || null,
          status: state?.status || null,
          message: state?.message || ''
        });
      }
    } else {
      setErrorMessage({
        errorType: state?.errorType || null,
        status: state?.status || null,
        message: state?.message || ''
      });
    }
  }, [inputValue, state]);

  useEffect(() => {
    const generatedError = {
      errorType: state?.errorType || stateForProjectType?.errorType || null,
      status: state?.status || stateForProjectType?.status || null,
      message: state?.message || stateForProjectType?.message || ''
    };
    setErrorMessage(generatedError);

    if (
      state?.status === 'success' ||
      stateForProjectType?.status === 'success'
    ) {
      toast.success('Projects updated successfully!');
      push('/projects');
    }
  }, [state, push, stateForProjectType]);

  return (
    <section className='mt-4'>
      <ProjectList
        projects={projects}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        selectedProjectType={selectedProjectType}
        setSelectedProjectType={setSelectedProjectType}
      />

      {selectedProject.projectId && (
        <form action={formAction} className='mt-8' id='form-update'>
          <h3 className='text-xl text-center'>
            Project Type: {selectedProject.projectType}
          </h3>
          <div className='border rounded-lg dark:border-slate-600 border-slate-300 p-1 flex flex-col gap-2'>
            <input
              type='text'
              name='projectId'
              defaultValue={selectedProject.projectId}
              className='hidden'
            />
            <input
              type='text'
              name='projectType'
              defaultValue={selectedProject.projectType}
              className='hidden'
            />
            <InputField
              title='Project Name'
              type='text'
              name='projectName'
              placeholder='Enter your project name'
              required
              defaultValue={selectedProject.projectName}
            />

            <InputField
              title='Role'
              type='text'
              name='role'
              placeholder='Enter your project role'
              required
              defaultValue={selectedProject.role}
            />

            <InputField
              title='Technology'
              type='text'
              name='technology'
              placeholder='Enter used technology'
              required
              defaultValue={selectedProject.technology}
            />

            <TextareaField
              title='Description'
              name='description'
              placeholder='Enter your project description'
              required
              defaultValue={selectedProject.description}
              marginTopClassName='mt-0'
              heightClassName='lg:h-24 h-32'
            />

            <InputField
              title='Project Link'
              type='text'
              name='link'
              placeholder='Enter your project link'
              required
              defaultValue={selectedProject.link}
            />

            <InputField
              title='Image Link'
              type='text'
              name='imageLink'
              placeholder="Enter your project's image link"
              required
              defaultValue={selectedProject.imageLink}
              setInputValue={setInputValue}
            />

            <div>
              <label htmlFor='features'>
                <span className='block text-lg'>Features</span>
              </label>
              <div className='flex flex-col gap-2 border dark:border-slate-500 border-slate-300 rounded-lg p-1'>
                {selectedProject.features?.map((feature, index) => (
                  <InputField
                    key={feature}
                    title={`Feature ${index + 1}`}
                    type='text'
                    name={`feature${index + 1}`}
                    placeholder={`Enter feature ${index + 1}`}
                    required
                    defaultValue={feature}
                  />
                ))}
              </div>
            </div>
          </div>

          {errorMessage?.errorType && (
            <p className='text-center text-red-700 text-lg'>
              {errorMessage?.message}
            </p>
          )}

          <div className='flex gap-2 justify-center items-center'>
            <SubmitButton
              setErrorMessage={setErrorMessage}
              errorMessage={errorMessage}
              buttonText='Update'
              from='update project'
            />

            <button
              type='submit'
              className={`w-fit px-10 py-2 rounded-lg hover:bg-slate-600  bg-slate-700 disabled:cursor-not-allowed text-white ${
                !errorMessage.errorType && '!mt-2'
              }`}
              onClick={() => setSelectedProject({})}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {selectedProjectType._id && (
        <form
          action={formActionForProjectType}
          className='mt-8'
          id='form-update-type'
        >
          <div className='border rounded-lg dark:border-slate-600 border-slate-300 p-1'>
            <input
              type='text'
              name='_id'
              defaultValue={selectedProjectType?._id}
              className='hidden'
            />
            <InputField
              title='Project Type'
              type='text'
              name='projectType'
              placeholder='Enter your project type'
              required
              defaultValue={selectedProjectType?.projectType}
            />
          </div>

          {errorMessage?.errorType && (
            <p className='text-center text-red-700 text-lg'>
              {errorMessage?.message}
            </p>
          )}

          <div className='flex gap-2 justify-center items-center'>
            <SubmitButton
              setErrorMessage={setErrorMessage}
              errorMessage={errorMessage}
              buttonText='Update'
              from='update project'
            />

            <button
              type='submit'
              className={`w-fit px-10 py-2 rounded-lg hover:bg-slate-600  bg-slate-700 disabled:cursor-not-allowed text-white ${
                !errorMessage.errorType && '!mt-2'
              }`}
              onClick={() => setSelectedProjectType({})}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </section>
  );
};
export default UpdateProjectsClient;
