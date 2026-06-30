import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { createPost } from "../services/posts";

function CreatePost() {

    const navigate = useNavigate();

    const { user } = useAuth();

    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const publicar = async () => {

        setError("");

        if (!description.trim()) {
            setError("La publicación no puede estar vacía.");
            return;
        }

        if (!user) {
            setError("No hay un usuario logueado.");
            return;
        }

        try {

            setLoading(true);

            await createPost({
                description,
                author: user._id
            });

            // Limpiamos el formulario
            setDescription("");
            setImageUrl("");

            // Volvemos al Home
            navigate("/home");

        } catch (error) {

            console.error(error);

            setError("No se pudo crear la publicación.");

        } finally {

            setLoading(false);

        }

    };

    return (
        <div className="container mx-auto max-w-2xl">

            <div className="card bg-base-100 shadow border border-base-300">

                <div className="card-body">

                    <h2 className="text-3xl font-bold">
                        Crear publicación
                    </h2>

                    <p className="text-base-content/70">
                        Compartí algo con la comunidad de UnaHur.
                    </p>

                    <textarea
                        className="textarea textarea-bordered w-full min-h-32"
                        placeholder="¿Qué estás pensando?"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="URL de imagen opcional"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />

                    {error && (
                        <div className="alert alert-error">
                            {error}
                        </div>
                    )}

                    <button
                        onClick={publicar}
                        disabled={loading}
                        className="btn btn-primary mt-2"
                    >
                        {loading ? "Publicando..." : "Publicar"}
                    </button>

                </div>

            </div>

        </div>
    );
}

export default CreatePost;