import PropTypes from 'prop-types';

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

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  form: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  minlength: PropTypes.number,
  maxlength: PropTypes.number,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Input;
