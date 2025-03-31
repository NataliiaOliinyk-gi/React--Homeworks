import Articles from "../../components/Articles/Articles";

import styles from './ArticlesPage.module.css';

const ArticlesPage = () => {
    return (
        <>
            <h2 className={styles.title}>Список статей</h2>
            <Articles />
        </>
    )
};

export default ArticlesPage;