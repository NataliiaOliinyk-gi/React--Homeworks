import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import articles from "../../data/articles";

import styles from './SingleArticle.module.css';

const SingleArticle = ({ id }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [isVisible, setIsVisible] = useState(true);
    const [isVisibleContent, setIsVisibleContent] = useState(false);

    const element = articles.find(item => item.id === Number(id));

    if (!element) return <div className={styles.error}>Article not found</div>

    const elements = element.content.map((el, idx) => (
        <p key={idx}>{el}</p>
    ))

    const goBack = () => {
        navigate(-1);
    };

    const onView = () => {
        setIsVisible(prev => !prev);
        setIsVisibleContent(prevCont => !prevCont);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.title}>Статья {id}</h2>
                {isVisible && <p onClick={onView} className={styles.content}>Содержание статьи {id} ...</p>}
                {isVisibleContent && <div onClick={onView} className={styles.textContainer}>{elements}</div>}
                <p className={styles.description}>Текущий путь: {location.pathname} </p>
                <div>
                    <button onClick={goBack} className={styles.btn}>Назад</button>
                </div>
            </div>

        </div>
    )
};

export default SingleArticle;