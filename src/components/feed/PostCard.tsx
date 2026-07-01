
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "../ui/Avatar";

import {
    Heart,
    MessageCircle,
    Share2,
    MoreVertical
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import { deletePost, updatePost } from "../../services/posts";

type PostCardProps = {
    post: {
        _id: string;
        description: string;
        createdAt?: string;
        author?: {
            _id: string;
            nickname: string;
        };
        comments?: {
            _id: string;
        }[];
        images?: {
            url: string;
        }[];
        tags?: {
            name: string;
        }[];
    };
};

function PostCard({ post }: PostCardProps) {

    // Hook para navegar entre páginas.
    const navigate = useNavigate();

    // Usuario actualmente logueado.
    const { user } = useAuth();

    // Like local (solo visual).
    const [liked, setLiked] = useState(false);

    // Permite ocultar una publicación de otro usuario.
    const [hidden, setHidden] = useState(false);

    // Verificamos si la publicación pertenece al usuario logueado.
    const isOwner = user?._id === post.author?._id;

    const authorName = post.author?.nickname || "Usuario";
    const commentsCount = post.comments?.length || 0;
    const imageUrl = post.images?.[0]?.url;
    const authorId = post.author?._id || "";

    // Si el usuario ocultó la publicación, dejamos de renderizarla.
    if (hidden) {
        return null;
    }

    // Abre el detalle de la publicación.
    const goToComments = () => {
        navigate(`/post/${post._id}`);
    };

    // Copia el link al portapapeles.
    const sharePost = async () => {

        const postUrl = `${window.location.origin}/post/${post._id}`;

        await navigator.clipboard.writeText(postUrl);

        alert("Link copiado al portapapeles.");

    };

    // Edita la descripción.
    const handleEdit = async () => {

        const newDescription = prompt(
            "Editar publicación:",
            post.description
        );

        if (!newDescription?.trim()) {
            return;
        }

        await updatePost(
            post._id,
            newDescription
        );

        window.location.reload();

    };

    // Elimina la publicación.
    const handleDelete = async () => {

        const confirmDelete = confirm(
            "¿Seguro que querés eliminar esta publicación?"
        );

        if (!confirmDelete) {
            return;
        }

        await deletePost(post._id);

        window.location.reload();

    };

    // Recibe la fecha de creación del post y devuelve un texto amigable.
    // Ejemplos:
    // - Hace 2 minutos
    // - Hace 1 hora
    // - Hace 3 días
    const getRelativeTime = (date?: string) => {

        // Si no viene fecha, mostramos un texto genérico.
        if (!date) {
            return "Hace unos minutos";
        }

        // Convertimos la fecha que viene del backend a objeto Date.
        const postDate = new Date(date);

        // Fecha y hora actual.
        const now = new Date();

        // Diferencia en milisegundos.
        const diffInMs = now.getTime() - postDate.getTime();

        // Convertimos a minutos.
        const diffInMinutes = Math.floor(diffInMs / 1000 / 60);

        if (diffInMinutes < 1) {
            return "Recién publicado";
        }

        if (diffInMinutes < 60) {
            return `Hace ${diffInMinutes} minuto${diffInMinutes === 1 ? "" : "s"}`;
        }

        // Convertimos a horas.
        const diffInHours = Math.floor(diffInMinutes / 60);

        if (diffInHours < 24) {
            return `Hace ${diffInHours} hora${diffInHours === 1 ? "" : "s"}`;
        }

        // Convertimos a días.
        const diffInDays = Math.floor(diffInHours / 24);

        return `Hace ${diffInDays} día${diffInDays === 1 ? "" : "s"}`;
    };

    return (

        <div className="card bg-base-100 shadow-md border border-base-300 w-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div className="card-body p-5">

                {/* ================= Header ================= */}

                <div className="flex justify-between items-start">

                    <div className="flex gap-3">

                        {/* Mostramos el avatar del autor de la publicación */}
                        <Avatar id={authorId} nickname={authorName} />

                        <div>

                            <h2 className="font-semibold">
                                {authorName}
                            </h2>

                            <p className="text-sm text-base-content/60">
                                {getRelativeTime(post.createdAt)}
                            </p>

                        </div>

                    </div>

                    {/* Menú contextual */}
                    <div className="dropdown dropdown-end">

                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle btn-sm"
                        >
                            <MoreVertical size={18} />
                        </div>

                        <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-10 w-48 shadow"
                        >

                            {isOwner ? (

                                <>
                                    <li>
                                        <button onClick={handleEdit}>
                                            ✏️ Editar
                                        </button>
                                    </li>

                                    <li>
                                        <button onClick={handleDelete}>
                                            🗑️ Eliminar
                                        </button>
                                    </li>
                                </>

                            ) : (

                                <>
                                    <li>
                                        <button onClick={() => setHidden(true)}>
                                            🙈 Ocultar publicación
                                        </button>
                                    </li>

                                    <li>
                                        <button onClick={() => alert("Publicación reportada.")}>
                                            🚩 Reportar
                                        </button>
                                    </li>
                                </>

                            )}

                            <li>
                                <button onClick={sharePost}>
                                    🔗 Compartir
                                </button>
                            </li>

                        </ul>

                    </div>

                </div>

                {/* ================= Descripción ================= */}

                <div className="mt-4">

                    <p className="leading-relaxed">
                        {post.description}
                    </p>

                </div>

                {/* ================= Imagen ================= */}

                {imageUrl && (

                    <figure className="mt-4 rounded-xl overflow-hidden max-h-96">

                        <img
                            src={imageUrl}
                            alt="Post"
                            className="w-full object-cover"
                        />

                    </figure>

                )}

                {/* ================= Tags ================= */}

                <div className="flex flex-wrap gap-2 mt-5">

                    {post.tags && post.tags.length > 0 ? (

                        post.tags.map((tag) => (

                            <div
                                key={tag.name}
                                className="badge badge-outline"
                            >
                                #{tag.name}
                            </div>

                        ))

                    ) : (

                        <div className="badge badge-ghost">
                            Sin etiquetas
                        </div>

                    )}

                </div>

                <div className="divider my-3"></div>

                {/* ================= Acciones ================= */}

                <div className="flex justify-around">

                    {/* Like */}
                    <button
                        className="btn btn-ghost flex-1"
                        onClick={() => setLiked(!liked)}
                    >
                        <Heart
                            size={20}
                            className="mr-2"
                            fill={liked ? "currentColor" : "none"}
                        />

                        <span>{liked ? 1 : 0}</span>

                    </button>

                    {/* Comentarios */}
                    <button
                        className="btn btn-ghost flex-1"
                        onClick={goToComments}
                    >
                        <MessageCircle
                            size={20}
                            className="mr-2"
                        />

                        <span>{commentsCount}</span>

                    </button>

                    {/* Compartir */}
                    <button
                        className="btn btn-ghost flex-1"
                        onClick={sharePost}
                    >
                        <Share2
                            size={20}
                            className="mr-2"
                        />

                        Compartir

                    </button>

                </div>

                {/* ================= Botón detalle ================= */}

                <button
                    className="btn btn-neutral w-full mt-4 mt-4"
                    onClick={() => navigate(`/post/${post._id}`)}
                >
                    Ver publicación completa
                </button>

            </div>

        </div>

    );
}

export default PostCard;