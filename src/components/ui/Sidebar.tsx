
function Sidebar() {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                {/* Contenido */}
                <label
                    htmlFor="my-drawer-1"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    ☰
                </label>

                <div className="p-6">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                </div>
            </div>

            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-1"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>

                <ul className="menu bg-base-200 min-h-full w-72 p-4">
                    <li><a>🏠 Inicio</a></li>
                    <li><a>👤 Perfil</a></li>
                    <li><a>📝 Publicaciones</a></li>
                    <li><a>💬 Mensajes</a></li>
                    <li><a>⚙️ Configuración</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar