const Input = ({
  type = 'text',
  id,
  name,
  form,
  value,
  className = '',
  placeholder,
  minlength = 2,
  maxlength = 40,
  required = false,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      form={form}
      value={value}
      className={className}
      placeholder={placeholder}
      minLength={minlength}
      maxLength={maxlength}
      required={required}
      onChange={onChange}
    />
  );
};

export default Input;
