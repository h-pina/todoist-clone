import "./styles.css"
const ExpandedTask = (props) => {
    if(!props.show){
        return null;
    }
    else{
    return(
        <div className="exptask-container">
            <div className="modal">
                <h1>Task Title</h1>
                <p>Teste</p>
            </div>
        </div>
    )
}
}

export default ExpandedTask;
