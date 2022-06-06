//TODO adicinoar simbolos de marcacao de tarefa
import "./styles.css";

const MiniTask = () => {
  return (
    <div className="card">
      <input className="checkbox" type={"checkbox"} />
      <div className="card-text-content">
        <h2>Nome aleatorio de tarfa 1</h2>
        <h3>Descricao menos detalhada</h3>
      </div>
    </div>
  );
};

export default MiniTask;
