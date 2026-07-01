import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

import Bienvenido from "../pages/Bienvenido";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import Post from "../pages/Post";
import Error from "../pages/Error";
import MenuLayout from "../components/layouts/MenuLayout";
import CreatePost from "../components/feed/CreatePost";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Páginas públicas */}
                <Route path="/" element={<Bienvenido />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Todo lo de acá requiere login */}
                <Route
                    element={
                        <ProtectedRoute>
                            <MenuLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="/home" element={<Home />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/crear-post" element={<CreatePost />} />
                    <Route path="/post/:id" element={<Post />} />
                </Route>

                {/* Error */}
                <Route path="*" element={<Error />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;