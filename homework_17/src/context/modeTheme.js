import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#e91e63",
        },
        secondary: {
            main: "#2196f3",
        },
        background: {
            default: "#fce4ec",
            paper: "#ffffff",
        },
        text: {
            primary: '#000000',
            secondary: '#ffffff'
        }
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#90caf9",
        },
        secondary: {
            main: "#f48fb1",
        },
        background: {
            default: "#121212",
            paper: "#1e1e1e",
        },
        text: {
            primary: '#ffffff',
            secondary: '#000000'
        }
    },
});