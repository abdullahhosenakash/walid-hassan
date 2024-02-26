import { INITIAL_STATE } from '@/app/_constants/constants';
import { addNewCertification } from '@/app/_lib/addFunctions/addNewCertification';
import InputField from '@/app/dashboard/_components/InputField';
import SubmitButton from '@/app/dashboard/_components/SubmitButton';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const AddNewCertification = ({ certifications }) => {
  const [errorMessage, setErrorMessage] = useState(INITIAL_STATE);
  const [state, formAction] = useFormState(addNewCertification, INITIAL_STATE);
  const [inputtedCertificationType, setInputtedCertificationType] =
    useState('');
  const [status, setStatus] = useState('');
  const [inputValue, setInputValue] = useState('');
  const { push } = useRouter();

  const certificationTypes = certifications?.map(
    (certificationSet) => certificationSet.certificationType
  );

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
      toast.success('Certification added successfully!');
      push('/certifications');
    }
  }, [state, push]);

  return (
    <form action={formAction} className='mt-4'>
      <h3 className='text-xl text-center'>Add New Certification</h3>
      <div className='border dark:border-slate-500 border-slate-300 rounded-lg p-1'>
        Stored Certification Types
        <div className='dark:text-blue-400 text-blue-700'>
          {certificationTypes?.map((certificationType) => (
            <span
              key={certificationType}
              onClick={() => setInputtedCertificationType(certificationType)}
              className='cursor-pointer mr-4 hover:underline'
            >
              #{certificationType}
            </span>
          ))}
        </div>
      </div>

      <div className='mt-2'>
        <div className='flex flex-col gap-2'>
          <div>
            <label htmlFor='certificationType'>
              <span className='block text-lg'>Certification Type</span>
            </label>
            <input
              type='text'
              name='certificationType'
              id='certificationType'
              placeholder='Enter certification type or select from #tag'
              required
              value={inputtedCertificationType}
              onChange={(e) => setInputtedCertificationType(e.target.value)}
              className='py-2 border dark:border-slate-500 border-slate-300 outline-none rounded px-2 dark:bg-slate-800 w-full'
            />
          </div>

          <InputField
            inputFieldTitle='Certification Name'
            type='text'
            name='certificationName'
            placeholder='Enter certification name'
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

          <InputField
            inputFieldTitle='Certification Link'
            type='text'
            name='link'
            placeholder='Enter certification link'
            required
          />

          <InputField
            inputFieldTitle='Image Link'
            type='text'
            name='imageLink'
            placeholder='Enter image link'
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
        buttonText='Add Certification'
      />
    </form>
  );
};
export default AddNewCertification;
