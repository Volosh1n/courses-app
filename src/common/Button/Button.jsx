const Button = (props) => {
  return (
    <>
      <button
        key={props.buttonKey || ''}
        type='button'
        className={props.buttonClassName || 'btn btn-outline-primary'}
        onClick={props.onButtonClick}
      >
        {props.buttonText}
      </button>
    </>
  );
};

export default Button;
