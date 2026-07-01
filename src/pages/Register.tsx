import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createUser } from "../services/users";

function Register() {
    const navigate = useNavigate();

    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const registrarUsuario = async () => {
        setError("");
        setSuccess("");

        if (!nickname.trim() || !email.trim()) {
            setError("Completá todos los campos obligatorios");
            return;
        }

        try {
            setLoading(true);

            await createUser({
                nickname,
                email,
            });

            setSuccess("Usuario creado correctamente. Redirigiendo al login...");

            setTimeout(() => {
                navigate("/login");
            }, 1200);

        } catch (error: any) {
            console.error(error);

            const message =
                error.response?.data?.message ||
                "No se pudo crear el usuario";

            setError(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen"
            style={{
                backgroundImage: "url('/loginRegister.jpg')",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">

                <div className="text-center lg:text-left max-w-lg">
                    <h1 className="text-5xl font-bold">
                        Sumate a UnaHur Anti-Social Net
                    </h1>

                    <p className="py-6 text-base-content/80">
                        Creá tu usuario para publicar, comentar y formar parte de la comunidad universitaria.
                    </p>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="card-body">

                        <h2 className="text-2xl font-bold mb-2">
                            Crear cuenta
                        </h2>

                        <fieldset className="fieldset">

                            <label className="label">Nickname</label>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Ej: caro"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                            />

                            <label className="label">Email</label>
                            <input
                                type="email"
                                className="input w-full"
                                placeholder="Ej: caro@test.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            {error && (
                                <div className="alert alert-error mt-3">
                                    {error}
                                </div>
                            )}

                            {success && (
                                <div className="alert alert-success mt-3">
                                    {success}
                                </div>
                            )}

                            <button
                                onClick={registrarUsuario}
                                disabled={loading}
                                className="btn btn-neutral mt-4"
                            >
                                {loading ? "Creando usuario..." : "Registrarme"}
                            </button>

                            <p className="text-sm text-center mt-4">
                                ¿Ya tenés cuenta?{" "}
                                <Link
                                    to="/login"
                                    className="link link-primary"
                                >
                                    Iniciar sesión
                                </Link>
                            </p>

                        </fieldset>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Register;