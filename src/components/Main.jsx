import Pairs from "./Pairs";
import Final from "./Final";

const Main = (props) => {
  return (
    <>
      <main>
        <section className="allButtons">
          <Pairs state={props.stateFirst} set={props.setFirst} />
          <Pairs state={props.stateSec} set={props.setSec} />
          <Pairs state={props.stateThird} set={props.setThird} />
          <Final
            stateFirst={props.stateFirst}
            stateSec={props.stateSec}
            stateThird={props.stateThird}
          />
        </section>
      </main>
    </>
  );
};
export default Main;
