import { useParams } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function DetalleTarea() {
  const { id } = useParams();
  const { tareas, eliminarTarea } = useTareas();

  const tarea = tareas.find(t => t.id == id);

  if (!tarea) return <p>No encontrada</p>;

  return (
    <div>
      <h2>{tarea.titulo}</h2>
      <p>{tarea.materia}</p>
      <p>{tarea.fecha}</p>

      <button onClick={() => eliminarTarea(tarea.id)}>
        Eliminar
      </button>
    </div>
  );
}

export default DetalleTarea;