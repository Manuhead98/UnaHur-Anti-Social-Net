// Importamos la instancia de axios configurada
// con la URL base del backend.
import { api } from "./api";

// Trae todas las etiquetas disponibles desde el backend.
// Se usa en Crear publicación para que el usuario pueda seleccionarlas.
export const getTags = async () => {
    const response = await api.get("/tags");
    return response.data;
};