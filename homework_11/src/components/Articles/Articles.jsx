import { Link } from "react-router-dom";

import articles from "../../data/articles";

import styles from './Articles.module.css';

const Articles = () => {

    const elements = articles.map(item => (
        <li key={item.id}>
            <Link className={styles.link} to={`/articles/${item.id}`}>{item.title}</Link>
        </li>)
    )

    return (
        <ul className={styles.menu}>{elements}</ul>
    )
};

export default Articles;