import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type ProtectedRouteProps = {
    children: React.ReactNode;
};
// Este Route Guard intercepta el acceso a una ruta y decideo si permito renderizar a dicha ruta si el usuario esta logueado
//  Si no lo esta, lo redirijo al login. Si esta logueado, renderizo el children que es el componente que quiero mostrar.

function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { user, loading } = useAuth();

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;