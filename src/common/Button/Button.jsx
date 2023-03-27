import PropTypes from 'prop-types';

const Button = ({
  type = 'button',
  buttonClassName = 'btn btn-outline-primary',
  onButtonClick,
  buttonText,
}) => {
  return (
    <button type={type} className={buttonClassName} onClick={onButtonClick}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  buttonClassName: PropTypes.string,
  onButtonClick: PropTypes.func,
  buttonText: PropTypes.string,
};

export default Button;
