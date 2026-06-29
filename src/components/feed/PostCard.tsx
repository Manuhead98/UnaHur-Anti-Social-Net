import Avatar from "./Avatar";
import {
    Heart,
    MessageCircle,
    Share2,
    MoreVertical
} from "lucide-react";

function PostCard() {
    return (
        <div className="card bg-base-100 shadow-md border border-base-300 w-full">

            {/* Header */}
            <div className="card-body p-5">

                <div className="flex justify-between items-start">

                    <div className="flex gap-3">

                        <Avatar />

                        <div>

                            <h2 className="font-semibold text-base-content">
                                Manu Diaz
                            </h2>

                            <p className="text-sm text-base-content/60">
                                Hace 5 minutos
                            </p>

                        </div>

                    </div>

                    {/* Menú */}
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

                {/* Descripción */}

                <div className="mt-4">

                    <p className="leading-relaxed">
                        Hoy terminé el frontend de UnaHur Anti-Social Net 🚀.
                        Ahora toca conectar toda la API hecha en Node.js y MongoDB.
                    </p>

                </div>

                {/* Imagen */}

                <figure className="mt-4 rounded-xl overflow-hidden max-h-96">
                    <img
                        src="https://picsum.photos/800/500"
                        alt="Post"
                        className="w-full object-cover"
                    />

                </figure>

                {/* Tags */}

                <div className="flex flex-wrap gap-2 mt-5">

                    <div className="badge badge-primary">
                        #React
                    </div>

                    <div className="badge badge-secondary">
                        #TypeScript
                    </div>

                    <div className="badge badge-accent">
                        #Tailwind
                    </div>

                </div>

                {/* Acciones */}

                <div className="divider my-3"></div>

                <div className="flex justify-around">

                    <button className="btn btn-ghost flex-1">

                        <Heart
                            size={20}
                            className="mr-2"
                        />

                        <span>25</span>

                    </button>

                    <button className="btn btn-ghost flex-1">

                        <MessageCircle
                            size={20}
                            className="mr-2"
                        />

                        <span>12</span>

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