'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import InputField from '@/app/dashboard/_components/Shared/InputField';
import { INITIAL_STATE } from '@/app/_constants/constants';
import {
  updateCertificationType,
  updateCertifications
} from '@/app/_lib/updateFunctions/updateCertifications';
import CertificationList from '@/app/dashboard/update-certifications/_components/CertificationList';
import SubmitButton from '@/app/dashboard/_components/Shared/SubmitButton';
import TextareaField from '@/app/dashboard/_components/Shared/TextareaField';

const UpdateCertificationsClient = ({ certifications }) => {
  const [errorMessage, setErrorMessage] = useState(INITIAL_STATE);
  const [state, formAction] = useFormState(updateCertifications, INITIAL_STATE);
  const [stateForCertificationType, formActionForCertificationType] =
    useFormState(updateCertificationType, INITIAL_STATE);
  const [selectedCertification, setSelectedCertification] = useState({});
  const [selectedCertificationType, setSelectedCertificationType] =
    useState('');
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
      errorType:
        state?.errorType || stateForCertificationType?.errorType || null,
      status: state?.status || stateForCertificationType?.status || null,
      message: state?.message || stateForCertificationType?.message || ''
    };
    setErrorMessage(generatedError);

    if (
      state?.status === 'success' ||
      stateForCertificationType?.status === 'success'
    ) {
      toast.success('Certifications updated successfully!');
      push('/certifications');
    }
  }, [state, push, stateForCertificationType]);

  return (
    <section className='mt-4'>
      <CertificationList
        selectedCertification={selectedCertification}
        selectedCertificationType={selectedCertificationType}
        certifications={certifications}
        setSelectedCertification={setSelectedCertification}
        setSelectedCertificationType={setSelectedCertificationType}
      />

      {selectedCertification.certificationId && (
        <form action={formAction} className='mt-12' id='form-update'>
          <h3 className='text-xl text-center'>
            Certification Type: {selectedCertification.certificationType}
          </h3>
          <div className='border rounded-lg dark:border-slate-600 border-slate-300 p-1 flex flex-col gap-2'>
            <input
              type='text'
              name='certificationId'
              defaultValue={selectedCertification.certificationId}
              className='hidden'
            />
            <input
              type='text'
              name='certificationType'
              defaultValue={selectedCertification.certificationType}
              className='hidden'
            />

            <InputField
              title='Certification Name'
              type='text'
              name='certificationName'
              placeholder='Enter your certification name'
              required
              defaultValue={selectedCertification.certificationName}
            />

            <TextareaField
              title='Description'
              name='description'
              placeholder='Enter your certification description'
              required
              defaultValue={selectedCertification.description}
              marginTopClassName='mt-0'
              heightClassName='lg:h-24 h-32'
            />

            <InputField
              title='Certification Link'
              type='text'
              name='link'
              placeholder='Enter certification link'
              required
              defaultValue={selectedCertification.link}
            />

            <InputField
              title='Project Image Link'
              type='text'
              name='imageLink'
              placeholder='Enter project image link'
              required
              defaultValue={selectedCertification.imageLink}
              setInputValue={setInputValue}
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
              from='update certifications'
            />

            <button
              type='submit'
              className={`w-fit px-10 py-2 rounded-lg hover:bg-slate-600  bg-slate-700 disabled:cursor-not-allowed text-white ${
                !errorMessage.errorType && '!mt-2'
              }`}
              onClick={() => setSelectedCertification({})}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {selectedCertificationType._id && (
        <form
          action={formActionForCertificationType}
          className='mt-12'
          id='form-update-type'
        >
          <h3 className='text-xl text-center'>Update Certification Type</h3>
          <div className='border rounded-lg dark:border-slate-600 border-slate-300 p-1'>
            <input
              type='text'
              name='_id'
              defaultValue={selectedCertificationType?._id}
              className='hidden'
            />
            <InputField
              title='Certification Type'
              type='text'
              name='certificationType'
              placeholder='Enter your certification type'
              required
              defaultValue={selectedCertificationType?.certificationType}
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
              from='update certification'
            />

            <button
              type='submit'
              className={`w-fit px-10 py-2 rounded-lg hover:bg-slate-600  bg-slate-700 disabled:cursor-not-allowed text-white ${
                !errorMessage.errorType && '!mt-2'
              }`}
              onClick={() => setSelectedCertificationType({})}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </section>
  );
};
export default UpdateCertificationsClient;
