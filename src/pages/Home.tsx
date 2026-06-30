import { useEffect, useState } from "react";
import PostCard from "../components/feed/PostCard";
import { getPosts } from "../services/posts";

function Home() {

    // Acá guardamos los posts que vienen del backend
    const [posts, setPosts] = useState<any[]>([]);

    // Estado para saber si todavía está cargando
    const [loading, setLoading] = useState(true);

    // Estado para guardar errores si falla la API
    const [error, setError] = useState("");

    // useEffect se ejecuta cuando se carga la pantalla Home
    useEffect(() => {
        const loadPosts = async () => {
            try {
                // Llamamos al backend: GET /posts
                const data = await getPosts();

                // Guardamos los posts en el estado
                setPosts(data);
            } catch (error) {
                console.error(error);
                setError("No se pudieron cargar las publicaciones");
            } finally {
                // Pase lo que pase, dejamos de cargar
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    return (
        <div className="container mx-auto px-4">

            <div className="max-w-2xl mx-auto space-y-6">

                {/* Mensaje mientras carga */}
                {loading && (
                    <p className="text-center">
                        Cargando publicaciones...
                    </p>
                )}

                {/* Mensaje si hubo error */}
                {error && (
                    <div className="alert alert-error">
                        {error}
                    </div>
                )}

                {/* Mensaje si no hay posts */}
                {!loading && !error && posts.length === 0 && (
                    <p className="text-center">
                        Todavía no hay publicaciones.
                    </p>
                )}

                {/* Lista real de posts */}
                {!loading && !error && posts.map((post) => (
                    <PostCard
                        key={post._id}
                        post={post}
                    />
                ))}

            </div>

        </div>
    );
}

export default Home;