import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { SearchProvider } from "./context/SearchContext";

createRoot(document.getElementById("root")!).render(
    <StrictMode>

        {/* AuthProvider permite usar login, logout y usuario logueado
            en toda la aplicación. */}
        <AuthProvider>

            {/* SearchProvider permite usar el texto del buscador
                en Navbar y Home. */}
            <SearchProvider>

                <App />

            </SearchProvider>

        </AuthProvider>

    </StrictMode>
);