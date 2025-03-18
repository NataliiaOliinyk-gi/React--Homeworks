import { useContext } from 'react';
import { languageContext } from '../../context/LanguageProvider'; 

import LanguageSwitch from './LanguageSwitch/LanguageSwitch';
import TextComponent from '../TextComponent/TextComponent'; 

import styles from './LanguageView.module.css';


const LanguageView = () => {

    const { language, languageSwitch } = useContext(languageContext);

    return (
        <div className={styles.container}>
            <TextComponent language={language} />
            <LanguageSwitch language={language} languageSwitch={languageSwitch} />
        </div>
    );
};

export default LanguageView;