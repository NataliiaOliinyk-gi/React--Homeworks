import { useState, createContext } from "react";

export const languageContext = createContext('english');

const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState('english');

    const languageSwitch = (newLanguage) => {
        setLanguage(newLanguage);
    }

    return (
        <languageContext.Provider value={{ language, languageSwitch }}>
            {children}
        </languageContext.Provider>
    )
};

export default LanguageProvider;