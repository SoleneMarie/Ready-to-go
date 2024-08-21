const Footer = (props) => {
  return (
    <>
      <footer>
        <p>
          Made with {props.with} by {props.by}
        </p>
      </footer>
    </>
  );
};

export default Footer;
