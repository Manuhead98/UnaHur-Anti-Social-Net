// Importamos las funciones necesarias de React.
import {
    createContext,
    useContext,
    useState
} from "react";

// Definimos qué información va a compartir el contexto.
type SearchContextType = {

    // Texto escrito en el buscador.
    search: string;

    // Función para modificar el texto.
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

// Creamos el contexto.
// Al principio vale undefined hasta que exista un Provider.
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Componente Provider.
// Envuelve toda la aplicación para que cualquier componente
// pueda acceder al buscador.
export function SearchProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    // Estado que guarda el texto del buscador.
    const [search, setSearch] = useState("");

    return (

        <SearchContext.Provider
            value={{
                search,
                setSearch
            }}
        >

            {children}

        </SearchContext.Provider>

    );

}

// Hook personalizado.
// Evita tener que escribir useContext(SearchContext)
// en todos lados.
export function useSearch() {

    const context = useContext(SearchContext);

    if (!context) {

        throw new Error(
            "useSearch debe utilizarse dentro de SearchProvider."
        );

    }

    return context;

}