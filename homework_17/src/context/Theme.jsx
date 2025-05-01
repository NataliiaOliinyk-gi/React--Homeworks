import { useState, createContext, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { lightTheme, darkTheme } from "./modeTheme"

const themeContext = createContext();

export const useSwitchTheme = () => {

    const themeInfo = useContext(themeContext);
    return themeInfo;
};

const Theme = ({ children }) => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light")) ;

    return (

        <themeContext.Provider 
        // value={{theme, toggleTheme}}
        value={{ currentTheme: theme, nextTheme: theme === "light" ? "dark" : "light", toggleTheme }}
        >

            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>

        </themeContext.Provider>
    )
};

export default Theme;