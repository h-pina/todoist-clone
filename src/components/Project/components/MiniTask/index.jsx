//TODO adicinoar simbolos de marcacao de tarefa
import "./styles.css";
import ExpandedTask from "../ExpandedTask"
import { useState } from "react";

//TODO: Add state management to OnOff
const MiniTask = () => {
  const [onOff,setOnOff] = useState(false);

  function onClickHandle(){
    setOnOff(!onOff);
  }
  return (
    <>
    <div className="card" onClick={onClickHandle}>
      <input className="checkbox" type={"checkbox"} />
      <div className="card-text-content">
        <h2>Nome aleatorio de tarfa 1</h2>
        <h3>Descricao menos detalhada</h3>
      </div>
    </div>
    <ExpandedTask show={onOff}/>
    </>
  );
};

export default MiniTask;
