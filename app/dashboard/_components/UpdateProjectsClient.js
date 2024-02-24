'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import SubmitButton from '@/app/dashboard/_components/SubmitButton';
import InputField from '@/app/dashboard/_components/InputField';
import { updateProjects } from '@/app/_lib/updateFunctions/updateProjects';

const initialState = {
  errorType: null,
  status: null,
  message: ''
};

const UpdateProjectsClient = ({ projects }) => {
  const [errorMessage, setErrorMessage] = useState(initialState);
  const [state, formAction] = useFormState(updateProjects, initialState);
  const { push } = useRouter();

  useEffect(() => {
    const generatedError = {
      errorType: state?.errorType || null,
      status: state?.status || null,
      message: state?.message || ''
    };
    setErrorMessage(generatedError);

    if (state?.status === 'success') {
      toast.success('Projects updated successfully!');
      push('/projects');
    }
  }, [state, push]);

  console.log(projects);

  return (
    <form action={formAction} className='mt-4'>
      <h3 className='text-xl text-center'>Update Projects</h3>
      <div className='flex flex-col gap-6'>
        {projects?.projectsDeveloped?.map((projectSet, index) => {
          let projectSetIndex = index;
          return (
            <div key={projectSet.projectType}>
              <div className='border rounded-lg dark:border-slate-600 border-slate-300 p-1'>
                <InputField
                  inputFieldTitle='Project Type'
                  type='text'
                  name={`projectType${index + 1}`}
                  placeholder='Enter project type'
                  required
                  defaultValue={projectSet.projectType}
                />

                <div className='mt-3'>
                  {projectSet.projects?.map((project, index) => {
                    let projectIndex = index;
                    return (
                      <div
                        className='border dark:border-slate-500 border-slate-300 p-1 rounded-lg flex flex-col gap-2'
                        key={project.projectName}
                      >
                        <InputField
                          inputFieldTitle='Project Name'
                          type='text'
                          name={`projectName${projectSetIndex + 1}${
                            projectIndex + 1
                          }`}
                          placeholder='Enter your project name'
                          required
                          defaultValue={project.projectName}
                        />

                        <InputField
                          inputFieldTitle='Role'
                          type='text'
                          name={`role${projectSetIndex + 1}${projectIndex + 1}`}
                          placeholder='Enter your project role'
                          required
                          defaultValue={project.role}
                        />

                        <InputField
                          inputFieldTitle='Technology'
                          type='text'
                          name={`technology${projectSetIndex + 1}${
                            projectIndex + 1
                          }`}
                          placeholder='Enter used technology'
                          required
                          defaultValue={project.technology}
                        />

                        <div>
                          <label htmlFor='description'>
                            <span className='block text-lg'>Description</span>
                          </label>
                          <textarea
                            name={`description${projectSetIndex + 1}${
                              projectIndex + 1
                            }`}
                            placeholder='Enter your project description'
                            required
                            defaultValue={project.description}
                            className='py-2 border dark:border-slate-500 border-slate-300 outline-none rounded px-2 dark:bg-slate-800 w-full lg:h-24 h-32'
                          />
                        </div>

                        <InputField
                          inputFieldTitle='Project Link'
                          type='text'
                          name={`link${projectSetIndex + 1}${projectIndex + 1}`}
                          placeholder='Enter your project link'
                          required
                          defaultValue={project.link}
                        />

                        <InputField
                          inputFieldTitle='Image Link'
                          type='text'
                          name={`imageLink${projectSetIndex + 1}${
                            projectIndex + 1
                          }`}
                          placeholder="Enter your project's image link"
                          required
                          defaultValue={project.imageLink}
                        />

                        <div>
                          <label htmlFor='features'>
                            <span className='block text-lg'>Features</span>
                          </label>
                          <div className='flex flex-col gap-2 border dark:border-slate-500 border-slate-300 rounded-lg p-1'>
                            {project.features?.map((feature, index) => {
                              let featureIndex = index;
                              return (
                                <InputField
                                  key={feature}
                                  inputFieldTitle={`Feature ${
                                    featureIndex + 1
                                  }`}
                                  type='text'
                                  name={`feature${projectSetIndex + 1}${
                                    projectIndex + 1
                                  }${featureIndex + 1}`}
                                  placeholder={`Enter feature ${
                                    featureIndex + 1
                                  }`}
                                  required
                                  defaultValue={feature}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {errorMessage?.errorType && (
        <p className='text-center text-red-700 text-lg'>
          {errorMessage?.message}
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
export default UpdateProjectsClient;
