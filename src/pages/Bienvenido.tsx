//import React from 'react'
import { Link } from "react-router-dom";


function Bienvenido() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url('/portadaBienvenido.jpg')",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Bienvenido a AntiSocial-Net</h1>
                    <p className="mb-5">
                        La Red Social oficial de la Universidad Nacional de Hurlingham
                    </p>
                    <Link
                        to="/login"
                        className="btn btn-neutral"
                    >
                        Iniciar Sesión
                    </Link>                </div>
            </div>
        </div>
    )
}

export default Bienvenido