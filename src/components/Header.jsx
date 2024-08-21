const Header = (props) => {
  return (
    <>
      <header>
        <img src={props.src} />
        <h1>{props.title}</h1>
      </header>
    </>
  );
};
export default Header;
