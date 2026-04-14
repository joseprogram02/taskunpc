function Header({ pendientes }) {
  return (
    <div>
      <h1>TaskUPC — Mi Gestor Académico</h1>
      <p>Tareas pendientes: {pendientes}</p>
    </div>
  );
}

export default Header;