import { useTareas } from "../context/TareasContext";
import { Link } from "react-router-dom";

function TareaCard({ tarea }) {
  const { toggleTarea } = useTareas();

  return (
    <div style={{
      opacity: tarea.completada ? 0.5 : 1,
      textDecoration: tarea.completada ? "line-through" : "none"
    }}>
      <Link to={`/tarea/${tarea.id}`}>
        <h3>{tarea.titulo}</h3>
      </Link>

      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => toggleTarea(tarea.id)}
      />
    </div>
  );
}

export default TareaCard;