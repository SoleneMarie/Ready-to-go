const Button = (props) => {
  return (
    <>
      <div className={props.name}>
        <button
          onClick={() => {
            props.set(props.value);
          }}
        >
          {props.texte}
        </button>
      </div>
    </>
  );
};
export default Button;
