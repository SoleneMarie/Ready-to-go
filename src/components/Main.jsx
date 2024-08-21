import Pairs from "./Pairs";

const Main = (props) => {
  return (
    <>
      <main>
        <section className="allButtons">
          <Pairs state={props.stateFirst} set={props.setFirst} />
          <Pairs state={props.stateSec} set={props.setSec} />
          <Pairs state={props.stateThird} set={props.setThird} />

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
