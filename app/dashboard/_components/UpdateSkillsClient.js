'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';
import SubmitButton from '@/app/dashboard/_components/SubmitButton';
import InputField from '@/app/dashboard/_components/InputField';
import { updateSkills } from '@/app/_lib/updateFunctions/updateSkills';

const initialState = {
  errorType: null,
  status: null,
  message: ''
};

const UpdateSkillsClient = ({ skills }) => {
  const [errorMessage, setErrorMessage] = useState(initialState);
  const [state, formAction] = useFormState(updateSkills, initialState);
  const [inputValue, setInputValue] = useState('');

  const { push } = useRouter();
  useEffect(() => {
    const generatedError = {
      errorType: state?.errorType || null,
      status: state?.status || null,
      message: state?.message || ''
    };
    setErrorMessage(generatedError);

    if (state?.status === 'success') {
      toast.success('Skills updated successfully!');
      push('/skills');
    }
  }, [state, push]);

  useEffect(() => {
    if (inputValue) {
      if (!inputValue.includes('%')) {
        return setErrorMessage({
          status: null,
          errorType: 'inputError',
          message: 'Percentage input must contain % sign'
        });
      }
      const inputWithoutWhiteSpace = inputValue.trim();
      const percentage = inputWithoutWhiteSpace.split('%')[0];
      if (percentage < 30) {
        return setErrorMessage({
          status: null,
          errorType: 'inputError',
          message: 'Percentage input must be greater than or equal 30%'
        });
      } else if (percentage > 100) {
        return setErrorMessage({
          status: null,
          errorType: 'inputError',
          message: 'Percentage input must be less than or equal 100%'
        });
      } else if (percentage % 5 !== 0) {
        return setErrorMessage({
          status: null,
          errorType: 'inputError',
          message: 'Percentage input must be divisible by 5'
        });
      } else {
        return setErrorMessage(initialState);
      }
    }
  }, [inputValue]);

  return (
    <form action={formAction} className='mt-4'>
      <h3 className='text-xl text-center'>Update Skills</h3>
      <div className='flex flex-col gap-6'>
        {skills?.skillsDeveloped?.map((skillSet, index) => {
          let skillSetIndex = index;
          return (
            <div key={skillSet.skillType}>
              <div className='border rounded-lg border-slate-600 p-1'>
                <InputField
                  inputFieldTitle='Skill Type'
                  type='text'
                  name={`skillType${index + 1}`}
                  placeholder='Enter skill type'
                  required
                  defaultValue={skillSet.skillType}
                />
                <div className='flex flex-col gap-2 mt-2'>
                  {skillSet?.skills?.map((skill, index) => (
                    <div
                      className='flex gap-1 border border-slate-700 p-1 rounded-lg'
                      key={skill.skillName}
                    >
                      <InputField
                        inputFieldTitle='Skill Name'
                        type='text'
                        name={`skillName${skillSetIndex + 1}${index + 1}`}
                        placeholder='Enter your skill name'
                        required
                        defaultValue={skill.skillName}
                      />
                      <InputField
                        inputFieldTitle='Percentage'
                        type='text'
                        name={`percentage${skillSetIndex + 1}${index + 1}`}
                        placeholder='Enter your skill percentage'
                        required
                        setInputValue={setInputValue}
                        defaultValue={skill.percentage}
                      />
                    </div>
                  ))}
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
export default UpdateSkillsClient;
