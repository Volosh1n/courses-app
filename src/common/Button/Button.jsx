const Button = ({ buttonKey, buttonClassName, onButtonClick, buttonText }) => {
  return (
    <>
      <button
        key={buttonKey || ''}
        type='button'
        className={buttonClassName || 'btn btn-outline-primary'}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
