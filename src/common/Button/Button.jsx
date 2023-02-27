const Button = (props) => {
  return (
    <>
      <button className={props.buttonClassName} onClick={props.onButtonClick}>
        {props.buttonText}
      </button>
    </>
  )
}

export default Button;
