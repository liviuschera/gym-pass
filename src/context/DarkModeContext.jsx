import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
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

function useDarkMode() {
    const context = useContext(DarkModeContext);

    if (context === undefined) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }

    return context;
}

export { DarkModeProvider, useDarkMode };
