const Input = ({
  type,
  id,
  name,
  form,
  value,
  className,
  placeholder,
  minlength,
  maxlength,
  required,
  onChange,
}) => {
  return (
    <>
      <input
        type={type || 'text'}
        id={id}
        name={name}
        form={form}
        value={value}
        className={className || ''}
        placeholder={placeholder}
        minlength={minlength || 3}
        maxlength={maxlength || 40}
        required={required || false}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
