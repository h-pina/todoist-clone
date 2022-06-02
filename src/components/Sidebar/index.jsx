import './styles.css';

const Sidebar = (props) => {
    return(
        <aside className = {`${props.show ? 'show' : ''}`}>
        </aside>
    )
}


export default Sidebar;