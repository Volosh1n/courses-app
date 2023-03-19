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

export default Button;
