// Link permite navegar entre rutas sin recargar toda la página.
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="drawer-side">

            {/* Overlay para cerrar el menú lateral en pantallas chicas */}
            <label
                htmlFor="main-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
            ></label>

            {/* Menú lateral principal */}
            <ul className="menu bg-base-200 min-h-full w-72 p-4">

                {/* Lleva al feed principal */}
                <li>
                    <Link to="/home">
                        🏠 Inicio
                    </Link>
                </li>

                {/* Lleva al perfil del usuario logueado */}
                <li>
                    <Link to="/perfil">
                        👤 Perfil
                    </Link>
                </li>

                {/* Reemplazamos "Publicaciones" por crear publicación,
                    porque es una acción real del sistema */}
                <li>
                    <Link to="/crear-post">
                        📝 Crear publicación
                    </Link>
                </li>

                {/* Por ahora dejamos Mensajes deshabilitado,
                    porque no está dentro del MVP */}
                <li>
                    <span className="opacity-50 cursor-not-allowed">
                        💬 Mensajes
                    </span>
                </li>

                {/* Después podemos crear esta pantalla,
                    por ahora la dejamos lista para una futura ruta */}
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