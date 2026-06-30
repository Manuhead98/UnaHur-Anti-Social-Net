import { api } from "./api";

// Trae todos los usuarios del backend
export const getUsers = async () => {
    const response = await api.get("/users");
    return response.data;
};

export const createUser = async (user: {
    nickname: string;
    email: string;
}) => {
    const response = await api.post("/users", user);
    return response.data;
};