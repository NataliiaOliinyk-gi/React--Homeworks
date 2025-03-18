
import items from '../LanguageView/textsForLanguages';

import styles from './TextComponent.module.css';

const TextComponent = ({ language }) => {

    const currentLanguage = language === 'language' ? 'english' : language;

    const element = items.find(item => item.language === currentLanguage);

    return (
        <p className={styles.textContainer}>{element.text}</p>
    );
};

export default TextComponent;