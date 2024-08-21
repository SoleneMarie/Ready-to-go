const Pairs = (props) => {
  return (
    <>
      <section className="pair">
        <div className="on">
          <button
            onClick={() => {
              props.setFirst(true);
            }}
          >
            ON
          </button>
        </div>

        <div className="off">
          <button
            onClick={() => {
              props.setFirst(false);
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
