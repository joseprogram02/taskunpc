import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NuevaTarea from "./pages/NuevaTarea";
import DetalleTarea from "./pages/DetalleTarea";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nueva" element={<NuevaTarea />} />
        <Route path="/tarea/:id" element={<DetalleTarea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;