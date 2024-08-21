import Button from "./Button";
const Pairs = (props) => {
  return (
    <>
      <section className="pair">
        <Button
          name="on"
          value="true"
          set={props.set}
          state={props.state}
          texte="ON"
        />
        <Button
          name="of"
          value="false"
          set={props.set}
          state={props.state}
          texte="OFF"
        />
      </section>
    </>
  );
};
export default Pairs;
