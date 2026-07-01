import { Outlet } from "react-router-dom";

import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";

function MenuLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-base-200">

            <Navbar />

            <div className="drawer lg:drawer-open flex-1">

                <input
                    id="main-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />

                <div className="drawer-content">

                    <main className="container mx-auto max-w-7xl p-6">

                        <Outlet />

                    </main>

                </div>

                <Sidebar />

            </div>

        </div>
    );
}

export default MenuLayout;