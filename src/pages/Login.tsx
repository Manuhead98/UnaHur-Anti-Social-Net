import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../services/users";
import { useAuth } from "../context/AuthContext";

function Login() {
    const navigate = useNavigate();

    const { login } = useAuth();
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const iniciarSesion = async () => {
        setError("");

        if (!nickname || !password) {
            setError("Completá nickname y contraseña");
            return;
        }

        try {
            // Traemos usuarios desde la API
            const users = await getUsers();

            // Buscamos si existe un usuario con ese nickname
            const userFound = users.find(
                (user: any) => user.nickname === nickname
            );

            if (!userFound) {
                setError("El usuario no existe");
                return;
            }

            // Login simulado: la contraseña fija es 123456
            if (password !== "123456") {
                setError("Contraseña incorrecta");
                return;
            }

            // Guardamos el usuario logueado en localStorage
            login(userFound);

            // Redirigimos al home
            navigate("/home");

        } catch (error) {
            console.error(error);
            setError("No se pudo iniciar sesión");
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Inicia Sesión!</h1>
                    <p className="py-6">
                        La red social de los estudiantes de la Unahur, navega, conectate e interactua con la comunidad Universitaria.
                    </p>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">

                        <fieldset className="fieldset">

                            <label className="label">Nickname</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="Nickname"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                            />

                            <label className="label">Contraseña</label>
                            <input
                                type="password"
                                className="input"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {error && (
                                <div className="alert alert-error mt-3">
                                    {error}
                                </div>
                            )}

                            <button
                                onClick={iniciarSesion}
                                className="btn btn-neutral mt-4"
                            >
                                Iniciar Sesión
                            </button>

                        </fieldset>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;