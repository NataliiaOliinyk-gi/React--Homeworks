
import LanguageSwitch from './LanguageSwitch/LanguageSwitch';
import TextComponent from '../TextComponent/TextComponent'; 

import styles from './LanguageView.module.css';


const LanguageView = () => {

    return (
        <div className={styles.container}>
            <TextComponent />
            <LanguageSwitch  />
        </div>
    );
};

export default LanguageView;