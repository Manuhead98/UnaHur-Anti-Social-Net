import { useState } from "react";
import {
    Image,
    Plus,
    Send,
    X
} from "lucide-react";

import Avatar from "./Avatar";

function CreatePostCard() {

    const [expandir, setExpandir] = useState(false);

    const [descripcion, setDescripcion] = useState("");

    const [imagen, setImagen] = useState([""]);

    const handleAddImagen = () => {
        setImagen([...imagen, ""]);
    };

    const handleImageChange = (index: number, value: string) => {

        const nuevas = [...imagen];
        nuevas[index] = value;

        setImagen(nuevas);
    };

    const handleCancel = () => {

        setExpandir(false);
        setDescripcion("");
        setImagen([""]);

    };

    const handlePublish = () => {

        console.log({
            descripcion,
            imagen
        });



        handleCancel();
    };

    return (

        <div className="card bg-base-100 shadow-lg border border-base-300">

            <div className="card-body">

                {/* HEADER */}

                <div className="flex items-center gap-4">

                    <Avatar />

                    {!expandir ? (

                        <button
                            className="input input-bordered flex-1 justify-start text-base-content/60 text-left transition-all hover:border-primary hover:shadow-md"
                            onClick={() => setExpandir(true)}
                        >

                            ✨ ¿Qué estás pensando?

                        </button>

                    ) : (

                        <div className="flex-1">

                            <h2 className="font-bold text-lg">

                                Crear publicación

                            </h2>

                            <p className="text-sm opacity-60">

                                Compartí algo con la comunidad.

                            </p>

                        </div>

                    )}

                </div>

                {/* FORM */}

                {expandir && (

                    <>

                        <textarea
                            className="textarea textarea-bordered mt-6 w-full min-h-40"
                            placeholder="¿Qué estás pensando?"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />

                        <div className="text-right text-xs opacity-60">

                            {descripcion.length} / 500

                        </div>

                        <div className="divider">

                            Imágenes

                        </div>

                        {

                            imagen.map((img, index) => (

                                <input
                                    key={index}
                                    type="text"
                                    placeholder="https://..."
                                    className="input input-bordered w-full mb-3"
                                    value={img}
                                    onChange={(e) =>
                                        handleImageChange(index, e.target.value)
                                    }
                                />

                            ))

                        }

                        <button
                            className="btn btn-outline btn-sm self-start"
                            onClick={handleAddImagen}
                        >

                            <Plus size={18} />

                            Agregar otra imagen

                        </button>

                        <div className="divider">

                            Etiquetas

                        </div>

                        <div className="flex flex-wrap gap-2">

                            <button className="badge badge-outline badge-lg hover:badge-primary">

                                React

                            </button>

                            <button className="badge badge-outline badge-lg hover:badge-primary">

                                Node

                            </button>

                            <button className="badge badge-outline badge-lg hover:badge-primary">

                                MongoDB

                            </button>

                            <button className="badge badge-outline badge-lg hover:badge-primary">

                                TypeScript

                            </button>

                        </div>

                        <div className="card-actions justify-between mt-6">

                            <button
                                className="btn btn-ghost"
                                onClick={handleCancel}
                            >

                                <X size={18} />

                                Cancelar

                            </button>

                            <button
                                className="btn btn-primary"
                                onClick={handlePublish}
                                disabled={!descripcion.trim()}
                            >

                                <Send size={18} />

                                Publicar

                            </button>

                        </div>

                    </>

                )}

            </div>

        </div>

    );

}

export default CreatePostCard;