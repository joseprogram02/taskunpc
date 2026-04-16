import { useState } from "react";
import { useTareas } from "../context/useTareas";
import { useNavigate } from "react-router-dom";

function NuevaTarea() {
  const { agregarTarea } = useTareas();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    titulo: "",
    materia: "",
    fecha: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    agregarTarea(form);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="titulo" onChange={handleChange} placeholder="Título" />
      <input name="materia" onChange={handleChange} placeholder="Materia" />
      <input type="date" name="fecha" onChange={handleChange} />
      <button>Guardar</button>
    </form>
  );
}

export default NuevaTarea;