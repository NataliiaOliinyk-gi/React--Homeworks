import { useState, useEffect } from 'react';

import styles from './CatImage.module.css';

const CatImage = ({ item, onClick }) => {

    const { url, width, height } = item;

    const defaultValue = {
        width: width,
        height: height
    }

    const [boxSize, setBoxSize] = useState(defaultValue);

    useEffect(() => {
        const maxWidth = window.innerWidth * 0.65;  // 65vw
        const maxHeight = window.innerHeight * 0.65; // 65vh

        const scale = height < maxHeight * 0.9 ? 1 : Math.min(0.9, Math.min(maxWidth / width, maxHeight / height));

        const newWidth = width * scale;
        const newHeight = height * scale;

        setBoxSize({ width: newWidth, height: newHeight });

    }, [width, height]);

    return (
        <div className={styles.catBox}>
            <h2 className={styles.title}>Random Cat Image</h2>
            <div className={styles.catImgBox} style={{ width: boxSize.width, height: boxSize.height }}>
                <img className={styles.catImg} src={url} alt="cat" />
            </div>
            <button onClick={onClick} className={styles.btn}>Load New Image</button>
        </div>
    );
};

export default CatImage;