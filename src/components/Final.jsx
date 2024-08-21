const Final = (props) => {
  return (
    <>
      <section className="final">
        {props.stateFirst === true &&
        props.stateSec === true &&
        props.stateThird === true ? (
          <button className="green">Go !</button>
        ) : (
          <button className="red">No Way !</button>
        )}
      </section>
    </>
  );
};
export default Final;
