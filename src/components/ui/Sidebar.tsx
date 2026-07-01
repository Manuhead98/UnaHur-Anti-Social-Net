// Link permite navegar entre rutas sin recargar toda la página.
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="drawer-side">

            <label
                htmlFor="main-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
            ></label>

            <ul className="menu bg-base-300 border-r border-base-content/10 min-h-full w-72 p-4 shadow-md">

                <li>
                    <Link to="/home">
                        🏠 Inicio
                    </Link>
                </li>

                <li>
                    <Link to="/perfil">
                        👤 Perfil
                    </Link>
                </li>

                <li>
                    <Link to="/crear-post">
                        📝 Crear publicación
                    </Link>
                </li>

                <li>
                    <span className="opacity-50 cursor-not-allowed">
                        💬 Mensajes
                    </span>
                </li>

                <li>
                    <Link to="/configuracion">
                        ⚙️ Configuración
                    </Link>
                </li>

            </ul>

        </div>
    );
}

export default Sidebar;