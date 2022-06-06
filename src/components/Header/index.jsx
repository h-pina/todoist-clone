import "./styles.css";

const Header = (props) => {
  return (
    <header>
      <button onClick={props.updateCallback}> Show / Hide</button>
      <button> Home</button>
      <input type="text"></input>
    </header>
  );
};

export default Header;
