import { useContext } from 'react';
import { languageContext } from '../../context/LanguageProvider';

import items from '../../data/textsForLanguages';

import styles from './TextComponent.module.css';

const TextComponent = () => {

    const { language} = useContext(languageContext);

    const currentLanguage = language === 'language' ? 'english' : language;

    const element = items.find(item => item.language === currentLanguage);

    return (
        <p className={styles.textContainer}>{element.text}</p>
    );
};

export default TextComponent;