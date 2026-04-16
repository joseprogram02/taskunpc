import { useTareas } from "../context/useTareas";
import { useState } from "react";
import TareaCard from "../components/TareaCard";
import { Link } from "react-router-dom";

function Home() {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas = tareas.filter(t => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  return (
    <div>
      <Link to="/nueva">
        <button>+ Nueva Tarea</button>
      </Link>

      <button onClick={() => setFiltro("todas")}>Todas</button>
      <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
      <button onClick={() => setFiltro("completadas")}>Completadas</button>

      {tareasFiltradas.map(t => (
        <TareaCard key={t.id} tarea={t} />
      ))}
    </div>
  );
}

export default Home;