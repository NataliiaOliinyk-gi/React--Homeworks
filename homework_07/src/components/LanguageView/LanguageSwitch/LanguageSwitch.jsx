import { useContext } from 'react';
import { languageContext } from '../../../context/LanguageProvider';

import items from '../../../data/textsForLanguages';

import styles from './LanguageSwitch.module.css';

const LanguageSwitch = () => {

    const { language, languageSwitch } = useContext(languageContext);

    const element = items.find((item) => item.language === language) || items[0];

    const handleChange = (event) => {
        languageSwitch(event.target.value);
    }

    return (
        <select className={styles.languageSwitch} value='language' name="languageSwitch" id="languageSwitch" onChange={handleChange}>
            <option value='language'>{element.selectLanguage}</option>
            {items.map(item => (
                <option key={item.language} value={item.language}>
                    {element.languages[item.language]}
                </option>
            ))}
        </select>
    );
};

export default LanguageSwitch;