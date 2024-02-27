const TextareaField = ({
  title,
  name,
  placeholder,
  required = true,
  defaultValue = '',
  marginTopClassName = 'mt-4',
  heightClassName = 'h-32'
}) => {
  return (
    <div className={marginTopClassName}>
      <label htmlFor={name}>
        <span className='block text-lg'>{title}</span>
      </label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        className={`py-2 border dark:border-slate-500 border-slate-300 outline-none rounded px-2 dark:bg-slate-800 w-full ${heightClassName}`}
      />
    </div>
  );
};
export default TextareaField;
