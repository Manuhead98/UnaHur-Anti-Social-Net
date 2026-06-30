import { api } from "./api";

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

export const createPost = async (post: {
    description: string;
    author: string;
}) => {
    const response = await api.post("/posts", post);
    return response.data;
};