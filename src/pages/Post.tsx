
// Hooks de React para manejar estado y ejecutar lógica al cargar el componente.
import { useEffect, useState } from "react";

// Hook para obtener el id que viene en la URL.
// Ejemplo: /post/123 -> id = 123
import { useParams } from "react-router-dom";

// Servicio para traer una publicación por id.
import { getPostById } from "../services/posts";

// Servicios para traer y crear comentarios.
import { getCommentsByPost, createComment } from "../services/comments";

// Contexto de autenticación para saber qué usuario está logueado.
import { useAuth } from "../context/AuthContext";

// Reutilizamos la tarjeta del post que ya se usa en Home.
import PostCard from "../components/feed/PostCard";

import Avatar from "../components/ui/Avatar";


function Post() {
    // Tomamos el id del post desde la URL.
    const { id } = useParams();

    // Tomamos el usuario logueado desde el contexto.
    const { user } = useAuth();

    // Estado donde guardamos el post que viene de la API.
    const [post, setPost] = useState<any>(null);

    // Estado donde guardamos los comentarios del post.
    const [comments, setComments] = useState<any[]>([]);

    // Estado del textarea para crear un comentario nuevo.
    const [newComment, setNewComment] = useState("");

    // Estado para mostrar carga inicial.
    const [loading, setLoading] = useState(true);

    // Estado para mostrar errores generales.
    const [error, setError] = useState("");

    // Estado para mostrar errores del formulario de comentario.
    const [commentError, setCommentError] = useState("");

    // Función que carga el post y sus comentarios.
    const loadPostData = async () => {
        // Si no hay id en la URL, no hacemos nada.
        if (!id) return;

        try {
            // Traemos el post por id.
            const postData = await getPostById(id);

            // Traemos los comentarios asociados a ese post.
            const commentsData = await getCommentsByPost(id);

            // Guardamos ambos resultados en el estado.
            setPost(postData);
            setComments(commentsData);
        } catch (error) {
            console.error(error);
            setError("No se pudo cargar la publicación.");
        } finally {
            setLoading(false);
        }
    };

    // Se ejecuta cuando carga la pantalla o cambia el id.
    useEffect(() => {
        loadPostData();
    }, [id]);

    // Función para enviar un comentario nuevo.
    const handleCreateComment = async () => {
        // Limpiamos errores anteriores.
        setCommentError("");

        // Validamos que el comentario no esté vacío.
        if (!newComment.trim()) {
            setCommentError("El comentario no puede estar vacío.");
            return;
        }

        // Validamos que haya un usuario logueado.
        if (!user) {
            setCommentError("Tenés que iniciar sesión para comentar.");
            return;
        }

        // Validamos que exista el id del post.
        if (!id) {
            setCommentError("No se encontró la publicación.");
            return;
        }

        try {
            // Enviamos el comentario al backend.
            await createComment({
                text: newComment,
                post: id,
                author: user._id
            });

            // Limpiamos el campo del textarea.
            setNewComment("");

            // Volvemos a cargar los comentarios para ver el nuevo.
            const updatedComments = await getCommentsByPost(id);
            setComments(updatedComments);
        } catch (error) {
            console.error(error);
            setCommentError("No se pudo crear el comentario.");
        }
    };

    // Mientras carga la información.
    if (loading) {
        return (
            <p className="text-center mt-10">
                Cargando publicación...
            </p>
        );
    }

    // Si hubo error cargando el post.
    if (error) {
        return (
            <div className="alert alert-error max-w-xl mx-auto mt-10">
                {error}
            </div>
        );
    }

    return (

        <div className="container mx-auto max-w-3xl space-y-6">

            {/* Publicación principal */}
            <PostCard post={post} />

            {/* Card de comentarios */}
            <div className="card bg-base-100 shadow-md border border-base-300 hover:shadow-xl transition-all duration-300">
                <div className="card-body">

                    <h2 className="text-2xl font-bold">
                        Comentarios
                    </h2>

                    {/* Formulario para crear comentario */}
                    <div className="space-y-3">

                        <textarea
                            className="textarea textarea-bordered w-full"
                            placeholder="Escribí un comentario..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />

                        {commentError && (
                            <div className="alert alert-error">
                                {commentError}
                            </div>
                        )}

                        <button
                            className="btn btn-neutral"
                            onClick={handleCreateComment}
                        >
                            Comentar
                        </button>

                    </div>

                    <div className="divider"></div>

                    {/* Lista de comentarios */}
                    {comments.length === 0 ? (
                        <p className="text-base-content/60">
                            Todavía no hay comentarios.
                        </p>
                    ) : (
                        <div className="space-y-4">
                            {comments.map((comment) => (
                                <div
                                    key={comment._id}
                                    className="bg-base-200 rounded-xl p-4 flex gap-3"
                                >
                                    <Avatar nickname={comment.author?.nickname} />

                                    <div>
                                        <p className="font-semibold">
                                            {comment.author?.nickname || "Usuario"}
                                        </p>

                                        <p className="mt-1">
                                            {comment.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>

        </div>

    );
}

export default Post;