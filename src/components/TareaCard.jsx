import { useTareas } from "../context/useTareas";
import { Link } from "react-router-dom";

function TareaCard({ tarea }) {
  const { toggleTarea } = useTareas();

  return (
    <div className={`task-card ${tarea.completada ? "completed" : ""}`}>
      <div>
        <Link to={`/tarea/${tarea.id}`} className="task-title-link">
          <h3>{tarea.titulo}</h3>
        </Link>
        <p className="task-meta">
          {tarea.materia} · {tarea.fecha}
        </p>
      </div>

      <input
        className="task-checkbox"
        type="checkbox"
        checked={tarea.completada}
        onChange={() => toggleTarea(tarea.id)}
      />
    </div>
  );
}

export default TareaCard;