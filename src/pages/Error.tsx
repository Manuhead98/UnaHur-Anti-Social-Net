import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content text-center">

                <div className="max-w-md">

                    <h1 className="text-7xl font-bold text-warning">
                        404
                    </h1>

                    <h2 className="text-3xl font-semibold mt-4">
                        Página en construcción
                    </h2>

                    <p className="py-6 text-base-content/70">
                        La página que intentás visitar todavía no está disponible
                        o no existe.
                    </p>

                    <Link
                        to="/home"
                        className="btn btn-primary"
                    >
                        Volver al inicio
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Error;