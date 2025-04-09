

import styles from './TitleComponent.module.css';

const TitleComponent = ({ children }) => {
    return (
        <h2 className={styles.title}>
            {children}
        </h2>
    )
};

export default TitleComponent;