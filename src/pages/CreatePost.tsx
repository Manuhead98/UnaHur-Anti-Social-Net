import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { createPost } from "../services/posts";
// Servicio que obtiene todas las etiquetas disponibles.
import { getTags } from "../services/tags";

// Hook para ejecutar lógica cuando se carga el componente.
import { useEffect } from "react";

function CreatePost() {

    const navigate = useNavigate();

    const { user } = useAuth();

    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    // Lista de etiquetas que vienen del backend.
    const [tags, setTags] = useState<any[]>([]);

    // Lista de etiquetas seleccionadas por el usuario.
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

        // Cuando la pantalla se abre, consultamos todas las etiquetas
    // disponibles para mostrarlas en el formulario.
    useEffect(() => {

        const loadTags = async () => {

            try {

                const data = await getTags();

                setTags(data);

            } catch (error) {

                console.error(error);

            }

        };

        loadTags();

    }, []);

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

            // Armamos el array de imágenes.
            // Si el usuario escribió una URL, la enviamos al backend.
            // Si no escribió nada, enviamos un array vacío.
            const images = imageUrl.trim()
                ? [{ url: imageUrl.trim() }]
                : [];

            // Enviamos la publicación al backend.
            // Incluye descripción, autor, tags seleccionados e imágenes opcionales.
            await createPost({
                description,
                author: user._id,
                tags: selectedTags,
                images
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
                    
                    {/* Sección de etiquetas.
                        Mostramos las etiquetas que vienen del backend para que el usuario
                        pueda seleccionar una o varias antes de publicar. */}
                    <div className="space-y-2">

                        <p className="font-semibold">
                            Etiquetas
                        </p>

                        <div className="flex flex-wrap gap-2">

                            {tags.length === 0 ? (
                                <p className="text-sm text-base-content/60">
                                    No hay etiquetas disponibles.
                                </p>
                            ) : (
                                tags.map((tag) => {

                                    // Verificamos si esta etiqueta ya fue seleccionada.
                                    const isSelected = selectedTags.includes(tag._id);

                                    return (
                                        <button
                                            key={tag._id}
                                            type="button"
                                            className={
                                                isSelected
                                                    ? "badge badge-primary cursor-pointer"
                                                    : "badge badge-outline cursor-pointer"
                                            }
                                            onClick={() => {
                                                if (isSelected) {
                                                    // Si ya estaba seleccionada, la quitamos.
                                                    setSelectedTags(
                                                        selectedTags.filter((tagId) => tagId !== tag._id)
                                                    );
                                                } else {
                                                    // Si no estaba seleccionada, la agregamos.
                                                    setSelectedTags([...selectedTags, tag._id]);
                                                }
                                            }}
                                        >
                                            #{tag.name}
                                        </button>
                                    );
                                })
                            )}

                        </div>

                    </div>

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