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
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        className='py-2 border border-slate-500 outline-none rounded px-2 dark:bg-slate-800 w-full'
      />
    </div>
  );
};
export default InputField;
