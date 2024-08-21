const Pairs = (props) => {
  return (
    <>
      <section className="pair">
        <div className="on">
          <button
            onClick={() => {
              props.set(true);
            }}
          >
            ON
          </button>
        </div>

        <div className="off">
          <button
            onClick={() => {
              props.set(false);
            }}
          >
            OFF
          </button>
        </div>
      </section>
    </>
  );
};
export default Pairs;
