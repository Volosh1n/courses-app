const Button = ({
  buttonClassName = 'btn btn-outline-primary',
  onButtonClick,
  buttonText,
}) => {
  return (
    <button type='button' className={buttonClassName} onClick={onButtonClick}>
      {buttonText}
    </button>
  );
};

export default Button;
