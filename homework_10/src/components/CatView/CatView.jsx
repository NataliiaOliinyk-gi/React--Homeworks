import { useState, useEffect } from 'react';

import CatImage from './CatImage/CatImage';

import { getCatImage } from '../../api/catView';
import { defaultValue } from './defaultValue';

import styles from './CatView.module.css';

const CatView = () => {

    const [item, setItem] = useState(defaultValue);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchItem = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getCatImage();
            const cat = data[0];
            setItem(cat);
            
        } catch (error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItem();
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.topBar}>
                <div className={styles.catView}>
                    {loading && <p className={styles.loading}>Loading...</p>}
                    {error && <p className={styles.error}>{error}</p>}
                    <CatImage item={item} onClick={fetchItem}/>
                </div>
                
            </div>
        </div>
    );
};

export default CatView;