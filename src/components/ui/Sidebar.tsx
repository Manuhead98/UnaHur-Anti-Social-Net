
function Sidebar() {
    return (
        <div className="drawer-side">

            <label
                htmlFor="main-drawer"
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
    );
}

export default Sidebar;