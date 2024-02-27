import { INITIAL_STATE } from '@/app/_constants/constants';
import { addNewProject } from '@/app/_lib/addFunctions/addNewProject';
import InputField from '@/app/dashboard/_components/Shared/InputField';
import SubmitButton from '@/app/dashboard/_components/Shared/SubmitButton';
import TextareaField from '@/app/dashboard/_components/Shared/TextareaField';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const AddNewProject = ({ projects }) => {
  const [errorMessage, setErrorMessage] = useState(INITIAL_STATE);
  const [state, formAction] = useFormState(addNewProject, INITIAL_STATE);
  const [inputtedProjectType, setInputtedProjectType] = useState('');
  const [inputValue, setInputValue] = useState('');
  const { push } = useRouter();

  const projectTypes = projects?.map((projectSet) => projectSet.projectType);

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
      errorType: state?.errorType || null,
      status: state?.status || null,
      message: state?.message || ''
    };
    setErrorMessage(generatedError);

    if (state?.status === 'success') {
      toast.success('Project added successfully!');
      push('/projects');
    }
  }, [state, push]);

  return (
    <form action={formAction} className='mt-4'>
      <h3 className='text-xl text-center'>Add New Project</h3>
      <div className='border dark:border-slate-500 border-slate-300 rounded-lg p-1'>
        Stored Project Types
        <div className='dark:text-blue-400 text-blue-700'>
          {projectTypes?.map((projectType) => (
            <span
              key={projectType}
              onClick={() => setInputtedProjectType(projectType)}
              className='cursor-pointer mr-4 hover:underline'
            >
              #{projectType}
            </span>
          ))}
        </div>
      </div>

      <div className='mt-2'>
        <div className='flex flex-col gap-2'>
          <div>
            <label htmlFor='projectType'>
              <span className='block text-lg'>Project Type</span>
            </label>
            <input
              type='text'
              name='projectType'
              id='projectType'
              placeholder='Enter project type or select from #tag'
              required
              value={inputtedProjectType}
              onChange={(e) => setInputtedProjectType(e.target.value)}
              className='py-2 border dark:border-slate-500 border-slate-300 outline-none rounded px-2 dark:bg-slate-800 w-full'
            />
          </div>

          <InputField
            title='Project Name'
            type='text'
            name='projectName'
            placeholder='Enter project name'
            required
          />

          <InputField
            title='Role'
            type='text'
            name='role'
            placeholder='Enter project role'
            required
          />

          <InputField
            title='Used Technology'
            type='text'
            name='technology'
            placeholder='Enter used technology'
            required
          />

          <TextareaField
            title='Description'
            name='description'
            placeholder='Enter project description'
            required
            marginTopClassName='mt-0'
          />

          <TextareaField
            title='Features (Separated by +)'
            name='features'
            placeholder="Enter your project's features"
            required
            marginTopClassName='mt-0'
            heightClassName='lg:h-24 h-32'
          />

          <InputField
            title='Project Link'
            type='text'
            name='link'
            placeholder='Enter project link'
            required
          />

          <InputField
            title='Project Image Link'
            type='text'
            name='imageLink'
            placeholder='Enter project image link'
            required
            setInputValue={setInputValue}
          />
        </div>
      </div>

      {errorMessage?.errorType && (
        <p className='text-center text-red-700 text-lg'>
          {errorMessage?.message}
        </p>
      )}

      <SubmitButton
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        buttonText='Add Project'
      />
    </form>
  );
};
export default AddNewProject;
