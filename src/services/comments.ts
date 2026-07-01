// Importamos la instancia de axios ya configurada
// con la URL base del backend.
import { api } from "./api";

// Trae todos los comentarios desde el backend.
// El backend actual no tiene una ruta específica por post,
// por eso después filtramos en el frontend.
export const getComments = async () => {
    const response = await api.get("/comments");
    return response.data;
};

// Trae todos los comentarios y devuelve solo los que pertenecen
// a una publicación específica.
export const getCommentsByPost = async (postId: string) => {
    const comments = await getComments();

    return comments.filter((comment: any) => {
        return comment.post?._id === postId;
    });
};

// Crea un comentario nuevo asociado a un post y a un usuario.
export const createComment = async (comment: {
    text: string;
    post: string;
    author: string;
}) => {
    const response = await api.post("/comments", comment);
    return response.data;
};