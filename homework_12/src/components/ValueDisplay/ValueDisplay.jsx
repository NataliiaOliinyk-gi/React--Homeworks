import { useRef, useEffect } from "react";

import styles from './ValueDisplay.module.css';

const ValueDisplay = ({ value }) => {

    const previousValueRef = useRef(null);

    useEffect(() => {
        previousValueRef.current = value;
    }, [value]);

    return (
        <div className={styles.container}>
            <p className={styles.text}>
                Current Value:
                <span className={styles.valueText}>{value}</span>
            </p>
            <p className={styles.text}>
                Previous Value:
                <span className={styles.valueText}>{previousValueRef.current}</span>
            </p>
        </div>
    );
};

export default ValueDisplay;