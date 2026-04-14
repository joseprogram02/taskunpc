import TareaCard from "./TareaCard";
import { tareasIniciales } from "../data/tareas";

function ListaTareas() {
  return (
    <div>
      {tareasIniciales.map(tarea => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </div>
  );
}

export default ListaTareas;