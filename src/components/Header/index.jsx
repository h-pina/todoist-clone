import "./styles.css";
import {ReactComponent as Home} from "../../icons/home.svg"
import {ReactComponent as Menu} from "../../icons/menu.svg"
//TODO: Create hamburgues animation
//TODO: Check whether this styling really is the only solution available
const Header = (props) => {
  return (
    <header>
      <button onClick={props.updateCallback}><Menu style={ {height: '25px', fill:"#bebebe"}}  /> </button>
      <button><Home style={ {height: '25px', fill:"#bebebe"}} /></button>
      <input type="text"></input>
    </header>
  );
};

export default Header;
