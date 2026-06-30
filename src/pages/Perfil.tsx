import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { getPostsByUser } from "../services/posts";
import PostCard from "../components/feed/PostCard";

function Perfil() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadPosts = async () => {

            if (!user) return;

            try {

                const data = await getPostsByUser(user._id);

                setPosts(data);

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }

        };

        loadPosts();

    }, [user]);

    const cerrarSesion = () => {

        logout();

        navigate("/login");

    };

    return (

        <div className="container mx-auto max-w-3xl space-y-6">

            <div className="card bg-base-100 shadow">

                <div className="card-body">

                    <h2 className="text-3xl font-bold">
                        Mi Perfil
                    </h2>

                    <p>
                        <strong>Nickname:</strong> {user?.nickname}
                    </p>

                    <p>
                        <strong>Email:</strong> {user?.email}
                    </p>

                    <button
                        onClick={cerrarSesion}
                        className="btn btn-error w-fit mt-4"
                    >
                        Cerrar sesión
                    </button>

                </div>

            </div>

            <h3 className="text-2xl font-bold">
                Mis publicaciones
            </h3>

            {loading ? (

                <p>Cargando publicaciones...</p>

            ) : posts.length === 0 ? (

                <p>No realizaste publicaciones todavía.</p>

            ) : (

                posts.map((post) => (

                    <PostCard
                        key={post._id}
                        post={post}
                    />

                ))

            )}

        </div>

    );

}

export default Perfil;