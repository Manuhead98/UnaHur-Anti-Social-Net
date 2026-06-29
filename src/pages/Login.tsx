//import React from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    function iniciarSesion() {
        navigate("/home");
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Inicia Sesion!</h1>
                    <p className="py-6">
                        La red social de los estudiantes de la Unahur, navega, conectate e interactua con la comunidad Universitaria.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Nickname</label>
                            <input type="text" className="input" placeholder="Nickname" />
                            <div><a className="link link-hover">Olvidaste tu Nickname?</a></div>
                            <button
                                onClick={iniciarSesion}
                                className="btn btn-neutral mt-4"
                            >
                                Iniciar Sesión
                            </button>                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login