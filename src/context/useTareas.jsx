import { useContext } from "react";
import { TareasContext } from "./TareasContextData";

export function useTareas() {
  const context = useContext(TareasContext);

  if (!context) {
    throw new Error("useTareas debe usarse dentro de <TareasProvider>");
  }

  return context;
}
