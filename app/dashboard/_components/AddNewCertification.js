import { INITIAL_STATE } from '@/app/_constants/constants';
import { addNewResearchPaper } from '@/app/_lib/addFunctions/addNewResearchPaper';
import InputField from '@/app/dashboard/_components/InputField';
import SubmitButton from '@/app/dashboard/_components/SubmitButton';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const AddNewCertification = ({ researchPapers }) => {
  const [errorMessage, setErrorMessage] = useState(INITIAL_STATE);
  const [state, formAction] = useFormState(addNewResearchPaper, INITIAL_STATE);
  const [inputtedResearchPaperType, setInputtedResearchPaperType] =
    useState('');
  const [status, setStatus] = useState('');
  const { push } = useRouter();

  const researchPaperTypes = researchPapers?.map(
    (researchPaperSet) => researchPaperSet.paperType
  );

  useEffect(() => {
    const generatedError = {
      errorType: state?.errorType || null,
      status: state?.status || null,
      message: state?.message || ''
    };
    setErrorMessage(generatedError);
    if (state?.status === 'success') {
      toast.success('Research paper added successfully!');
      push('/research-papers');
    }
  }, [state, push]);

  return (
    <form action={formAction} className='mt-4'>
      <h3 className='text-xl text-center'>Add New Research Paper</h3>
      <div className='border dark:border-slate-500 border-slate-300 rounded-lg p-1'>
        Stored Research Paper Types
        <div className='dark:text-blue-400 text-blue-700'>
          {researchPaperTypes?.map((paperType) => (
            <span
              key={paperType}
              onClick={() => setInputtedResearchPaperType(paperType)}
              className='cursor-pointer mr-4 hover:underline'
            >
              #{paperType}
            </span>
          ))}
        </div>
      </div>

      <div className='mt-2'>
        <div className='flex flex-col gap-2'>
          <div>
            <label htmlFor='paperType'>
              <span className='block text-lg'>Paper Type</span>
            </label>
            <input
              type='text'
              name='paperType'
              id='paperType'
              placeholder='Enter paper type or select from #tag'
              required
              value={inputtedResearchPaperType}
              onChange={(e) => setInputtedResearchPaperType(e.target.value)}
              className='py-2 border dark:border-slate-500 border-slate-300 outline-none rounded px-2 dark:bg-slate-800 w-full'
            />
          </div>

          <InputField
            inputFieldTitle='Paper Name'
            type='text'
            name='paperName'
            placeholder='Enter paper name'
            required
          />

          <InputField
            inputFieldTitle='Author Name'
            type='text'
            name='authorName'
            placeholder='Enter author name'
            required
          />

          <div>
            <label htmlFor='description'>
              <span className='block text-lg'>Description</span>
            </label>
            <textarea
              name='description'
              placeholder='Enter description'
              required
              className='py-2 border dark:border-slate-500 border-slate-300 outline-none rounded px-2 dark:bg-slate-800 w-full h-32'
            />
          </div>

          <div>
            <label htmlFor='status'>
              <span className='block text-lg'>Status</span>
            </label>
            <div className='border dark:border-slate-500 border-slate-300 px-2 dark:bg-slate-800 rounded'>
              <select
                name='status'
                id='status'
                className='py-2 outline-none dark:bg-slate-800 bg-white w-full'
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value=''>- - Select Paper Status - -</option>
                <option value='Peer review'>Peer review</option>
                <option value='Published'>Published</option>
              </select>
            </div>
          </div>

          <InputField
            inputFieldTitle='DOI'
            type='text'
            name='DOI'
            placeholder='Enter DOI'
            required={status === 'Published'}
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
        buttonText='Add Research Paper'
      />
    </form>
  );
};
export default AddNewCertification;
