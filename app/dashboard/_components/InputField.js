const InputField = ({
  inputFieldTitle,
  type = 'text',
  name,
  placeholder,
  required = true,
  defaultValue
}) => {
  return (
    <div>
      <label htmlFor={name}>
        <span className='block text-lg'>{inputFieldTitle}</span>
      </label>
      {name === 'phone' || name === 'whatsApp' ? (
        <div className='flex items-center py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full'>
          <span>+88</span>
          <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            required={required}
            defaultValue={defaultValue}
            className='outline-none rounded pl-1 pr-2 dark:bg-slate-800 w-full'
          />
        </div>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
          className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full'
        />
      )}
    </div>
  );
};
export default InputField;
