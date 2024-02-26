'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import SubmitButton from '@/app/dashboard/_components/SubmitButton';
import InputField from '@/app/dashboard/_components/InputField';
import {
  updateResearchPaper,
  updateResearchPaperType
} from '@/app/_lib/updateFunctions/updateResearchPaper';
import { INITIAL_STATE } from '@/app/_constants/constants';
import ResearchPaperList from '@/app/dashboard/_components/ResearchPaperList';

const UpdateResearchPapersClient = ({ researchPapers }) => {
  const [errorMessage, setErrorMessage] = useState(INITIAL_STATE);
  const [status, setStatus] = useState('');
  const [state, formAction] = useFormState(updateResearchPaper, INITIAL_STATE);
  const [stateForResearchPaperType, formActionForResearchPaperType] =
    useFormState(updateResearchPaperType, INITIAL_STATE);
  const [selectedResearchPaper, setSelectedResearchPaper] = useState({});
  const [selectedResearchPaperType, setSelectedResearchPaperType] =
    useState('');

  const { push } = useRouter();

  useEffect(() => {
    const generatedError = {
      errorType:
        state?.errorType || stateForResearchPaperType?.errorType || null,
      status: state?.status || stateForResearchPaperType?.status || null,
      message: state?.message || stateForResearchPaperType?.message || ''
    };
    setErrorMessage(generatedError);

    if (
      state?.status === 'success' ||
      stateForResearchPaperType?.status === 'success'
    ) {
      toast.success('Research paper updated successfully!');
      push('/research-papers');
    }
  }, [state, push, stateForResearchPaperType]);

  return (
    <section className='mt-4'>
      <ResearchPaperList
        selectedResearchPaper={selectedResearchPaper}
        selectedResearchPaperType={selectedResearchPaperType}
        researchPapers={researchPapers}
        setSelectedResearchPaper={setSelectedResearchPaper}
        setSelectedResearchPaperType={setSelectedResearchPaperType}
        setStatus={setStatus}
      />

      {selectedResearchPaper.paperId && (
        <form action={formAction} className='mt-12' id='form-update'>
          <h3 className='text-xl text-center'>
            Research Paper Type: {selectedResearchPaper.paperType}
          </h3>
          <div className='border rounded-lg dark:border-slate-600 border-slate-300 p-1'>
            <input
              type='text'
              name='paperId'
              defaultValue={selectedResearchPaper.paperId}
              className='hidden'
            />
            <input
              type='text'
              name='paperType'
              defaultValue={selectedResearchPaper.paperType}
              className='hidden'
            />
            <InputField
              inputFieldTitle='Paper Name'
              type='text'
              name='paperName'
              placeholder='Enter your paper name'
              required
              defaultValue={selectedResearchPaper.paperName}
            />

            <InputField
              inputFieldTitle='Author Name'
              type='text'
              name='authorName'
              placeholder='Enter author name'
              required
              defaultValue={selectedResearchPaper.authorName}
            />

            <div>
              <label htmlFor='description'>
                <span className='block text-lg'>Description</span>
              </label>
              <textarea
                name='description'
                placeholder='Enter your paper description'
                required
                defaultValue={selectedResearchPaper.description}
                className='py-2 border dark:border-slate-500 border-slate-300 outline-none rounded px-2 dark:bg-slate-800 w-full lg:h-24 h-32'
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
                  className='py-2 outline-none dark:bg-slate-800 w-full'
                  defaultValue={selectedResearchPaper.status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                >
                  <option value=''>- - Select Paper Status - -</option>
                  <option value='Peer review'>Peer review</option>
                  <option value='Published'>Published</option>
                </select>
              </div>
            </div>

            {status === 'Published' && (
              <InputField
                inputFieldTitle='DOI'
                type='text'
                name='DOI'
                placeholder='Enter DOI'
                required={status === 'Published'}
                defaultValue={selectedResearchPaper.DOI}
              />
            )}
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
              from='update research paper'
            />

            <button
              type='submit'
              className={`w-fit px-10 py-2 rounded-lg hover:bg-slate-600  bg-slate-700 disabled:cursor-not-allowed text-white ${
                !errorMessage.errorType && '!mt-2'
              }`}
              onClick={() => setSelectedResearchPaper({})}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {selectedResearchPaperType._id && (
        <form
          action={formActionForResearchPaperType}
          className='mt-12'
          id='form-update-type'
        >
          <h3 className='text-xl text-center'>Update Research Paper Type</h3>
          <div className='border rounded-lg dark:border-slate-600 border-slate-300 p-1'>
            <input
              type='text'
              name='_id'
              defaultValue={selectedResearchPaperType?._id}
              className='hidden'
            />
            <InputField
              inputFieldTitle='Paper Type'
              type='text'
              name='paperType'
              placeholder='Enter your paper type'
              required
              defaultValue={selectedResearchPaperType?.paperType}
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
              from='update research paper'
            />

            <button
              type='submit'
              className={`w-fit px-10 py-2 rounded-lg hover:bg-slate-600  bg-slate-700 disabled:cursor-not-allowed text-white ${
                !errorMessage.errorType && '!mt-2'
              }`}
              onClick={() => setSelectedResearchPaperType({})}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </section>
  );
};
export default UpdateResearchPapersClient;
