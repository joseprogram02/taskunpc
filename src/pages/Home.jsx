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
    <div className="app-shell">
      <div className="page-wrapper">
        <div className="header-row">
          <Link to="/nueva" className="link-button">
            + Nueva Tarea
          </Link>

          <div className="filters">
            <button
              className={filtro === "todas" ? "secondary active" : "secondary"}
              onClick={() => setFiltro("todas")}
            >
              Todas
            </button>
            <button
              className={filtro === "pendientes" ? "secondary active" : "secondary"}
              onClick={() => setFiltro("pendientes")}
            >
              Pendientes
            </button>
            <button
              className={filtro === "completadas" ? "secondary active" : "secondary"}
              onClick={() => setFiltro("completadas")}
            >
              Completadas
            </button>
          </div>
        </div>

        <div className="task-list">
          {tareasFiltradas.map(t => (
            <TareaCard key={t.id} tarea={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;