import Avatar from "./Avatar";
import {
    Heart,
    MessageCircle,
    Share2,
    MoreVertical
} from "lucide-react";

// Definimos qué datos esperamos recibir desde el Home.
// Por ahora usamos una estructura simple según lo que devuelve el backend documental.
type PostCardProps = {
    post: {
        _id: string;
        description: string;
        author?: {
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

    // Si el post tiene autor, mostramos el nickname.
    // Si no viene autor por algún motivo, mostramos "Usuario".
    const authorName = post.author?.nickname || "Usuario";

    // Si el post tiene comentarios, contamos cuántos hay.
    // Si no vienen comentarios, mostramos 0.
    const commentsCount = post.comments?.length || 0;

    // Si el post tiene imágenes, tomamos la primera.
    // Si no tiene imágenes, dejamos una imagen de prueba.
    const imageUrl = post.images?.[0]?.url;

    return (
        <div className="card bg-base-100 shadow-md border border-base-300 w-full">

            <div className="card-body p-5">

                {/* Header del post: avatar + nombre + menú */}
                <div className="flex justify-between items-start">

                    <div className="flex gap-3">

                        <Avatar />

                        <div>
                            {/* Nombre del autor del post */}
                            <h2 className="font-semibold text-base-content">
                                {authorName}
                            </h2>

                            {/* Por ahora queda fijo. Después podemos calcular fecha real */}
                            <p className="text-sm text-base-content/60">
                                Hace unos minutos
                            </p>
                        </div>

                    </div>

                    {/* Menú de opciones */}
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
                            className="dropdown-content menu bg-base-100 rounded-box z-10 w-40 shadow"
                        >
                            <li>
                                <a>Editar</a>
                            </li>

                            <li>
                                <a>Eliminar</a>
                            </li>

                            <li>
                                <a>Compartir</a>
                            </li>
                        </ul>

                    </div>

                </div>

                {/* Descripción del post */}
                <div className="mt-4">
                    <p className="leading-relaxed">
                        {post.description}
                    </p>
                </div>

                {/* Imagen del post */}
                {
                    imageUrl && (

                        <figure className="mt-4 rounded-xl overflow-hidden max-h-96">

                            <img
                                src={imageUrl}
                                alt="Post"
                                className="w-full object-cover"
                            />

                        </figure>

                    )
                }

                {/* Tags del post */}
                <div className="flex flex-wrap gap-2 mt-5">

                    {/* Si el post tiene tags, los mostramos */}
                    {post.tags && post.tags.length > 0 ? (
                        post.tags.map((tag) => (
                            <div
                                key={tag.name}
                                className="badge badge-primary"
                            >
                                #{tag.name}
                            </div>
                        ))
                    ) : (
                        // Si no tiene tags, mostramos un mensaje simple
                        <div className="badge badge-ghost">
                            Sin etiquetas
                        </div>
                    )}

                </div>

                <div className="divider my-3"></div>

                {/* Acciones del post */}
                <div className="flex justify-around">

                    <button className="btn btn-ghost flex-1">
                        <Heart
                            size={20}
                            className="mr-2"
                        />

                        {/* Likes hardcodeados por ahora */}
                        <span>25</span>
                    </button>

                    <button className="btn btn-ghost flex-1">
                        <MessageCircle
                            size={20}
                            className="mr-2"
                        />

                        {/* Cantidad real de comentarios */}
                        <span>{commentsCount}</span>
                    </button>

                    <button className="btn btn-ghost flex-1">
                        <Share2
                            size={20}
                            className="mr-2"
                        />

                        Compartir
                    </button>

                </div>

            </div>

        </div>
    );
}

export default PostCard;