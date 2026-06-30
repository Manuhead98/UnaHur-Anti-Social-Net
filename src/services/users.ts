import { api } from "./api";

// Trae todos los usuarios del backend
export const getUsers = async () => {
    const response = await api.get("/users");
    return response.data;
};