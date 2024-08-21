import Pairs from "./Pairs";

const Main = (props) => {
  return (
    <>
      <main>
        <section className="allButtons">
          <Pairs stateFirst={props.stateFirst} setFirst={props.setFirst} />
          <Pairs stateSec={props.stateSec} setSec={props.setSec} />
          <Pairs stateThird={props.stateThird} setThird={props.setThird} />

          <section className="final">
            {props.stateFirst === true &&
            props.stateSec === true &&
            props.stateThird === true ? (
              <button className="green">Go !</button>
            ) : (
              <button className="red">No Way !</button>
            )}
          </section>
        </section>
      </main>
    </>
  );
};
export default Main;
