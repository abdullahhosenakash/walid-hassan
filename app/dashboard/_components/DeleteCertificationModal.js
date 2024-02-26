'use client';

import { INITIAL_STATE } from '@/app/_constants/constants';
import { deleteResearchPaper } from '@/app/_lib/deleteFunctions/deleteResearchPaper';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const DeleteCertificationModal = ({
  setDeleteSelectedCertification,
  selectedCertificationToDelete,
  setSelectedCertificationToDelete
}) => {
  const [errorMessage, setErrorMessage] = useState(INITIAL_STATE);
  const [state, formAction] = useFormState(deleteResearchPaper, INITIAL_STATE);
  const [pending, setPending] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    const generatedError = {
      errorType: state?.errorType || null,
      status: state?.status || null,
      message: state?.message || ''
    };
    setErrorMessage(generatedError);

    if (state?.status === 'success') {
      setDeleteSelectedCertification(false);
      toast.success('Research paper(s) deleted successfully!');
      push('/research-papers');
    }
  }, [state, push, setDeleteSelectedCertification]);

  return (
    <section className='overflow-y-auto'>
      <form
        action={formAction}
        className='h-48 lg:max-w-lg lg:w-full w-[90%] bg-gray-400 transition duration-300 z-50 shadow-xl shadow-slate-600 fixed top-40 left-0 right-0 mx-auto lg:p-4 p-2 rounded-lg flex flex-col justify-between text-lg text-black'
      >
        <div>
          <p>
            Are you sure you want to delete this research paper
            {selectedCertificationToDelete?.papersLength && ' set'}?
          </p>
          <p className='text-slate-700 text-base mt-2 flex gap-2'>
            <span>Paper Type: {selectedCertificationToDelete?.paperType}</span>
            <input
              type='text'
              name='paperType'
              className='hidden'
              defaultValue={selectedCertificationToDelete?.paperType}
            />
          </p>
          {selectedCertificationToDelete?.papersLength ? (
            <p className='text-slate-700 text-base'>
              This research paper set contains{' '}
              {selectedCertificationToDelete?.papersLength} paper
              {selectedCertificationToDelete?.papersLength > 1 && 's'}
            </p>
          ) : (
            <>
              <p className='text-slate-700 text-base flex gap-2'>
                <span>
                  Paper Name: {selectedCertificationToDelete?.paperName}
                </span>
                <input
                  type='text'
                  name='paperId'
                  className='hidden'
                  defaultValue={selectedCertificationToDelete?.paperId}
                />
              </p>
            </>
          )}
        </div>

        <div>
          {errorMessage?.errorType && (
            <p className='text-center text-red-700 text-lg'>
              {errorMessage?.message}
            </p>
          )}
          <div className='flex gap-4 justify-end'>
            <button
              className='hover:text-blue-700 px-1 disabled:cursor-not-allowed disabled:hover:text-black'
              disabled={pending}
              onClick={() => {
                setSelectedCertificationToDelete({});
                setDeleteSelectedCertification(false);
              }}
            >
              Cancel
            </button>
            <button
              type='submit'
              className='hover:text-red-700 px-1 flex items-center gap-2  disabled:cursor-not-allowed disabled:hover:text-black'
              onClick={() => setPending(true)}
            >
              <span>Delete</span>
              {pending && (
                <span>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-gray-200 animate-spin dark:text-gray-200 fill-blue-600'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                      fill='currentColor'
                    />
                    <path
                      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                      fill='currentFill'
                    />
                  </svg>
                </span>
              )}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
export default DeleteCertificationModal;