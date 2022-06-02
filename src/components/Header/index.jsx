import './styles.css'

const Header = (props) => {
    return (
        <header>
            <button onClick= {props.updateCallback} > Show / Hide</button>
        </header>
    )
}


export default Header;