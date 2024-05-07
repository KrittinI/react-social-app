import { createContext, useState } from "react";

export const ThemeContext = createContext();


// eslint-disable-next-line react/prop-types
export default function ThemeContextProvider({ children }) {

    const [mode, setMode] = useState('light')

    const toggleMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light')

    }


    return <ThemeContext.Provider value={{ mode, toggleMode }}>{children}</ThemeContext.Provider>
}
