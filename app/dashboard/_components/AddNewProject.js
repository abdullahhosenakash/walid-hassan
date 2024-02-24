import { addNewSkill } from '@/app/_lib/addFunctions/addNewSkill';
import InputField from '@/app/dashboard/_components/InputField';
import SubmitButton from '@/app/dashboard/_components/SubmitButton';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const initialState = {
  errorType: null,
  status: null,
  message: ''
};

const AddNewProject = ({ skills }) => {
  const [errorMessage, setErrorMessage] = useState(initialState);
  const [state, formAction] = useFormState(addNewSkill, initialState);
  const [inputValue, setInputValue] = useState('');
  const [inputtedSkillType, setInputtedSkillType] = useState('');
  const { push } = useRouter();

  const skillTypes = skills?.skillsDeveloped?.map(
    (skillSet) => skillSet.skillType
  );

  useEffect(() => {
    const generatedError = {
      errorType: state?.errorType || null,
      status: state?.status || null,
      message: state?.message || ''
    };
    setErrorMessage(generatedError);

    if (state?.status === 'success') {
      toast.success('Skill added successfully!');
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
      <h3 className='text-xl text-center'>Add New Skill</h3>
      <div className='border dark:border-slate-500 border-slate-300 rounded-lg p-1'>
        Stored Skill Types
        <div className='flex lg:flex-row flex-col lg:gap-3 gap-1 dark:text-blue-400 text-blue-700'>
          {skillTypes?.map((skillType) => (
            <span
              key={skillType}
              onClick={() => setInputtedSkillType(skillType)}
              className='cursor-pointer'
            >
              #{skillType}
            </span>
          ))}
        </div>
      </div>

      <div className='mt-2'>
        <div className='flex flex-col gap-2'>
          <div>
            <label htmlFor='skillType'>
              <span className='block text-lg'>Skill Type</span>
            </label>
            <input
              type='text'
              name='skillType'
              id='skillType'
              placeholder='Enter skill type or select from above #tag'
              required
              value={inputtedSkillType}
              onChange={(e) => setInputtedSkillType(e.target.value)}
              className='py-2 border dark:border-slate-500 border-slate-300 outline-none rounded px-2 dark:bg-slate-800 w-full'
            />
          </div>

          <InputField
            inputFieldTitle='Skill Name'
            type='text'
            name='skillName'
            placeholder='Enter skill name'
            required
          />

          <InputField
            inputFieldTitle='Percentage'
            type='text'
            name='percentage'
            placeholder='Enter skill percentage'
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
        buttonText='Add Skill'
      />
    </form>
  );
};
export default AddNewProject;
