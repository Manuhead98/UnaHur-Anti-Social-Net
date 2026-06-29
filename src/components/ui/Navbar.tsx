//import ModoOscuro from "./ModoOscuro";
function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">

            {/* Lado izquierdo */}
            <div className="flex-1">

                {/* Botón hamburguesa - Solo visible en móvil */}
                <label
                    htmlFor="main-drawer"
                    className="btn btn-square btn-ghost lg:hidden"
                >
                    ☰
                </label>

                {/* Logo */}
                <a className="btn btn-ghost text-xl">
                    UnaHur-Anti-Social-Net
                </a>

            </div>

            {/* Lado derecho */}
            <div className="flex gap-2">

                {/* Buscador */}
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="input input-bordered hidden md:block md:w-auto"
                />

                {/* Avatar */}
                <div className="dropdown dropdown-end">

                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Avatar del usuario"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a className="justify-between">
                                Perfil
                                <span className="badge">
                                    ¡Posteá!
                                </span>
                            </a>
                        </li>

                        <li>
                            <a>Configuración</a>
                        </li>

                        <li>
                            <a>Cerrar sesión</a>
                        </li>
                    </ul>

                </div>

            </div>

        </div>
    );
}

export default Navbar;