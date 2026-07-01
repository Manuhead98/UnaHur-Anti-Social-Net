import { api } from "./api";

// Actualiza la descripción de un post existente.
export const updatePost = async (
    postId: string,
    description: string
) => {
    const response = await api.put(`/posts/${postId}`, {
        description
    });

    return response.data;
};

// Elimina un post por id.
export const deletePost = async (postId: string) => {
    const response = await api.delete(`/posts/${postId}`);
    return response.data;
};

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

// Trae los posts de un usuario específico
export const getPostsByUser = async (userId: string) => {
    const response = await api.get("/posts");

    return response.data.filter((post: any) => {
        return post.author?._id === userId;
    });
};

// Crea una publicación nueva.
// description: texto obligatorio del post.
// author: id del usuario logueado.
// tags: array opcional con ids de etiquetas.
// images: array opcional con objetos que tienen una url.
export const createPost = async (post: {
    description: string;
    author: string;
    tags?: string[];
    images?: {
        url: string;
    }[];
}) => {
    const response = await api.post("/posts", post);
    return response.data;
};

export const getPostById = async (postId: string) => {
    const response = await api.get(`/posts/${postId}`);
    return response.data;
};