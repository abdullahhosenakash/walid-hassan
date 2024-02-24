'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import SubmitButton from '@/app/dashboard/_components/SubmitButton';
import InputField from '@/app/dashboard/_components/InputField';
import ProjectList from '@/app/dashboard/_components/ProjectList';
import {
  updateProject,
  updateProjectType
} from '@/app/_lib/updateFunctions/updateProject';

const initialState = {
  errorType: null,
  status: null,
  message: ''
};

const UpdateProjectsClient = ({ projects }) => {
  const [errorMessage, setErrorMessage] = useState(initialState);
  const [state, formAction] = useFormState(updateProject, initialState);
  const [stateForProjectType, formActionForProjectType] = useFormState(
    updateProjectType,
    initialState
  );
  const [selectedProject, setSelectedProject] = useState({});
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const { push } = useRouter();

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

  console.log(errorMessage);

  return (
    <section className='mt-4'>
      <ProjectList
        projects={projects}
        setSelectedProject={setSelectedProject}
        setSelectedProjectType={setSelectedProjectType}
      />

      {selectedProject.projectId && (
        <form action={formAction} className='mt-8' id='form-update'>
          <h3 className='text-xl text-center'>
            Project Type: {selectedProject.projectType}
          </h3>
          <div className='border rounded-lg dark:border-slate-600 border-slate-300 p-1'>
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
              inputFieldTitle='Project Name'
              type='text'
              name='projectName'
              placeholder='Enter your project name'
              required
              defaultValue={selectedProject.projectName}
            />

            <InputField
              inputFieldTitle='Role'
              type='text'
              name='role'
              placeholder='Enter your project role'
              required
              defaultValue={selectedProject.role}
            />

            <InputField
              inputFieldTitle='Technology'
              type='text'
              name='technology'
              placeholder='Enter used technology'
              required
              defaultValue={selectedProject.technology}
            />

            <div>
              <label htmlFor='description'>
                <span className='block text-lg'>Description</span>
              </label>
              <textarea
                name='description'
                placeholder='Enter your project description'
                required
                defaultValue={selectedProject.description}
                className='py-2 border dark:border-slate-500 border-slate-300 outline-none rounded px-2 dark:bg-slate-800 w-full lg:h-24 h-32'
              />
            </div>

            <InputField
              inputFieldTitle='Project Link'
              type='text'
              name='link'
              placeholder='Enter your project link'
              required
              defaultValue={selectedProject.link}
            />

            <InputField
              inputFieldTitle='Image Link'
              type='text'
              name='imageLink'
              placeholder="Enter your project's image link"
              required
              defaultValue={selectedProject.imageLink}
            />

            <div>
              <label htmlFor='features'>
                <span className='block text-lg'>Features</span>
              </label>
              <div className='flex flex-col gap-2 border dark:border-slate-500 border-slate-300 rounded-lg p-1'>
                {selectedProject.features?.map((feature, index) => (
                  <InputField
                    key={feature}
                    inputFieldTitle={`Feature ${index + 1}`}
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
              inputFieldTitle='Project Type'
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
