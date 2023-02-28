const Button = (props) => {
  return (
    <>
      <button
        className={props.buttonClassName || 'btn btn-primary'}
        onClick={props.onButtonClick}
      >
        {props.buttonText}
      </button>
    </>
  );
};

export default Button;
