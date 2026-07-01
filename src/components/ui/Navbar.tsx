// Hook para navegar entre páginas.
import { Link, useNavigate } from "react-router-dom";

// Contexto de autenticación para obtener el usuario
// y ejecutar el logout.
import { useAuth } from "../../context/AuthContext";

// Contexto del buscador.
import { useSearch } from "../../context/SearchContext";

function Navbar() {

    // Permite navegar por código.
    const navigate = useNavigate();

    // Obtenemos el usuario logueado y la función logout.
    const { user, logout } = useAuth();
    // Obtenemos el texto del buscador y la función para modificarlo.
    const { search, setSearch } = useSearch();
    

    // Cierra la sesión, limpia el localStorage
    // y vuelve a la pantalla de login.
    const cerrarSesion = () => {

        logout();

        navigate("/login");

    };

    return (
        <div className="navbar bg-base-100 shadow-sm">

            {/* ---------------- Lado izquierdo ---------------- */}
            <div className="flex-1">

                {/* Botón hamburguesa para móvil */}
                <label
                    htmlFor="main-drawer"
                    className="btn btn-square btn-ghost lg:hidden"
                >
                    ☰
                </label>

                {/* Logo de la aplicación.
                    Al hacer clic vuelve al Home. */}
                <Link
                    to="/home"
                    className="btn btn-ghost text-xl"
                >
                    UnaHur-Anti-Social-Net
                </Link>

            </div>

            {/* ---------------- Lado derecho ---------------- */}
            <div className="flex gap-2 items-center">

            {/* Buscador de publicaciones.
                Todo lo que escriba el usuario se guarda
                en SearchContext para que Home pueda usarlo. */}
            <input
                type="text"
                placeholder="Buscar publicaciones..."
                className="input input-bordered hidden md:block md:w-64"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

                {/* Menú del usuario */}
                <div className="dropdown dropdown-end">

                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">

                            {/* Por ahora seguimos usando una imagen fija.
                                Después podemos usar iniciales o foto real. */}
                            <img
                                alt="Avatar"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />

                        </div>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-56 p-2 shadow"
                    >

                        {/* Mostramos el nickname del usuario */}
                        <li className="menu-title">
                            <span>
                                {user?.nickname}
                            </span>
                        </li>

                        {/* Ir al perfil */}
                        <li>
                            <Link to="/perfil">
                                👤 Mi perfil
                            </Link>
                        </li>

                        {/* Crear publicación */}
                        <li>
                            <Link to="/crear-post">
                                📝 Nueva publicación
                            </Link>
                        </li>

                        {/* Configuración (la implementaremos después) */}
                        <li>
                            <Link to="/configuracion">
                                ⚙️ Configuración
                            </Link>
                        </li>

                        {/* Cerrar sesión */}
                        <li>
                            <button onClick={cerrarSesion}>
                                🚪 Cerrar sesión
                            </button>
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    );
}

export default Navbar;