import { useState, useEffect } from "react";
import { TareasContext } from "./TareasContextData";

export function TareasProvider({ children }) {
  const [tareas, setTareas] = useState(() => {
    const data = localStorage.getItem("tareas");
    if (data) return JSON.parse(data);

    const today = new Date().toISOString().slice(0, 10);
    return [
      {
        id: Date.now(),
        titulo: "Ejemplo: estudiar para el parcial",
        materia: "Matemáticas",
        fecha: today,
        completada: false
      },
      {
        id: Date.now() + 1,
        titulo: "Ejemplo: leer capítulo 5",
        materia: "Historia",
        fecha: today,
        completada: false
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  function agregarTarea(tarea) {
    setTareas([
      ...tareas,
      { ...tarea, id: Date.now(), completada: false }
    ]);
  }

  function toggleTarea(id) {
    setTareas(
      tareas.map(t =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter(t => t.id !== id));
  }

  return (
    <TareasContext.Provider value={{
      tareas,
      agregarTarea,
      toggleTarea,
      eliminarTarea
    }}>
      {children}
    </TareasContext.Provider>
  );
}
