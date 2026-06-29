import { Outlet } from "react-router-dom";

import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";

function MenuLayout() {
    return (
        <div className="drawer lg:drawer-open">

            <input
                id="main-drawer"
                type="checkbox"
                className="drawer-toggle"
            />

            <div className="drawer-content flex flex-col">

                <Navbar />

                <main className="flex-1 p-6">
                    <Outlet />
                </main>

            </div>

            <Sidebar />

        </div>
    );
}

export default MenuLayout;