import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface DarkModeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface DarkModeProviderProps {
    children: ReactNode;
}

function DarkModeProvider({ children }: DarkModeProviderProps): JSX.Element {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    function toggleDarkMode(): void {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        (function () {
            if (darkMode) {
                document.documentElement.classList.add("dark-mode");
                document.documentElement.classList.remove("light-mode");
            } else {
                document.documentElement.classList.add("light-mode");
                document.documentElement.classList.remove("dark-mode");
            }
        })();
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

function useDarkMode(): DarkModeContextType {
    const context = useContext(DarkModeContext);

    if (context === undefined) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }

    return context;
}

export { DarkModeProvider, useDarkMode };
