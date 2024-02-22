'use client';

import InputField from '@/app/dashboard/_components/InputField';
import { updateHomepage } from '@/app/_lib/updateFunctions/updateHomepage';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import SubmitButton from '@/app/dashboard/_components/SubmitButton';

const initialState = {
  errorType: null,
  status: null,
  message: ''
};

const UpdateHomepageClient = ({ homepage }) => {
  const [errorMessage, setErrorMessage] = useState(initialState);
  const [state, formAction] = useFormState(updateHomepage, initialState);
  const {
    passion,
    designations,
    socialLinks,
    highlightedSkills,
    homepageCards
  } = homepage || {};
  const { push } = useRouter();

  useEffect(() => {
    const generatedError = {
      errorType: state?.errorType || null,
      state: state?.status || null,
      message: state?.message || ''
    };
    setErrorMessage(generatedError);

    if (state?.status === 'success') {
      toast.success('Homepage updated successfully!');
      push('/');
    }
  }, [state, push]);

  return (
    <form action={formAction}>
      {/* passion */}
      <InputField
        inputFieldTitle='Passion'
        type='text'
        name='passion'
        placeholder='Enter your passion'
        required
        defaultValue={passion}
      />

      {/* designations */}
      <div className='mt-4'>
        <label htmlFor='designation'>
          <span className='block text-lg'>Designations</span>
        </label>
        <div className='flex flex-col gap-2 border border-slate-400 p-2 rounded-lg'>
          {designations?.map((designation, index) => (
            <InputField
              inputFieldTitle={`Designation ${index + 1}`}
              type='text'
              name={`designation${index + 1}`}
              placeholder={`Enter your designation ${index + 1}`}
              required
              defaultValue={designation}
              key={designation}
            />
          ))}
        </div>
      </div>

      {/* social links */}
      <div className='mt-4'>
        <label htmlFor='socialLinks'>
          <span className='block text-lg'>Social Links</span>
        </label>
        <div className='flex flex-col gap-2 border border-slate-400 rounded-lg p-2'>
          <InputField
            inputFieldTitle='Facebook'
            type='text'
            name='facebook'
            placeholder='Enter your facebook profile link'
            required
            defaultValue={socialLinks?.facebookLink}
          />
          <InputField
            inputFieldTitle='Linked In'
            type='text'
            name='linkedIn'
            placeholder='Enter your linked in profile link'
            required
            defaultValue={socialLinks?.linkedInLink}
          />
          <InputField
            inputFieldTitle='Github'
            type='text'
            name='github'
            placeholder='Enter your github profile link'
            required
            defaultValue={socialLinks?.githubLink}
          />
          <InputField
            inputFieldTitle='Google Scholar'
            type='text'
            name='googleScholar'
            placeholder='Enter your google scholar profile link'
            required={false}
            defaultValue={socialLinks?.googleScholarLink}
          />
        </div>
      </div>

      {/* highlighted skills */}
      <div className='mt-4'>
        <label htmlFor='highlightedSkills'>
          <span className='block text-lg'>
            Highlighted Skills (Separated by Comma)
          </span>
        </label>
        <textarea
          name='highlightedSkills'
          placeholder='Enter your highlighted skills'
          required
          defaultValue={highlightedSkills?.map((skill) => skill)}
          className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full lg:h-24 h-32'
        />
      </div>

      {/* homepage cards */}
      <div className='mt-4'>
        <label htmlFor='homepageCards'>
          <span className='block text-lg'>Homepage Cards</span>
        </label>
        <div className='flex flex-col gap-2 border border-slate-400 p-2 rounded-lg'>
          {homepageCards?.map((card, index) => (
            <div className='' key={card.title}>
              <label htmlFor={`card${index + 1}`}>
                <span className='block text-lg'>Card {index + 1}</span>
              </label>
              <div className='border border-slate-400 rounded-lg p-1'>
                <InputField
                  inputFieldTitle='Title'
                  type='text'
                  name={`title${index + 1}`}
                  placeholder={`Enter title ${index + 1}`}
                  required
                  defaultValue={card.title}
                />
                <InputField
                  inputFieldTitle='Description'
                  type='text'
                  name={`description${index + 1}`}
                  placeholder={`Enter  description ${index + 1}`}
                  required
                  defaultValue={card.description}
                />
                <InputField
                  inputFieldTitle='Button Text'
                  type='text'
                  name={`linkText${index + 1}`}
                  placeholder={`Enter  button text ${index + 1}`}
                  required
                  defaultValue={card.linkText}
                />
                <InputField
                  inputFieldTitle='Link'
                  type='text'
                  name={`link${index + 1}`}
                  placeholder={`Enter  link ${index + 1}`}
                  required
                  defaultValue={card.link}
                />
              </div>
            </div>
          ))}
        </div>
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
export default UpdateHomepageClient;
