import items from '../textsForLanguages';

import styles from './LanguageSwitch.module.css';

const LanguageSwitch = ({ language, languageSwitch }) => {

    const currentLanguage = language === 'language' ? 'english' : language;

    const element = items.find(item => item.language === currentLanguage);

    const handleChange = (event) => {
        languageSwitch(event.target.value);
    }

    return (
        <select className={styles.languageSwitch} defaultValue='language' name="languageSwitch" id="languageSwitch" onChange={handleChange}>
            <option value='language'>{element.selectLanguage}</option>
            <option value='english'>{element.selectEnglish}</option>
            <option value='deutsch'>{element.selectDeutsch}</option>
            <option value='ukrainian'>{element.selectUkrainian}</option>
        </select>
    );
};

export default LanguageSwitch;